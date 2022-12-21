import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps, ColorValue } from 'react-native'
import useSelectedChipComponent from './SelectedChip.hook'
export interface SelectedChipProps extends TouchableOpacityProps {
    selected?: boolean;
    label: string;
    selectedBackgroundColor?: ColorValue | undefined;
    unSelectedBackgroundColor?: ColorValue | undefined;
    selectedTextColor?: ColorValue | undefined;
    unSelectedTextColor?: ColorValue | undefined;
}
function SelectedChip(props: SelectedChipProps) {
    const { getBackgroundColor, getTextColor } = useSelectedChipComponent(props);
    return (
        <TouchableOpacity style={{
            backgroundColor: getBackgroundColor(),
            borderRadius: 16,
            minHeight: 30,
            minWidth: 60,
            margin: 5,
            alignItems: "center",
            justifyContent: "center",
            padding: 8
        }} {...props}>
            <Text style={{ color: getTextColor() }}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default SelectedChip