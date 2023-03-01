import { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import appxios from "../../../components/AxiosInterceptor";
import useAppContext from "../../../context/Context";
import useUpdateDepsEffect from "../../../libs/hook/useUpdateDepsEffect";
import { District } from "../../../objects/enums/Districts";
import { Province } from "../../../objects/enums/Province";
import { Role } from "../../../objects/enums/Role";
import { Ward } from "../../../objects/enums/Ward";
import { UpdateCustomerRequestModel } from "../../../objects/requests/users/UpdateCustomerRequestModel";
import { UpdateUserRequestModel } from "../../../objects/requests/users/UpdateUserRequestModel";
import { CustomerUserViewModel } from "../../../objects/viewmodels/Users/customers/CustomerUserViewModel";
import { CustomerViewModel } from "../../../objects/viewmodels/Users/customers/CustomerViewModel";
import { UserViewModel } from "../../../objects/viewmodels/Users/UserViewModel";
import endPont from "../../../utils/endPoints";
import EndPont from "../../../utils/endPoints";
import { maxDate, maxLength, required, validate, ValidationMessages } from "../../../utils/Validators";

export default function usePersonalInformationPage() {
    const { user } = useAppContext();

    const inputNameRef = useRef<TextInput>(null);
    const inputProvinceRef = useRef<SelectDropdown>(null);
    const inputDistrictRef = useRef<SelectDropdown>(null);
    const inputWardRef = useRef<SelectDropdown>(null);
    const inputAddressRef = useRef<TextInput>(null);
    const inputPhoneRef = useRef<TextInput>(null);
    const inputCityRef = useRef<SelectDropdown>(null);

    const [loading, setLoading] = useState(false);
    const [buttonShowed, setButtonShowed] = useState(false);
    const [email, setEmail] = useState("");

    const [provincesSelect, setProvincesSelect] = useState<Province[]>([]);
    const [districtSelect, setDistrictSelect] = useState<District[]>([]);
    const [wardSelect, setWardSelect] = useState<Ward[]>([]);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState<Date>(new Date());
    const [gender, setGender] = useState(false);
    const [province, setProvince] = useState<Province>();
    const [district, setDistrict] = useState<District>();
    const [ward, setWard] = useState<Ward>();
    const [address, setAddress] = useState("");

    const [validator, setValidator] = useState<ValidationMessages>();

    const onProvinceSelected = (selectedProvince: Province) => {
        if (!province || province && province.code != selectedProvince.code) {
            setProvince(selectedProvince);
            setDistrict(undefined);
            setWard(undefined);
            inputDistrictRef.current?.reset();
            setLoading(true);
            appxios.get<District[]>(`${endPont.public.provinces}/${selectedProvince.code}${endPont.lead.districts}`).then(response => {
                setDistrictSelect(response.data);
                setLoading(false);
            });
        }
    }
    const onDistrictSelected = (seletedDistrict: District) => {
        if (!district || district.code != seletedDistrict.code) {
            setDistrict(seletedDistrict);
            setWard(undefined);
            inputWardRef.current?.reset();
            setLoading(true);
            appxios.get<Ward[]>(`${endPont.public.districts}/${seletedDistrict.code}${endPont.lead.ward}`).then(response => {
                console.log(response);
                setWardSelect(response.data);
                setLoading(false);
            });
        }
    }
    const onDistrictSelectedFocus = () => {
        if (!province) {
            Toast.show({
                text1: "Thông báo",
                text2: "Vui lòng chọn tỉnh trước"
            });
            inputDistrictRef.current?.closeDropdown();

        }
    }
    const onWardSelected = (selectedWard: Ward) => {
        if (!ward || ward.code != selectedWard.code) {
            setWard(selectedWard);
        }
    }
    const onWardSelectedFocus = () => {
        if (!district) {
            Toast.show({
                text1: "Thông báo",
                text2: "Vui lòng chọn quận trước"
            });
            inputWardRef.current?.closeDropdown();
        }
    }
    const onSubmit = () => {
        const v = {
            name: [
                required(name, "Tên không được trống"),
                maxLength(name, 128, "Tên không vượt quá 128 ký tự")
            ],
            province: [
                required(province, "Tỉnh không được trống"),
            ],
            district: [
                required(district, "Quận không được trống"),
            ],
            ward: [
                required(ward, "Phường không được trống"),
            ],
            address: [
                required(address, "Địa chỉ không được trống"),
            ],
            dob: [
                required(birth, "Ngày sinh không được trống"),
                maxDate(birth as Date, new Date(), "Ngày sinh không vượt quá hôm nay")
            ],
            phone: [
                required(phone, "Số điện thoại không được trống")
            ]
        };
        setValidator(v);
        if (validate(v)) {
            if (user) {
                if (user.role == Role.customer) {
                    const request: UpdateCustomerRequestModel = {
                        dob: birth,
                        gender: gender,
                        user: {
                            addressRequest: {
                                detail: address,
                                districtCode: district?.code as number,
                                provinceCode: province?.code as number,
                                wardCode: ward?.code as number,
                            },
                            email: user?.email,
                            id: user?.id,
                            imageUrl: user?.imageUrl,
                            name: name,
                            phone: phone,
                            role: user?.role,
                            status: true
                        }
                    }
                    console.log(request);
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
                        addressRequest: {
                            detail: address,
                            districtCode: district?.code as number,
                            provinceCode: province?.code as number,
                            wardCode: ward?.code as number,
                        },
                        id: user.id,
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
        appxios.get<Province[]>(endPont.public.provinces).then(getProvinceResponse => {
            setProvincesSelect(getProvinceResponse.data);
            if (user && user.role == Role.customer) {
                appxios.get<CustomerViewModel>(EndPont.users.me).then(async getUserresponse => {
                    setEmail(getUserresponse.data.user.email);
                    setName(getUserresponse.data.user.name);
                    setPhone(getUserresponse.data.user.phone);
                    setAddress(getUserresponse.data.user.addressViewModel.detail);
                    if (getUserresponse.data.dob) {
                        setBirth(new Date(getUserresponse.data.dob));
                    }
                    setGender(getUserresponse.data.gender as boolean);
                    const districtsResponse = await appxios.get<District[]>(`${endPont.public.provinces}/${getUserresponse.data.user.addressViewModel.provinceCode}${endPont.lead.districts}`);
                    const wardsResponse = await appxios.get<Ward[]>(`${endPont.public.districts}/${getUserresponse.data.user.addressViewModel.districtCode}${endPont.lead.ward}`);
                    setDistrictSelect(districtsResponse.data);
                    setWardSelect(wardsResponse.data);

                    setProvince(getProvinceResponse.data.find(p => p.code == getUserresponse.data.user.addressViewModel.provinceCode));
                    setDistrict(districtsResponse.data.find(d => d.code == getUserresponse.data.user.addressViewModel.districtCode));
                    setWard(wardsResponse.data.find(w => w.code == getUserresponse.data.user.addressViewModel.wardCode));

                }).finally(() => {
                    setLoading(false);
                })
            }
            else if (user && user.role == Role.staff) {
                appxios.get<UserViewModel>(EndPont.users.me).then(async getUserResponse => {
                    console.log(getUserResponse.data);

                    const districtsResponse = await appxios.get<District[]>(`${endPont.public.provinces}/${getUserResponse.data.addressViewModel.provinceCode}${endPont.lead.districts}`);
                    const wardsResponse = await appxios.get<Ward[]>(`${endPont.public.districts}/${getUserResponse.data.addressViewModel.districtCode}${endPont.lead.ward}`);
                    setEmail(getUserResponse.data.email);
                    setName(getUserResponse.data.name);
                    setPhone(getUserResponse.data.phone);
                    setProvince(getProvinceResponse.data.find(p => p.code == getUserResponse.data.addressViewModel.provinceCode));
                    setDistrict(districtsResponse.data.find(d => d.code == getUserResponse.data.addressViewModel.districtCode));
                    setWard(wardsResponse.data.find(w => w.code == getUserResponse.data.addressViewModel.wardCode));
                    setAddress(getUserResponse.data.addressViewModel.detail);
                })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        });

    }, []);

    useUpdateDepsEffect(() => {
        if (!loading) {
            if (!buttonShowed) {
                setButtonShowed(true);
            }
        }
    }, [name, gender, province, birth, district, ward, address, phone]);

    return {
        buttonShowed,
        loading,
        validator,
        ref: {
            inputNameRef,
            inputProvinceRef,
            inputDistrictRef,
            inputWardRef,
            inputAddressRef,
            inputPhoneRef,
            inputCityRef
        },
        data: {
            email,
            provincesSelect,
            districtSelect,
            wardSelect
        },
        event: {
            onSubmit,
            onDistrictSelected,
            onDistrictSelectedFocus,
            onProvinceSelected,
            onWardSelected,
            onWardSelectedFocus
        },
        input:
        {
            name:
            {
                value: name,
                set: setName
            },
            phone: {
                value: phone,
                set: setPhone
            },
            birth: {
                value: birth,
                set: setBirth
            },
            province: {
                value: province,
                set: setProvince
            },
            district: {
                value: district,
                set: setDistrict
            },
            ward: {
                value: ward,
                set: setWard
            },
            address: {
                value: address,
                set: setAddress
            },
            gender:
            {
                value: gender,
                set: setGender
            }
        }
    };
}
