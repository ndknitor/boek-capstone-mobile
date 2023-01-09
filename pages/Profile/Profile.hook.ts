import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import auth from '@react-native-firebase/auth';
import useAuth from "../../libs/hook/useAuth";
import useRouter from "../../libs/hook/useRouter";
import { staff } from "../../utils/roles";
import { ProfileProps } from "./Profile";

export default function useProfilePage(props: ProfileProps) {
    const { navigate, replace } = useRouter();
    const { authenticated, setAuthorize } = useAuth();
    const authorizeNavigate = async (page: string) => {
        // if (authenticated) {
        //     navigate(page);
        // }
        // else {
        //     const auth = await googleLogin();
        //     if (auth) {
        //         googleLoginOnSuccess();
        //         //navigate(page);
        //     }
        // }
        navigate(page);
    }
    const googleLogin = async () => {
        // Check if your device supports Google Play
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            let user: User = {} as User;
            if (await GoogleSignin.isSignedIn()) {
                user = (await GoogleSignin.getCurrentUser())!;
            }
            else {
                user = await GoogleSignin.signIn();
            }
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Đăng nhập thất bại",
                text2: "Quá trình đăng nhập được hủy"
            });
        }
    }
    const googleLoginOnSuccess = () => {
        setAuthorize([staff]);
        //check if first login
        //
    }
    const logout = async () => {
        await GoogleSignin.signOut();
        props.jumpTo("0");
        setAuthorize(false);
    }
    return { authorizeNavigate, googleLoginOnSuccess, logout };
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