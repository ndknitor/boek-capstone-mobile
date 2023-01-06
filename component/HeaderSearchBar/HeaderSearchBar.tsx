import React, { PropsWithChildren, useEffect, useState } from 'react'
import { TouchableOpacity, View, Image, TextInput, Animated, Easing } from 'react-native'
import arrowBack from "../../assets/icons/arrow-back-white.png";
import searchWhite from "../../assets/icons/search-white.png";
import useRouter from '../../libs/hook/useRouter';
import { paletteGray, primaryColor } from '../../utils/color';
interface HeaderSearchBarProps extends PropsWithChildren {
    expanded?: boolean;
    expandHeight?: number;
    value?: string;
    onChangeText?: (e: string) => void;
    onSubmit?: () => void;
}
function HeaderSearchBar(props: HeaderSearchBarProps) {
    const [animationHeight] = useState(new Animated.Value(0));
    const nonExpandHeight = 55;
    const expandHeight = props.expandHeight || 100;
    useEffect(() => {
        if (props.expanded) {
            Animated.timing(animationHeight, {
                duration: 100,
                toValue: expandHeight,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        }
        else {
            Animated.timing(animationHeight, {
                duration: 100,
                toValue: nonExpandHeight,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        }
    }, [props.expanded]);
    const { goBack, canGoBack } = useRouter();
    return (
        <Animated.View style={{ height: animationHeight, backgroundColor: primaryColor }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    maxHeight: 55
                }}>
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
            <View style={{
                display: props.expanded ? "flex" : "none",
                height: expandHeight - nonExpandHeight,
            }}>
                {props.children}
            </View>
        </Animated.View>
    )
}

export default HeaderSearchBar