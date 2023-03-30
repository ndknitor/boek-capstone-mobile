import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Info from "../../../assets/SvgComponents/Info";

export default function useCreateConfirmOrderPage(props: StackScreenProps<ParamListBase>) {
    const [infoModalVisible, setInfoModalVisible] = useState(false);
    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () =>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setInfoModalVisible(true)}>
                        <Info scale={60} fill="white" />
                    </TouchableOpacity>
                </View>
        });
    }, []);
    return {
        ui: {
            infoModalVisible,
            setInfoModalVisible
        }
    };
}