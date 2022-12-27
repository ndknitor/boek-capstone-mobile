import React from 'react'
import { TouchableOpacity, View, Image, TextInput } from 'react-native'
import arrowBack from "../../assets/icons/arrow-back-white.png";
import searchWhite from "../../assets/icons/search-white.png";
import useRouter from '../../libs/hook/useRouter';
import { paletteGray, primaryColor } from '../../utils/color';
interface HeaderSearchBarProps {
    value?: string;
    onChangeText?: (e: string) => void;
    onSubmit?: () => void;
}
function HeaderSearchBar(props: HeaderSearchBarProps) {
    const { goBack, canGoBack } = useRouter();
    return (
        <View style={{ height: 55 }}>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: primaryColor }}>
                {
                    canGoBack() &&
                    <TouchableOpacity onPress={(e) => goBack()} style={{ marginBottom: 20, width: "10%", height: "100%", alignItems: "center", justifyContent: "center" }} >
                        <Image source={arrowBack} style={{ width: "40%", height: "40%" }} />
                    </TouchableOpacity>
                }

                <View style={{ width: canGoBack() ? "75%" : "85%", paddingLeft: 10 }}>
                    <TextInput value={props.value} onChangeText={props.onChangeText} placeholderTextColor={paletteGray} placeholder="Tìm kiếm" style={{ fontSize: 16, color: "white", borderBottomWidth: 1, borderBottomColor: "white", height: "75%" }} />
                </View>
                <View style={{ width: "15%" }}>
                    <TouchableOpacity onPress={props.onSubmit} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <Image source={searchWhite} style={{ height: "50%" }} resizeMode="contain" />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default HeaderSearchBar