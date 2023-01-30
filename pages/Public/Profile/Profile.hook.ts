import { Toast } from "react-native-toast-message/lib/src/Toast";
import auth from '@react-native-firebase/auth';
import { ProfileProps } from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import useRouter from "../../../libs/hook/useRouter";
import useAppContext from "../../../context/Context";
import useAuth from "../../../libs/hook/useAuth";
import appxios, { setAuthorizationBearer } from "../../../component/AxiosInterceptor";
import { BaseResponseModel } from "../../../objects/responses/BaseResponseModel";
import { LoginViewModel } from "../../../objects/viewmodels/users/LoginViewModel";
import EndPont from "../../../utils/EndPoint";
import StorageKey from "../../../utils/storageKey";
import { Role } from "../../../objects/enums/Role";
import { useState } from "react";
import { Platform } from "react-native";

export default function useProfilePage(props: ProfileProps) {
    const { navigate, replace } = useRouter();
    const { setUser } = useAppContext();
    const { authenticated, setAuthorize } = useAuth();

    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        const currentUser = await googleLogin();
        setLoading(true);
        if (!currentUser) {
            Toast.show({
                type: "error",
                text1: "Đăng nhập thất bại",
                text2: "Quá trình đăng nhập được hủy"
            });
            setLoading(false);
            return;
        }
        const idToken = await currentUser.getIdToken();
        console.log(idToken);
        const request = {
            idToken: idToken
        };
        const loginResponse = await appxios.post<BaseResponseModel<LoginViewModel>>(EndPont.public.login, request);
        if (loginResponse.status == 200) {
            if (loginResponse.data.data.role != Role.customer && loginResponse.data.data.role != Role.staff) {
                Toast.show({
                    type: "error",
                    text1: "Đăng nhập thất bại",
                    text2: "Tài khoản của bạn không được phép đăng nhập"
                });
                await logout();
                setLoading(false);
                return;
            }
            await loginSuccess(loginResponse.data.data);
            const user = loginResponse.data.data;
            if (
                !user.address ||
                !user.name ||
                !user.phone) {
                replace("AskPersonalInformation");
            }
            else {
                if (user.role == Role.staff) {
                    props.navigation.jumpTo("StaffCampaigns")
                }
                else {
                    props.navigation.jumpTo("Campaigns");
                }
            }
            console.log(loginResponse.data);
            return loginResponse.data.data;
        }
        const createCustomerResponse = await appxios.post<BaseResponseModel<LoginViewModel>>(EndPont.users.index, request);
        console.log(createCustomerResponse.data);
        if (createCustomerResponse.status == 200) {
            await loginSuccess(createCustomerResponse.data.data);
            setLoading(false);
            replace("AskPersonalInformation");
            return loginResponse.data.data;
        }
        Toast.show({
            type: "error",
            text1: "Đăng nhập thất bại",
            text2: "Không thể đăng nhập cho bạn"
        });
        setLoading(false);
        return undefined;
    }
    const loginSuccess = async (user: LoginViewModel) => {
        setUser(user);
        await AsyncStorage.setItem(StorageKey.user, JSON.stringify(user));
        setAuthorizationBearer(user.accessToken);
        setAuthorize([user.role.toString()]);
    }
    const authorizeNavigate = async (page: string) => {
        if (authenticated) {
            navigate(page);
        }
        else {
            const user = await onLogin();
            if (user && user.role.toString() == Role.customer.toString()) {
                navigate(page);
            }
        }
    }
    const googleLogin = async () => {
        if (auth().currentUser) {
            return auth().currentUser;
        }
        try {
            console.log(0);
            if (Platform.OS == "android") {
                await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                console.log(1);
            }
            await GoogleSignin.signOut();
            console.log(2);
            let user = {} as User;
            user = await GoogleSignin.signIn();
            console.log(3);
            const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
            console.log(4);
            const credential = await auth().signInWithCredential(googleCredential);
            console.log(5);
            console.log(credential);
            console.log(6);
            return credential.user;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const logout = async (navigate?: boolean) => {
        if (await GoogleSignin.isSignedIn()) {
            await GoogleSignin.signOut();
            await auth().signOut();
        }
        setAuthorize(false);
        setAuthorizationBearer();
        setUser(undefined);
        await AsyncStorage.removeItem(StorageKey.user);
        if (navigate) {
            props.navigation.jumpTo("Campaigns");
        }
    }

    return {
        loading,
        event:
        {
            authorizeNavigate,
            logout,
            onLogin
        }

    };
    // const [enableBiometric, toogleEnableBiometric, setenableBiometric] = useBoolean(false);
    // const enableBiometricSuccess = () => {
    //     Toast.show({
    //         type: "success",
    //         text1: "Thông báo",
    //         text2: "Kích hoạt khóa sinh trắc học thành công"
    //     });
    // }
    // const enableBiometricFail = () => {
    //     Toast.show({
    //         type: "error",
    //         text1: "Thông báo",
    //         text2: "Kích hoạt khóa sinh trắc học thất bại"
    //     });
    //     setenableBiometric(false);
    // }
    // useAsyncEffect(() => {

    // }, []);
    // useAsyncEffect(async () => {
    //     if (!enableBiometric) {
    //         return;
    //     }
    //     if (!(await TouchID.isSupported())) {
    //         alert("Thiết bị của bạn không hỗ trợ khóa sinh trắc học");
    //         setenableBiometric(false);
    //         return;
    //     }
    //     const optionalConfigObject: AuthenticateConfig = {
    //         title: 'Yêu cầu xác thực', // Android
    //         imageColor: '#e00606', // Android
    //         imageErrorColor: '#ff0000', // Android
    //         sensorDescription: 'Chạm cảm biến vân tay', // Android
    //         sensorErrorDescription: 'Lỗi', // Android
    //         cancelText: 'Hủy', // Android
    //         fallbackLabel: 'Hiện mã pin', // iOS (if empty, then label is hidden)
    //         unifiedErrors: false, // use unified error messages (default false)
    //         passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    //     };
    //     try {
    //         const result: boolean = await TouchID.authenticate('Để chắc chắn bạn là chủ sở hữu của thiết bị này', optionalConfigObject);
    //         if (result) {
    //             enableBiometricSuccess();
    //         }
    //         else {
    //             enableBiometricFail();
    //         }
    //     } catch (error) {
    //         enableBiometricFail();
    //     }

    // }, [enableBiometric]);
    // return {enableBiometric, toogleEnableBiometric};

}