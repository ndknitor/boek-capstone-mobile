import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon } from "@rneui/base";
import { ScrollView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import BookCard from "../../../component/BookCard/BookCard";
import HeaderSearchBar from "../../../component/HeaderSearchBar/HeaderSearchBar";
import PageLoader from "../../../component/PageLoader/PageLoader";
import Paging from "../../../component/Paging/Paging";
import { paletteGrayShade2, paletteGrayTint5, paletteGreen, paletteGreenBold, primaryColor, primaryTint1, primaryTint4, primaryTint7 } from "../../../utils/color";
import workHistoryWhite from "../../../assets/icons/work-history-white.png";
import filterBlack from "../../../assets/icons/filter-black.png";
import sortBlack from "../../../assets/icons/sort-black.png";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import image from "../../../assets/hsxv.webp";
import { mockBooks } from "../../../utils/mock";
import useRouter from "../../../libs/hook/useRouter";
import avatar from "../../../assets/avatar.jpg";
import { useStaffBooksPage, useStaffCampaignOrderPage } from "./StaffCampagin.hook";
import { range } from "../../../utils/format";
import Header from "../../../component/Header/Header";


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
            <ScrollView
                style={{
                    padding: 5,
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                }}>
                {
                    range(0, 10).map(item =>
                        <View style={{
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: primaryTint4,
                            marginTop: 10,
                            overflow: "hidden",
                            height: 60 + 40 + 100 + (130 * 2),
                        }}>
                            <View style={{
                                overflow: "hidden",
                                backgroundColor: paletteGreen,
                                justifyContent: "center",
                                width: "100%",
                                padding: 5,
                                paddingLeft: 15,
                                height: 40
                            }}>
                                <Text style={{
                                    color: paletteGreenBold,
                                    fontSize: 15,
                                    fontWeight: "500"
                                }}>Giao hàng thành công</Text>
                            </View>

                            <View style={{
                                //borderWidth: 1,
                                flexDirection: "row",
                                height: 100,
                                borderBottomWidth: 1,
                                borderBottomColor: primaryTint7
                            }}>
                                <View style={{
                                    //borderWidth: 1,
                                    width: "20%",
                                    height: "100%"
                                }}>
                                    <View style={{
                                        height: "100%",
                                        width: "100%",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <View style={{
                                            borderWidth: 1,
                                            borderRadius: 999,
                                            overflow: "hidden",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 60,
                                            height: 60
                                        }}>
                                            <Image source={avatar} style={{ height: 99, width: 99 }} resizeMode="cover" />
                                        </View>
                                    </View>
                                </View>

                                <View style={{
                                    //borderWidth: 1,
                                    width: "80%",
                                    padding: 5,
                                    paddingLeft: 15,
                                    justifyContent: "center"
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: "600",
                                        marginBottom: 6
                                    }}>Thông tin khách hàng</Text>
                                    <Text style={styles.marginBot}>Email: ndkn@gmail.com</Text>
                                    <Text style={styles.marginBot}>Địa chỉ: 122 ASDhu skdbjhsd</Text>
                                </View>
                            </View>
                            {
                                orderBook.map(item =>
                                    <View style={{
                                        //borderWidth: 1,
                                        height: 130,
                                        padding: 5,
                                        borderBottomColor: paletteGrayTint5,
                                        borderBottomWidth: 1,
                                        flexDirection: "row"
                                    }}>
                                        <View style={{
                                            //borderWidth: 1,
                                            height: "100%",
                                            width: "25%",
                                            flexDirection: "row"
                                        }}>
                                            <Image
                                                source={{ uri: item.imageUrl }}
                                                resizeMode="contain"
                                                style={{ width: "100%" }} />
                                        </View>
                                        <View style={{
                                            //borderWidth: 1,
                                            width: "45%",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
                                            <Text>Số lượng : 2</Text>
                                            <Text style={{ color: paletteGrayShade2 }}>{item.issuer.user.name}</Text>
                                        </View>
                                        <View style={{
                                            //borderWidth: 1,
                                            width: "30%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{ fontSize: 16 }}>69.000 x 2 đ</Text>
                                        </View>
                                    </View>
                                )
                            }
                            <View style={{
                                //borderWidth: 1,
                                height: 60,
                                padding: 7,
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    //borderWidth: 1,
                                    width: "65%",
                                    height: "100%",
                                    justifyContent: "center"
                                }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Tổng tiền: </Text>
                                        <Text style={{ fontSize: 16 }}>69.000 đ</Text>
                                    </View>
                                </View>
                                <View style={{
                                    //borderWidth: 1,
                                    width: "35%"
                                }}>
                                    {/* <Button
                                            onPress={() => navigate("OrderDetail")}
                                            buttonStyle={{
                                                height: "100%",
                                                backgroundColor: primaryTint1
                                            }}>Xem chi tiết</Button> */}
                                </View>
                            </View>
                        </View>
                    )
                }
                <View
                    style={{
                        marginBottom : 10
                    }}>
                    <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    marginBot: {
        marginBottom: 6
    }
});
export default StaffCampagin