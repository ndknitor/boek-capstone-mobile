import React from 'react';
import { CheckBox } from '@rneui/base';;
import useLoginPage from './Login.hook';
import { View, Text, Image, StyleSheet } from 'react-native';
import GoogleLoginButton from '../../component/GoogleLoginButton/GoogleLoginButton';
import background from "../../assets/book_gettyimages.jpg";
import logo from '../../assets/logo.png';

function Login() {
    const { checkPosition, togglCheckPosition } = useLoginPage();
    return (
        <>
            <Image source={background} style={styles.backgroundImage} />
            <View style={styles.container}>
                <View style={styles.outerWarp}>
                    <View style={styles.logoWarp}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.inputWarp}>
                        <Text style={styles.inputHead}>Chào mừng bạn đến với Boek</Text>
                        <CheckBox checked={checkPosition} onPress={() => togglCheckPosition()} title="Cho phép biết vị trí của bạn" />
                        <GoogleLoginButton />
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        opacity: 0.5,
    },
    container: {
        height: '83.3%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outerWarp: {
        width: "91.666667%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoWarp: {
        width: "83.333333%",
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'stretch',
        width: 208,
        height: 208
    },
    inputWarp: {
        alignItems: 'center',
        height: "60%",
        width: "83.333333%"
    },
    inputHead: {
        fontWeight: '600',
        fontSize: 20
    }
});

export default Login