import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Info from "../../../assets/SvgComponents/Info";

export default function useOrderConfirmPage(props: StackScreenProps<ParamListBase>) {
    const [infoModalVisible, setInfoModalVisible] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(0);

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
        input: {
            paymentMethod: {
                value: paymentMethod,
                set: setPaymentMethod
            }
        },
        ui: {
            infoModalVisible,
            setInfoModalVisible
        },
    }
}