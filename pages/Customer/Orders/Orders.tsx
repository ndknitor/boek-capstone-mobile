import React, { useState } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import useOrdersPage from './Orders.hook'
import logo from "../../assets/logo.png";
import OrderCard from '../../../components/OrderCard/OrderCard';
import Paging from '../../../components/Paging/Paging';
import range from '../../../libs/functions/range';


function Orders() {
    const hook = useOrdersPage();
    return (
        <ScrollView ref={hook.ordersScrollViewRef} style={{
            padding: 10,
        }}>
            {
                range(0, 2).map(item =>
                    <View style={{ marginBottom: 15 }}>
                        <OrderCard />
                    </View>
                )
            }
            <View style={{ marginBottom: 20 }}>
                <Paging currentPage={hook.currentPage} maxPage={hook.maxPage} onPageNavigation={hook.onPageNavigation} />
            </View>
        </ScrollView>
    )
}

export default Orders