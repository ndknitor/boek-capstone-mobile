import { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import appxios from "../../../components/AxiosInterceptor";
import useAppContext from "../../../context/Context";
import useUpdateDepsEffect from "../../../libs/hook/useUpdateDepsEffect";
import { Role } from "../../../objects/enums/Role";
import { UpdateCustomerRequestModel } from "../../../objects/requests/users/UpdateCustomerRequestModel";
import { UpdateUserRequestModel } from "../../../objects/requests/users/UpdateUserRequestModel";
import { CustomerUserViewModel } from "../../../objects/viewmodels/Users/customers/CustomerUserViewModel";
import { CustomerViewModel } from "../../../objects/viewmodels/Users/customers/CustomerViewModel";
import { UserViewModel } from "../../../objects/viewmodels/Users/UserViewModel";
import EndPont from "../../../utils/endPoints";
import { maxDate, maxLength, required, validate, ValidationMessages } from "../../../utils/Validators";

export default function usePersonalInformationPage() {
    const { user } = useAppContext();

    const inputNameRef = useRef<TextInput>(null);
    const inputAddressRef = useRef<TextInput>(null);
    const inputPhoneRef = useRef<TextInput>(null);
    const inputCityRef = useRef<SelectDropdown>(null);

    const [loading, setLoading] = useState(false);
    const [buttonShowed, setButtonShowed] = useState(false);
    const [email, setEmail] = useState("");

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState<Date>(new Date());
    const [gender, setGender] = useState(false);
    const [point, setPoint] = useState(0);

    const [validator, setValidator] = useState<ValidationMessages>();

    const onSubmit = () => {
        const v = {
            name: [
                required(name, "Tên không được trống"),
                maxLength(name, 128, "Tên không vượt quá 128 ký tự")
            ],
            address: [
                required(address, "Địa chỉ không được trống"),
                maxLength(address, 128, "Địa chỉ không vượt quá 128 ký tự")
            ],
            dob: [
                required(birth, "Ngày sinh không được trống"),
                maxDate(birth as Date, new Date(), "Ngày sinh không vượt quá hôm nay")
            ],
            phone: [
                required(phone, "Số điện thoại không được trống")
            ],
            city : [
                required(city, "Thành phố không được trống")
            ]
        }
        setValidator(v);
        if (validate(v)) {
            if (user) {
                if (user.role == Role.customer) {
                    const request: UpdateCustomerRequestModel = {
                        point: point,
                        dob: birth,
                        gender: gender,
                        user: {
                            address: address,
                            email: user?.email,
                            id: user?.id,
                            imageUrl: user?.imageUrl,
                            name: name,
                            phone: phone,
                            role: user?.role
                        }
                    }
                    appxios.put<CustomerUserViewModel>(EndPont.users.customer, request).then(response => {
                        setButtonShowed(false);
                        Toast.show({
                            text1: "Thông báo",
                            text2: "Lưu thành công"
                        })
                    });
                }
                if (user.role == Role.staff) {
                    const request: UpdateUserRequestModel = {
                        id: user.id,
                        address: address,
                        email: user.email,
                        imageUrl: user.imageUrl,
                        name: name,
                        phone: phone,
                        role: user.role
                    };
                    appxios.put<CustomerUserViewModel>(EndPont.users.staff, request).then(response => {
                        Toast.show({
                            text1: "Thông báo",
                            text2: "Lưu thành công"
                        });
                        setButtonShowed(false);
                    });
                }
            }
        }
    }

    useEffect(() => {
        setLoading(true);
        if (user && user.role == Role.staff) {
            appxios.get<UserViewModel>(EndPont.users.me).then(response => {
                setEmail(response.data.email);
                setName(response.data.name);
                setAddress(response.data.address);
                setPhone(response.data.phone);
            })
                .finally(() => {
                    setLoading(false);
                });
        }
        if (user && user.role == Role.customer) {
            appxios.get<CustomerViewModel>(EndPont.users.me).then(response => {
                setEmail(response.data.user.email);
                setPoint(response.data.point as number);
                setName(response.data.user.name);
                setAddress(response.data.user.address);
                setPhone(response.data.user.phone);
                if (response.data.dob) {
                    setBirth(new Date(response.data.dob));
                }
                setGender(response.data.gender as boolean);
            })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    useUpdateDepsEffect(() => {
        if (!loading) {
            if (!buttonShowed) {
                setButtonShowed(true);
            }
        }
    }, [name, gender, address, phone, city]);

    return {
        buttonShowed,
        loading,
        validator,
        ref: {
            inputNameRef,
            inputAddressRef,
            inputPhoneRef,
            inputCityRef
        },
        data: {
            email
        },
        event: {
            onSubmit
        },
        input:
        {
            name:
            {
                value: name,
                set: setName
            },
            address: {
                value: address,
                set: setAddress
            },
            city: {
                value: city,
                set: setCity
            },
            phone: {
                value: phone,
                set: setPhone
            },
            birth: {
                value: birth,
                set: setBirth
            },
            gender:
            {
                value: gender,
                set: setGender
            }
        }
    };
}
