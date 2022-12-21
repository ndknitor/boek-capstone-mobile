import React from 'react';
import { CheckBox } from '@rneui/base';;
import useLoginPage from './Login.hook';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import GoogleLoginButton from '../../component/GoogleLoginButton/GoogleLoginButton';
import background from "../../assets/book_gettyimages.jpg";
import logo from '../../assets/logo.png';
import SelectedChip from '../../component/SeletedChip/SelectedChip';
import { Input } from '@rneui/themed';
import StateLoader from '../../component/StateLoader/StateLoader';

function Login() {
    const { checkPosition, togglCheckPosition, isKeyboardVisible, searchMessage } = useLoginPage();

    return (
        <>
            <Image source={background} style={styles.backgroundImage} />
            <View style={{
                ...styles.container,
                maxHeight: isKeyboardVisible ? "100%" : "87%",
                borderBottomLeftRadius: isKeyboardVisible ? 0 : 16,
                borderBottomRightRadius: isKeyboardVisible ? 0 : 16
            }}>
                <View style={styles.outerWarp}>
                    <View style={{ ...styles.logoWarp, display: isKeyboardVisible ? "none" : "flex" }}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={{ ...styles.inputWarp, height: isKeyboardVisible ? "90%" : "60%" }}>
                        <Text style={styles.inputHead}>Chào mừng bạn đến với Boek</Text>
                        <View style={{ marginBottom: 30 }} />
                        <Text style={{ alignSelf: "flex-start" }}>Bạn muốn theo dõi hội sách từ tổ chức nào ?</Text>
                        <View style={{ marginBottom: 10 }} />

                        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }} style={{ minWidth: "100%", maxHeight: "90%", minHeight: "30%", marginBottom: 30 }}>

                            <SelectedChip label="FPT" selected />
                            <SelectedChip label="Viettel" />
                            <SelectedChip label="VNPT" />
                            <SelectedChip label="Vinaporn" />
                            <SelectedChip label="Kim Đồng" />
                            <SelectedChip label="Lều báo" />
                            <SelectedChip label="FPT" selected />
                            <SelectedChip label="Viettel" />
                            <SelectedChip label="VNPT" />
                            <SelectedChip label="Vinaporn" />
                            <SelectedChip label="Kim Đồng" />
                            <SelectedChip label="Lều báo" />
                            <SelectedChip label="FPT" selected />
                            <SelectedChip label="Viettel" />
                            <SelectedChip label="VNPT" />
                            <SelectedChip label="Vinaporn" />
                            <SelectedChip label="Kim Đồng" />
                            <SelectedChip label="Lều báo" />

                        </ScrollView>
                        <Input placeholder="Tìm kiếm tổ chức" />
                        <Text style={{ color: "red" }}>{searchMessage}</Text>
                        <CheckBox checked={checkPosition} onPress={() => togglCheckPosition()} title="Cho phép biết vị trí của bạn" />
                        <View style={{ marginBottom: 10 }} />
                        <StateLoader loading={false}>
                            <GoogleLoginButton />
                        </StateLoader>

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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    outerWarp: {
        width: "91.666667%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logoWarp: {
        width: "83.333333%",
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'stretch',
        width: 196,
        height: 196
    },
    inputWarp: {
        alignItems: 'center',
        width: "83.333333%"
    },
    inputHead: {
        fontWeight: '600',
        fontSize: 20
    }
});

export default Login