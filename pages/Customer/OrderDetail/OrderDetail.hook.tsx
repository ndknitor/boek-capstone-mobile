import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Info from "../../../assets/SvgComponents/Info";

export default function useOrderDetailPage(props: StackScreenProps<ParamListBase>) {
    const [infoModalVisible, setInfoModalVisible] = useState(false);

    const onOrderSubmit = () => {
        Alert.alert('Xác nhận', 'Bạn có muốn thanh toán tất cả đơn hàng cùng hội sách?', [
            {
                text: 'Không',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Có',
                onPress: () => console.log('OK Pressed')
            },
        ]);
    }

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
        },
        event: {
            onOrderSubmit
        }
    };
}