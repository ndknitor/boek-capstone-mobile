import React from 'react'
import { View, Text, ImageSourcePropType, Image, Dimensions, TouchableOpacity } from 'react-native'
interface LabeledImageProps {
    source: ImageSourcePropType;
    label: string;
    onPress?: () => void;
}
function LabeledImage(props: LabeledImageProps) {
    return (
        <TouchableOpacity style={{ width: 100, height: 100, alignItems: "center", marginLeft: 10, marginRight: 10, marginBottom: 40, marginTop: 10 }}>
            <View style={{ borderRadius: 9999, borderColor: "green", borderWidth: 1, overflow: "hidden", width: "80%", height: "80%" }}>
                <Image source={props.source} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
            </View>
            <View style={{ alignItems: "center", width: "100%", marginTop: 6 }}>
                <Text>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LabeledImage