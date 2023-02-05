import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon } from "@rneui/base";
import { ScrollView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import BookCard from "../../../components/BookCard/BookCard";
import HeaderSearchBar from "../../../components/HeaderSearchBar/HeaderSearchBar";
import PageLoader from "../../../components/PageLoader/PageLoader";
import Paging from "../../../components/Paging/Paging";
import { paletteGrayLight, paletteGrayShade2, paletteGrayTint5, paletteGreen, paletteGreenBold, primaryColor, primaryTint1, primaryTint4, primaryTint7 } from "../../../utils/color";
import workHistoryWhite from "../../../assets/icons/work-history-white.png";
import filterBlack from "../../../assets/icons/filter-black.png";
import sortBlack from "../../../assets/icons/sort-black.png";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import image from "../../../assets/hsxv.webp";
import { mockBooks } from "../../../utils/mock";
import useRouter from "../../../libs/hook/useRouter";
import avatar from "../../../assets/avatar.jpg";
import { useStaffBooksPage, useStaffCampaignOrderPage } from "./StaffCampagin.hook";
import Header from "../../../components/Header/Header";
import DrawerLayout from "react-native-drawer-layout";
import range from "../../../libs/functions/range";
import OrderDetailDrawerLayout from "../../../components/OrderDetailDrawerLayout/OrderDetailDrawerLayout";


const Tab = createBottomTabNavigator();
function StaffCampagin() {
    return (
        <Tab.Navigator
            safeAreaInsets={{ bottom: 0 }}
            backBehavior='none'
            screenOptions={{
                tabBarStyle: {
                    height: 60
                },
                headerShown: false,
                tabBarLabelStyle:
                {
                    fontSize: 13,
                    color: "white",
                    marginBottom: "7%"
                },
                tabBarIconStyle: {
                    //marginTop: 5
                },
                tabBarInactiveBackgroundColor: primaryColor,
                tabBarActiveBackgroundColor: primaryTint1,
                lazy: true
            }}>
            <Tab.Screen options={{ title: "Sách", tabBarIcon: () => <Icon name='book' color={"white"} size={17} /> }} name="Books" component={Books} />
            <Tab.Screen options={{ title: "Đơn hàng", tabBarIcon: () => <Image source={workHistoryWhite} style={{ height: 17, width: 17 }} /> }} name="Orders" component={Orders} />
        </Tab.Navigator>
    )
}

function Books() {
    const hook = useStaffBooksPage();
    return (
        <>
            <PageLoader loading={hook.loading} />
            <HeaderSearchBar />
            <ScrollView
                ref={hook.ref.booksScrollViewRef}
                scrollEnabled={!hook.loading}
                style={{
                    backgroundColor: "white",
                }}>

                <View style={{
                    //marginBottom: 5,
                    width: "100%",
                    height: 35,
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        //onPress={() => hook.ref.filterBooksDrawerRef.current?.openDrawer()}
                        style={{ flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "center", borderRightColor: primaryTint1 }}>
                        <Image source={filterBlack} resizeMode="center" style={{ width: 16 }} />
                        <Text>Lọc</Text>
                    </TouchableOpacity>
                    <View style={{ width: "50%" }}>
                        <Menu>
                            <MenuTrigger style={{ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                                <Image source={sortBlack} resizeMode="center" style={{ width: 16 }} />
                                <Text>Sắp xếp</Text>
                            </MenuTrigger>
                            <MenuOptions optionsContainerStyle={{ padding: 7 }}>
                                <MenuOption onSelect={() => alert(`Save`)}>
                                    <Text style={{ fontSize: 16 }}>Gần đây nhất</Text>
                                </MenuOption>
                                <MenuOption onSelect={() => alert(`Not called`)}>
                                    <Text style={{ fontSize: 16 }}>Giảm giá nhiều</Text>
                                </MenuOption>
                                <MenuOption onSelect={() => alert(`Not called`)}>
                                    <Text style={{ fontSize: 16 }}>Giá thấp dần</Text>
                                </MenuOption>
                                <MenuOption onSelect={() => alert(`Not called`)} >
                                    <Text>
                                        <Text style={{ fontSize: 16 }}>Giá cao dần</Text>
                                    </Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </View>
                </View>

                <View style={{ paddingLeft: 10, paddingRight: 10, flexDirection: "row", flexWrap: "wrap" }}>
                    {
                        hook.data.books.map(item =>
                            <View key={Math.random()}>
                                <BookCard book={item} />
                            </View>
                        )
                    }
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Paging maxPage={hook.paging.maxPage} currentPage={hook.paging.currentPage} onPageNavigation={hook.paging.onPageNavigation} />
                </View>
            </ScrollView>
        </>
    );
}

function Orders() {
    const hook = useStaffCampaignOrderPage();
    const orderBook = mockBooks.slice(0, 2);
    const { navigate } = useRouter();

    return (
        <>
            <PageLoader loading={hook.loading} />
            <Header title="Tri ân thầy cô 20/11" />
            <OrderDetailDrawerLayout
                drawerRef={hook.ref.drawerLayoutRef}>
                <ScrollView
                    ref={hook.ref.campaginsScrollViewRef}
                    style={{
                        backgroundColor: "white",
                        width: "100%",
                        height: "100%",
                    }}>
                    <View style={{ padding: 5 }}>
                        {
                            range(0, 10).map(item =>
                                <View style={{
                                    borderWidth: 1.5,
                                    borderRadius: 8,
                                    borderColor: primaryTint4,
                                    marginTop: 20,
                                    overflow: "hidden"
                                }}>
                                    <View style={{
                                        //borderWidth: 1,
                                        flexDirection: "row",
                                        borderBottomWidth: 2,
                                        borderBottomColor: primaryTint7
                                    }}>
                                        <View style={{
                                            //borderWidth: 1,
                                            width: "100%",
                                            height: "100%",

                                        }}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{
                                                    fontSize: 18,
                                                    fontWeight: "600",
                                                    marginBottom: 6
                                                }}>Thông tin khách hàng</Text>
                                            </View>

                                            <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                <View style={{ width: "50%" }}>
                                                    <Text >Email:</Text>
                                                </View>
                                                <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                    <Text >ndkn@gmail.com</Text>
                                                </View>
                                            </View>

                                            <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                <View style={{ width: "50%" }}>
                                                    <Text >Họ và tên:</Text>
                                                </View>
                                                <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                    <Text >Ngô Đình Khôi Nguyên</Text>
                                                </View>
                                            </View>

                                            <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                <View style={{ width: "50%" }}>
                                                    <Text >Địa chỉ:</Text>
                                                </View>
                                                <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                    <Text >122 ASDhu skdbjhsd</Text>
                                                </View>
                                            </View>

                                            <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                <View style={{ width: "50%" }}>
                                                    <Text >Số điện thoại:</Text>
                                                </View>
                                                <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                    <Text >069696969</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>

                                    <View style={{
                                        //borderWidth: 1,
                                        height: 200
                                    }}>
                                        <View style={{
                                            //borderWidth: 1,
                                            padding: 10,
                                            height: "30%"
                                        }}>
                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: "600",
                                                marginBottom: 6
                                            }}>Thông tin đơn hàng</Text>
                                        </View>


                                        <View style={{
                                            height: "60%",
                                            flexDirection: "row"
                                        }}>
                                            <View style={{
                                                //borderWidth: 1,
                                                width: "100%",
                                                justifyContent: "center"
                                            }}>

                                                <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                    <View style={{ width: "50%" }}>
                                                        <Text >Tổng cộng:</Text>
                                                    </View>
                                                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                        <Text >69.000 đ</Text>
                                                    </View>
                                                </View>

                                                <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                    <View style={{ width: "50%" }}>
                                                        <Text >Phí vận chuyển:</Text>
                                                    </View>
                                                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                        <Text >69.000 đ</Text>
                                                    </View>
                                                </View>

                                                <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                    <View style={{ width: "50%" }}>
                                                        <Text >Giảm giá:</Text>
                                                    </View>
                                                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                        <Text >69.000 đ</Text>
                                                    </View>
                                                </View>

                                                <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                                                    <View style={{ width: "50%" }}>
                                                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Thành tiền:</Text>
                                                    </View>
                                                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                                                        <Text style={{ fontSize: 16, fontWeight: "600" }} >69.000 đ</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>

                                    <View style={{
                                        overflow: "hidden",
                                        backgroundColor: paletteGreen,
                                        width: "100%",
                                        padding: 5,
                                        paddingLeft: 15,
                                        height: 60,
                                        flexDirection: "row"
                                    }}>
                                        <View style={{
                                            width: "65%",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                color: paletteGreenBold,
                                                fontSize: 15,
                                                fontWeight: "500"
                                            }}>Giao hàng thành công</Text>
                                        </View>
                                        <View style={{ width: "35%", padding: 5 }}>
                                            <Button
                                                onPress={hook.event.onOrderDetailPress}
                                                buttonStyle={{
                                                    height: "100%",
                                                    backgroundColor: primaryTint1
                                                }}>Xem chi tiết</Button>
                                        </View>
                                    </View>

                                </View>
                            )
                        }

                    </View>
                    <View
                        style={{
                            marginBottom: 10
                        }}>
                        <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
                    </View>
                </ScrollView>
            </OrderDetailDrawerLayout>
        </>
    );
}

export default StaffCampagin