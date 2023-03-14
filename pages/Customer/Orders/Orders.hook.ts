import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useRef, useState } from "react";
import { Alert, ScrollView } from "react-native";


export default function useOrdersPage() {
    const ordersScrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);
    const [confirmOrderSubmitModalVisible, setConfirmOrderSubmitModalVisible] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const onPageNavigation = (page: number) => {
        ordersScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
        setCurrentPage(page);
    }

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

    return {
        ref: {
            ordersScrollViewRef
        },
        ui: {
            loading,
            confirmOrderSubmitModalVisible,
            setConfirmOrderSubmitModalVisible
        },
        event: {
            onOrderSubmit
        },
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        }

    }
}