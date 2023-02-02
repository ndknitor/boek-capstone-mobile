import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Image, Text } from 'react-native'
import useRouter from '../../libs/hook/useRouter';
import { primaryColor } from '../../utils/color';
import arrowBackWhite from "../../assets/icons/arrow-back-white.png";
interface HeaderProps {
    title?: string;
}
function Header(props: HeaderProps) {
    const { canGoBack, goBack } = useRouter();
    return (
        <SafeAreaView style={{ backgroundColor: primaryColor }}>
            <View style={{
                height: 60,
                width: "98%",
                flexDirection: "row",
            }}>
                <View
                    style={{
                        //borderWidth: 1,
                        width: canGoBack() ? "10%" : 0,
                        height: "100%"
                    }}>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%"
                        }}
                        onPress={goBack}>
                        <Image source={arrowBackWhite} resizeMode="contain" style={{ width: "100%", height: "40%" }} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        //borderWidth: 1,
                        width: "80%",
                        height: "100%",
                        justifyContent: "center",
                        paddingLeft: 15
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "500",
                            color: "white"
                        }}>{props.title}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header