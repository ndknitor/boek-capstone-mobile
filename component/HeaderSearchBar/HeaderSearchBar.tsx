import { NavigationContainerProps } from '@react-navigation/native';
import { Input } from '@rneui/base';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View, Image, TextInput, Animated, Easing, NativeSyntheticEvent, TextInputFocusEventData, SafeAreaView } from 'react-native'
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
        <View style={{ height: "110%", width: "98%", flexDirection: "row" }}>
            <View style={{ width: "90%" }}>
                <Input
                    onSubmitEditing={props.onSubmit}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={paletteGray}
                    placeholder="Tìm kiếm"
                    style={{
                        //borderWidth: 1,
                        color: "white",
                        fontSize: 16,
                        borderBottomWidth: 1,
                        borderBottomColor: "white"
                    }} />
            </View>
            <View style={{ width: "10%", paddingTop: 5 }}>
                <TouchableOpacity onPress={props.onSubmit} style={{ height: "100%" }}>
                    <Image source={searchWhite} style={{ width: 35 }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderSearchBar