import React from 'react'
import { View, Text, ImageSourcePropType, Image, Dimensions, TouchableOpacity, GestureResponderEvent } from 'react-native'
interface LabeledImageProps {
    source: ImageSourcePropType;
    label: string;
    onPress?: (event : GestureResponderEvent) => void;
}
function LabeledImage(props: LabeledImageProps) {
    return (
        <View
            style={{
                width: 100,
                height: 90,
                alignItems: "center",
                justifyContent: "center"
            }}>
            <TouchableOpacity
                onPress={props.onPress}
                style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <View
                    style={{
                        borderWidth: 1,
                        width: 50,
                        height: 50,
                        borderRadius: 999,
                        overflow: "hidden",
                        marginBottom: 5
                    }}>
                    <Image source={props.source} style={{ width: 50, height: 50 }} resizeMode="cover" />
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>{props.label}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LabeledImage