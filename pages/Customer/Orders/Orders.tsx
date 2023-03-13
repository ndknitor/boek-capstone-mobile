import React, { useState } from 'react'
import { View, Image, ScrollView, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import useOrdersPage from './Orders.hook'
import logo from "../../assets/logo.png";
import Paging from '../../../components/Paging/Paging';
import range from '../../../libs/functions/range';
import { paletteGray, paletteGrayShade2, paletteGreenShade1, palettePink, paletteRed, primaryColor, primaryTint4 } from '../../../utils/color';
import SelectedChip from '../../../components/SeletedChip/SelectedChip';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import navigateRightWhite from "../../../assets/icons/navigate-right-black.png";
import { Button } from '@rneui/base';
import useRouter from '../../../libs/hook/useRouter';

const Tab = createMaterialTopTabNavigator();

function Orders() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    color: primaryColor,
                    fontWeight: "500"
                },
                tabBarIndicatorStyle: {
                    backgroundColor: primaryColor
                },
                swipeEnabled: false,
                lazy: true,
                lazyPlaceholder: () => <ActivityIndicator size="large" style={{ height: "100%" }} />
            }}>
            <Tab.Screen options={{ title: "Đơn giao" }} name="DeliveryOrders" component={DeliveryOrders} />
            <Tab.Screen options={{ title: "Đơn tại quầy" }} name="CounterOrders" component={CounterOrders} />
        </Tab.Navigator>
    );
}
function DeliveryOrders() {
    const hook = useOrdersPage();
    const { push } = useRouter();
    return (
        <ScrollView
            ref={hook.ref.ordersScrollViewRef}
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
                data={["Tất cả", "Đang xử lý", "Đang giao", "Đã giao", "Hủy"]}
                renderItem={item =>
                    <View style={{ height: "100%", justifyContent: "center", marginRight: 2 }}>
                        <SelectedChip label={item.item} />
                    </View>
                } />
            <View>
                {
                    range(0, 2).map(item =>
                        <View
                            style={{
                                backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderColor: paletteGray,
                                padding: 10
                            }}>
                            <View style={{ height: 40, flexDirection: "row" }}>
                                <View style={{ width: "60%", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 15 }}>{"Mã đơn hàng"}</Text>
                                </View>
                                <View style={{ width: "40%" }}>
                                    <View style={{
                                        height: "90%",
                                        backgroundColor: paletteGreenShade1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 12,
                                        },
                                        shadowOpacity: 0.58,
                                        shadowRadius: 16.00,
                                        elevation: 8
                                    }}>
                                        <Text style={{ fontSize: 15, color: "white" }}>{"Giao thành công"}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontSize: 14, color: paletteGray }}>{"Ngày đặt hàng"}</Text>

                            <TouchableOpacity
                                onPress={() => push("OrderDetail")}>
                                <View style={{
                                    //borderWidth: 1,
                                    height: 130,
                                    padding: 5,
                                    flexDirection: "row"
                                }}>
                                    <View style={{
                                        //borderWidth: 1,
                                        height: "100%",
                                        width: "25%",
                                        flexDirection: "row"
                                    }}>
                                        <Image
                                            source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/8a/c3/a9/733444596bdb38042ee6c28634624ee5.jpg" }}
                                            resizeMode="contain"
                                            style={{ width: "100%" }} />
                                    </View>
                                    <View style={{
                                        //borderWidth: 1,
                                        width: "45%",
                                        justifyContent: "center"
                                    }}>
                                        <Text style={{ marginBottom: "2%", color: paletteGrayShade2 }}>BIZBOOK</Text>
                                        <Text style={{ marginBottom: "2%", fontSize: 16, fontWeight: "600" }}>Thao túng thị trường rau sạch</Text>
                                        <Text>SL : x2</Text>
                                    </View>
                                    <View style={{ width: "30%", justifyContent: "center", alignItems: "flex-end" }}>
                                        <Text style={{ fontSize: 18, color: palettePink }}>69.000đ</Text>
                                    </View>
                                </View>

                                <View style={{
                                    //borderWidth: 1,
                                    height: 40,
                                    padding: 7,
                                    flexDirection: "row"
                                }}>
                                    <View style={{ width: "90%" }}>
                                        <Text style={{ color: paletteGrayShade2, fontSize: 15 }}>Tên hội sách</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end", justifyContent: "center" }}>
                                        <Image source={navigateRightWhite} style={{ width: 25, height: 25 }} resizeMode="contain" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )
                }
            </View>
            <View style={{ marginBottom: 20 }}>
                <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
            </View>
        </ScrollView>
    );
}
function CounterOrders() {
    const hook = useOrdersPage();
    return (
        <ScrollView
            ref={hook.ref.ordersScrollViewRef}
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
                data={["Tất cả", "Đang xử lý", "Chờ nhận hàng", "Đã nhận", "Hủy"]}
                renderItem={item =>
                    <View style={{ height: "100%", justifyContent: "center", marginRight: 2 }}>
                        <SelectedChip label={item.item} />
                    </View>
                } />

            {
                range(0, 2).map(item =>
                    <View
                        style={{
                            backgroundColor: "white",
                            borderBottomWidth: 1,
                            borderColor: paletteGray,
                            padding: 10
                        }}>
                        <View style={{ height: 40, flexDirection: "row" }}>
                            <View style={{ width: "60%", justifyContent: "center" }}>
                                <Text style={{ fontSize: 15 }}>{"Mã đơn hàng"}</Text>
                            </View>
                            <View style={{ width: "40%" }}>
                                <View style={{
                                    height: "90%",
                                    backgroundColor: paletteGreenShade1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.58,
                                    shadowRadius: 16.00,
                                    elevation: 8
                                }}>
                                    <Text style={{ fontSize: 15, color: "white" }}>{"Giao thành công"}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, color: paletteGray }}>{"Ngày đặt hàng"}</Text>

                        <View style={{
                            //borderWidth: 1,
                            height: 130,
                            padding: 5,
                            flexDirection: "row"
                        }}>
                            <View style={{
                                //borderWidth: 1,
                                height: "100%",
                                width: "25%",
                                flexDirection: "row"
                            }}>
                                <Image
                                    source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/8a/c3/a9/733444596bdb38042ee6c28634624ee5.jpg" }}
                                    resizeMode="contain"
                                    style={{ width: "100%" }} />
                            </View>
                            <View style={{
                                //borderWidth: 1,
                                width: "45%",
                                justifyContent: "center"
                            }}>
                                <Text style={{ marginBottom: "2%", color: paletteGrayShade2 }}>BIZBOOK</Text>
                                <Text style={{ marginBottom: "2%", fontSize: 16, fontWeight: "600" }}>Thao túng thị trường rau sạch</Text>
                                <Text>SL : x2</Text>
                            </View>
                            <View style={{ width: "30%", justifyContent: "center", alignItems: "flex-end" }}>
                                <Text style={{ fontSize: 18, color: palettePink }}>69.000đ</Text>
                            </View>
                        </View>

                        <View style={{
                            //borderWidth: 1,
                            height: 60,
                            padding: 7,
                            flexDirection: "row"
                        }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{ color: paletteGrayShade2, fontSize: 15 }}>Tên hội sách</Text>
                            </View>
                            <View style={{ width: "60%", alignItems: "flex-end", justifyContent: "center" }}>
                                <Button buttonStyle={{ backgroundColor: paletteRed }}>Thanh toán</Button>
                            </View>
                        </View>
                    </View>
                )
            }

            <View style={{ marginBottom: 20 }}>
                <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
            </View>
        </ScrollView>
    );
}

export default Orders