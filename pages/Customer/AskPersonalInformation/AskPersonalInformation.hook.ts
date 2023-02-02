import { ParamListBase } from "@react-navigation/native";
import { useReducer, useRef, useState } from "react";
import { TextInput } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import useAsyncEffect from "use-async-effect";
import useAppContext from "../../../context/Context";
import { maxDate, maxLength, required, validate, ValidationMessages } from "../../../utils/Validators";
import { CustomerUserViewModel } from "../../../objects/viewmodels/Users/customers/CustomerUserViewModel";
import appxios from "../../../components/AxiosInterceptor";
import EndPont from "../../../utils/endPoints";
import { UpdateCustomerRequestModel } from "../../../objects/requests/users/UpdateCustomerRequestModel";
import SelectDropdown from "react-native-select-dropdown";

export default function useAskPersonalInformationPage(props: StackScreenProps<ParamListBase>) {
    const { user, setUser } = useAppContext();

    const fullNameInputRef = useRef<TextInput>(null);
    const addressInputRef = useRef<SelectDropdown>(null);
    const phoneInputRef = useRef<TextInput>(null);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [birth, setBirth] = useState<Date>();
    const [gender, setGender] = useState(true);
    const [phone, setPhone] = useState("");
    const [level, setLevel] = useState(0);
    const [point, setPoint] = useState(0);

    const [validator, setValidator] = useState<ValidationMessages>();

    const onSubmit = async () => {
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
            ]
        }
        setValidator(v);
        if (validate(v)) {
            const request: UpdateCustomerRequestModel = {
                point : point,
                dob: birth,
                gender: gender,
                user: {
                    address: address,
                    email: user?.email as string,
                    id: user?.id as string,
                    imageUrl: user?.imageUrl as string,
                    name: name,
                    phone: phone,
                    role: user?.role
                }
            }
            const response = await appxios.put<CustomerUserViewModel>(EndPont.users.customer, request)
            console.log(response.data);
            if (response.status == 200) {
                const repsonseUser = response.data;
                if (user) {
                    setUser({
                        ...user,
                        name: repsonseUser.user.name,
                        address: repsonseUser.user.address,
                        dob: repsonseUser.dob as Date,
                        phone: repsonseUser.user.phone
                    });
                }
                props.navigation.replace("AskGenresWizard");
            }
        }
    }

    useAsyncEffect(async () => {
        const response = await appxios.get<CustomerUserViewModel>(EndPont.users.me);
        console.log(response.status);
        if (user) {
            setName(user?.name as string);
            setAddress(user.address);
            setPhone(user.phone);
            setPoint(response.data.point as number);
            setGender(response.data.gender);
            console.log(response.data.dob);
            if (response.data.dob) {
                setBirth(new Date(response.data.dob));
            }
        }

    }, []);

    return {
        ref: {
            fullNameInputRef,
            addressInputRef,
            phoneInputRef
        },
        input: {
            fullName: {
                value: name,
                set: setName
            },
            address: {
                value: address,
                set: setAddress
            },
            birth: {
                value: birth,
                set: setBirth
            },
            gender: {
                value: gender,
                set: setGender
            },
            phone: {
                value: phone,
                set: setPhone
            }
        },
        validator,
        onSubmit
    };
}