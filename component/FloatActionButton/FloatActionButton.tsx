import React, { PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native'
import { primaryColor } from '../../utils/color';
interface FloatActionButtonProps extends PropsWithChildren {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}
function FloatActionButton(props: FloatActionButtonProps) {
    return (
        <TouchableOpacity style={{
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            width: 50,
            height: 50,
            backgroundColor: primaryColor,
            borderRadius: 999,
            overflow : "hidden",
            position: "absolute",
            zIndex: 1,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24
        }}>
            {props.children}
        </TouchableOpacity>
    )
}

export default FloatActionButton