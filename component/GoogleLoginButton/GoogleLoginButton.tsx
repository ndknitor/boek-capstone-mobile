import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet,Text } from 'react-native';
import googleLogo from '../../assets/google.png';
import useGoogleLoginButtonComponent from './GoogleLoginButton.hook';

function GoogleLoginButton() {
    const { googleLogin } = useGoogleLoginButtonComponent();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch} onPress={async () => await googleLogin()} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Đăng nhập</Text>
                </View>
                <Image style={styles.image} source={googleLogo} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 9,
        borderRadius: 16,
        height : 55
    },
    touch : {
        flex : 1,
        flexDirection : "row"
    },
    titleContainer : {
        alignItems : "center",
        justifyContent : "center"
    },
    title : {
        fontWeight : "500",
        fontSize : 16,
        lineHeight : 24,
        marginLeft : 20
    },
    image : {
        marginLeft : 16,
        marginRight : 12,
        marginTop : 8,
        marginBottom : 8,
        width: 40, 
        height: 40
    }
});

export default GoogleLoginButton