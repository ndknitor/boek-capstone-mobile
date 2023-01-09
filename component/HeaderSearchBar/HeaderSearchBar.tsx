import { NavigationContainerProps } from '@react-navigation/native';
import { Input } from '@rneui/base';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View, Image, TextInput, Animated, Easing, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'
import arrowBack from "../../assets/icons/arrow-back-white.png";
import searchWhite from "../../assets/icons/search-white.png";
import { paletteGray, primaryColor } from '../../utils/color';

interface HeaderSearchBarProps extends PropsWithChildren {
    focus: boolean;
    value?: string;
    onChangeText?: (e: string) => void;
    onSubmit?: () => void;
}
function HeaderSearchBar(props: HeaderSearchBarProps) {
    return (
        <View style={{ height: "100%" }}>
            <View
                style={{
                    //borderWidth: 1,
                    flexDirection: "row",
                    width: "85%"
                }}>
                <Input
                    onSubmitEditing={props.onSubmit}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={paletteGray}
                    placeholder="Tìm kiếm"
                    style={{
                        color : "white",
                        fontSize: 16,
                        borderBottomWidth: 1,
                        borderBottomColor: "white",
                        width: "100%"
                    }} />
                <View style={{ width: "15%" }}>
                    <TouchableOpacity onPress={props.onSubmit} style={{ alignItems: "center", justifyContent: "center", width: 30, height: "100%" }}>
                        <Image source={searchWhite} style={{ width: "100%" }} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HeaderSearchBar