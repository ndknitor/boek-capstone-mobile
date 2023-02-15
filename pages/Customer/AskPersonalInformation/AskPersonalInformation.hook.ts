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
import endPont from "../../../utils/endPoints";
import { Province } from "../../../objects/enums/Province";
import { District } from "../../../objects/enums/Districts";
import { Ward } from "../../../objects/enums/Ward";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import useRouter from "../../../libs/hook/useRouter";

export default function useAskPersonalInformationPage(props: StackScreenProps<ParamListBase>) {

    const { setCreateCustomerRequestModel, createCustomerRequestModel } = useAppContext();
    const { replace } = useRouter();

    const [loading, setLoading] = useState(false);

    const fullNameInputRef = useRef<TextInput>(null);
    const wardInputRef = useRef<SelectDropdown>(null);
    const districtInputRef = useRef<SelectDropdown>(null);
    const provinceInputRef = useRef<SelectDropdown>(null);
    const phoneInputRef = useRef<TextInput>(null);

    const [provincesSelect, setProvincesSelect] = useState<Province[]>([]);
    const [districtSelect, setDistrictSelect] = useState<District[]>([]);
    const [wardSelect, setWardSelect] = useState<Ward[]>([]);

    const [name, setName] = useState("");
    const [province, setProvince] = useState<Province>();
    const [district, setDistrict] = useState<District>();
    const [ward, setWard] = useState<Ward>();

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
            province: [
                required(province, "Tỉnh không được trống"),
            ],
            district: [
                required(district, "Quận không được trống"),
            ],
            ward: [
                required(ward, "Phường không được trống"),
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
            setCreateCustomerRequestModel({
                idToken : createCustomerRequestModel?.idToken as string,
                address : {
                    districtCode: district?.code as number,
                    provinceCode : province?.code as number,
                    wardCode : ward?.code as number,
                    detail : address
                },
                Dob : birth,
                gender : gender,
                name : name,
                phone : phone
            });
            replace("AskGenresWizard");
        }
    }
    const onProvinceSelected = (selectedProvince: Province) => {
        if (!province || province && province.code != selectedProvince.code) {
            setProvince(selectedProvince);
            setDistrict(undefined);
            setWard(undefined);
            districtInputRef.current?.reset();
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
            wardInputRef.current?.reset();
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
            districtInputRef.current?.closeDropdown();

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
            wardInputRef.current?.closeDropdown();
        }
    }
    useAsyncEffect(async () => {
        appxios.get<Province[]>(endPont.public.provinces).then(response => {
            setProvincesSelect(response.data);
        });

    }, []);

    return {
        loading,
        ref: {
            wardInputRef,
            fullNameInputRef,
            provinceInputRef,
            districtInputRef,
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
            ward: {
                value: ward,
                set: setWard
            },
            province: {
                value: province,
                set: setProvince
            },
            district: {
                value: district,
                set: setDistrict
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
        data: {
            provincesSelect,
            districtSelect,
            wardSelect
        },
        event: {
            onSubmit,
            onProvinceSelected,
            onDistrictSelected,
            onDistrictSelectedFocus,
            onWardSelected,
            onWardSelectedFocus
        },
        validator,
    };
}