import React from 'react'
import { View, TouchableOpacity, Text,Image } from 'react-native';
import arrowRightBlack from '../../assets/arrow-right-black.png';
interface Props {
    label: string;
    onPress?: () => void;
}
function TouchCard(props: Props) {
    return (
        <TouchableOpacity
            style={{
                minHeight: 50,
                borderBottomWidth: 2,
                borderBottomColor: "#CBD5EB",
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                flex: 1,
                flexDirection: "row"
            }} onPress={props.onPress}>
            <View style={{ width: "75%", paddingLeft: 12 }}>
                <Text>{props.label}</Text>
            </View>
            <View style={{ minWidth: "25%", paddingLeft: 12, flex: 1, alignItems: "flex-end" }}>
                <Image source={arrowRightBlack} style={{ marginRight: 20, width: 20, height: 16 }}></Image>
            </View>
        </TouchableOpacity>
    )
}
export default TouchCard