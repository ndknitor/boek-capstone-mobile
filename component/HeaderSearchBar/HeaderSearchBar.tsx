import {  NavigationContainerProps} from '@react-navigation/native';
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { TouchableOpacity, View, Image, TextInput, Animated, Easing } from 'react-native'
import arrowBack from "../../assets/icons/arrow-back-white.png";
import searchWhite from "../../assets/icons/search-white.png";
import useRouter from '../../libs/hook/useRouter';
import { paletteGray, primaryColor } from '../../utils/color';

interface HeaderSearchBarProps extends PropsWithChildren {
    value?: string;
    onChangeText?: (e: string) => void;
    onSubmit?: () => void;
}
function HeaderSearchBar(props: HeaderSearchBarProps) {
    // const [animationHeight] = useState(new Animated.Value(0));
    // const nonExpandHeight = 55;
    // useEffect(() => {
    //     if (props.expanded) {
    //         Animated.timing(animationHeight, {
    //             duration: 100,
    //             toValue: expandHeight,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    //     else {
    //         Animated.timing(animationHeight, {
    //             duration: 100,
    //             toValue: nonExpandHeight,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    // }, [props.expanded]);
    // const { goBack, canGoBack } = useRouter();
    return (
        <View style={{ height: "100%" }}>
            <View
                style={{
                    //borderWidth: 1,
                    flexDirection: "row"
                }}>
                <TextInput
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={paletteGray}
                    placeholder="Tìm kiếm"
                    style={{
                        fontSize: 16,
                        color: "white",
                        borderBottomWidth: 1,
                        borderBottomColor: "white",
                        paddingBottom: 4,
                        height: "75%",
                        width: "83%"
                    }} />
                <View style={{ width: "15%" }}>
                    <TouchableOpacity onPress={props.onSubmit} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <Image source={searchWhite} style={{ height: "100%" }} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HeaderSearchBar