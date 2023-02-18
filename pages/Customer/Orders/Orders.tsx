import React, { useState } from 'react'
import { View, Image, ScrollView, Text, FlatList } from 'react-native'
import useOrdersPage from './Orders.hook'
import logo from "../../assets/logo.png";
import OrderCard from '../../../components/OrderCard/OrderCard';
import Paging from '../../../components/Paging/Paging';
import range from '../../../libs/functions/range';
import { paletteGray } from '../../../utils/color';
import SelectedChip from '../../../components/SeletedChip/SelectedChip';


function Orders() {
    const hook = useOrdersPage();
    return (
        <ScrollView
            ref={hook.ordersScrollViewRef}
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll>
            <FlatList
                style={{
                    height: 50,
                    backgroundColor: "white",
                    borderBottomWidth: 1,
                    borderBottomColor: paletteGray,
                    justifyContent: "center",
                    paddingLeft: 10
                }}
                horizontal
                data={["Tất cả", "Đơn gì đó nhưng vì gì đó", "Đơn gì đó", "Đơn gì đó", "Đơn gì đó", "Đơn gì đó",]}
                renderItem={item =>
                    <View style={{ height: "100%", justifyContent: "center", marginRight: 2 }}>
                        <SelectedChip label={item.item} />
                    </View>
                } />
            <View style={{
                padding: 10
            }}>
                {
                    range(0, 2).map(item =>
                        <View style={{ marginBottom: 15 }}>
                            <OrderCard />
                        </View>
                    )
                }
            </View>
            <View style={{ marginBottom: 20 }}>
                    <Paging currentPage={hook.currentPage} maxPage={hook.maxPage} onPageNavigation={hook.onPageNavigation} />
                </View>
        </ScrollView>
    )
}

export default Orders