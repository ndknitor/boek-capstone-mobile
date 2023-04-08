import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Info from "../../../assets/SvgComponents/Info";
import { OrderStatus } from "../../../objects/enums/OrderStatus";
import { OrderViewModel } from "../../../objects/viewmodels/Orders/OrderViewModel";
import { paletteGray, paletteGreenShade1, paletteRed, primaryTint2 } from "../../../utils/color";

export default function useOrderDetailPage(props: StackScreenProps<ParamListBase>) {
    const params = props.route.params as { order: OrderViewModel };
    const [infoModalVisible, setInfoModalVisible] = useState(false);
    const [order, setOrder] = useState(params.order);
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
    const getStatusColor = () => {
        if (order.status == OrderStatus.Cancelled) {
            return paletteRed;
        }
        if (order.status == OrderStatus.Processing) {
            return paletteGray;
        }
        if (order.status == OrderStatus.PickUpAvailable) {
            return primaryTint2;
        }
        if (order.status == OrderStatus.Shipped || OrderStatus.Received) {
            return paletteGreenShade1;
        }
        return "blue";
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
            getStatusColor,
            infoModalVisible,
            setInfoModalVisible
        },
        data: {
            order
        },
        event: {
            onOrderSubmit
        }
    };
}