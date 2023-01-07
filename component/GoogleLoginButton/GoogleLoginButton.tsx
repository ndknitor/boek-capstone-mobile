import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import googleLogo from '../../assets/icons/google.png';
import { shade8, shade9 } from '../../utils/color';
import useGoogleLoginButtonComponent from './GoogleLoginButton.hook';
export interface GoogleLoginButtonProps {
    onSuccess?: (credential: FirebaseAuthTypes.AuthCredential) => void;
}
function GoogleLoginButton(props: GoogleLoginButtonProps) {
    const { googleLogin } = useGoogleLoginButtonComponent(props);
    return (
        <TouchableOpacity style={{
            backgroundColor: shade9,//'#F8F8F8',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 9,
            borderRadius: 16,
            height: 50,
            width: "100%"
        }}
            onPress={async (e) => await googleLogin()}>
            <View style={{ width: "100%", flexDirection: "row", height: "100%" }}>
                <View style={{ alignItems: "center", justifyContent: "center", width: "65%", height: "100%" }}>
                    <Text style={styles.title}>Đăng nhập</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", width: "35%" }}>
                    <Image style={{
                        width: Dimensions.get("screen").width / 100 * 10,
                        height: Dimensions.get("screen").width / 100 * 10
                    }} source={googleLogo} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    title: {
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 24,
    }
});

export default GoogleLoginButton