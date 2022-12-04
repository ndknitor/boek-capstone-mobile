import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Toast from "react-native-toast-message";
import auth from '@react-native-firebase/auth';

export default function useGoogleLoginButtonComponent() {
    const googleLogin = async () => {
        // Check if your device supports Google Play
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            Toast.show({
                type: "success",
                text1: "Đăng nhập thành công"
            });
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Đăng nhập thất bại",
                text2: "Quá trình đăng nhập được hủy"
            });
        }
    }
    return { googleLogin };
}