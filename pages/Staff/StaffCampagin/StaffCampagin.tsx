import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon } from "@rneui/base";
import { ScrollView, View, Image, TouchableOpacity, Text, StyleSheet, Pressable, FlatList } from "react-native";
import BookCard from "../../../components/BookCard/BookCard";
import HeaderSearchBar from "../../../components/HeaderSearchBar/HeaderSearchBar";
import PageLoader from "../../../components/PageLoader/PageLoader";
import Paging from "../../../components/Paging/Paging";
import { paletteGray, paletteGrayLight, paletteGrayShade2, paletteGrayTint5, paletteGreen, paletteGreenBold, palettePink, primaryColor, primaryTint1, primaryTint4, primaryTint7 } from "../../../utils/color";
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
import Shadow from "../../../components/Shadow/Shadow";
import formatNumber from "../../../libs/functions/formatNumber";
import moment from "moment";
import truncateString from "../../../libs/functions/truncateString";
import { dateTimeFormat } from "../../../utils/format";
import addWhite from "../../../assets/icons/add-white.png";
import FloatActionButton from "../../../components/FloatActionButton/FloatActionButton";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { createContext, useContext, useEffect } from "react";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";
import StaffOrderCard from "../../../components/StaffOrderCard/StaffOrderCard";
import SelectedChip from "../../../components/SeletedChip/SelectedChip";
import { OrderStatus } from "../../../objects/enums/OrderStatus";


const Tab = createBottomTabNavigator();
function StaffCampagin(props: StackScreenProps<ParamListBase>) {
    return (
        <Orders {...props} />
        // <Tab.Navigator
        //     safeAreaInsets={{ bottom: 0 }}
        //     backBehavior='none'
        //     screenOptions={{
        //         tabBarStyle: {
        //             height: 60
        //         },
        //         headerShown: false,
        //         tabBarLabelStyle:
        //         {
        //             fontSize: 13,
        //             color: "white",
        //             marginBottom: "7%"
        //         },
        //         tabBarIconStyle: {
        //             //marginTop: 5
        //         },
        //         tabBarInactiveBackgroundColor: primaryColor,
        //         tabBarActiveBackgroundColor: primaryTint1,
        //         lazy: true
        //     }}>
        //     <Tab.Screen options={{ title: "Sách", tabBarIcon: () => <Icon name='book' color={"white"} size={17} /> }} name="Books" component={Books} />
        //     <Tab.Screen options={{ title: "Đơn hàng", tabBarIcon: () => <Image source={workHistoryWhite} style={{ height: 17, width: 17 }} /> }} name="Orders" component={Orders} />
        // </Tab.Navigator>
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

function Orders(props: StackScreenProps<ParamListBase>) {
    const hook = useStaffCampaignOrderPage(props);
    const params = props.route.params as { campaign: StaffCampaignMobilesViewModel };
    const { push } = useRouter();
    return (
        <>
            <FloatActionButton bottom={70} right={10}>
                <Menu>
                    <MenuTrigger>
                        <View style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image source={addWhite} style={{ width: "50%", height: "50%" }} />
                        </View>
                    </MenuTrigger>
                    <MenuOptions customStyles={{ optionsContainer: { width: "55%" } }} optionsContainerStyle={{ padding: 10 }}>
                        <MenuOption
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: paletteGray,
                                padding: 10
                            }}
                            onSelect={() => push("CreateOrderScanQr")}
                        >
                            <Text style={{ fontSize: 17 }}>Quét mã QR đơn hàng</Text>
                        </MenuOption>
                        <MenuOption
                            style={{
                                padding: 10
                            }}
                            onSelect={() => push("CreateChooseHaveAccountOrder", { campaign: params.campaign })}>
                            <Text style={{ fontSize: 17 }}>Tạo đơn hàng</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </FloatActionButton>
            <PageLoader loading={hook.ui.loading} />
            <Header title={params.campaign.name} />
            <ScrollView
                ref={hook.ref.campaginsScrollViewRef}
                stickyHeaderHiddenOnScroll
                stickyHeaderIndices={[0]}
                style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                }}>
                <FlatList
                    style={{
                        height: 50,
                        backgroundColor: "white",
                        borderBottomWidth: 1,
                        borderBottomColor: paletteGray,
                        paddingLeft: 10
                    }}
                    horizontal
                    data={[
                        {
                            label: "Tất cả",
                            input: 0
                        },
                        {
                            label: OrderStatus.getLabel(OrderStatus.Processing),
                            input: OrderStatus.Processing
                        },
                        {
                            label: OrderStatus.getLabel(OrderStatus.PickUpAvailable),
                            input: OrderStatus.PickUpAvailable
                        },
                        {
                            label: OrderStatus.getLabel(OrderStatus.Received),
                            input: OrderStatus.Received
                        },
                        {
                            label: OrderStatus.getLabel(OrderStatus.Cancelled),
                            input: OrderStatus.Cancelled
                        }]}
                    renderItem={item =>
                        <View style={{ height: "100%", justifyContent: "center", marginRight: 2 }}>
                            <SelectedChip
                                onPress={() => hook.input.orderStatus.set(item.item.input)}
                                selected={hook.input.orderStatus.value == item.item.input}
                                label={item.item.label} />
                        </View>
                    } />

                <View style={{ padding: 5, alignItems: "center" }}>
                    {
                        hook.data.orders?.map(item =>
                            item.orderDetails && item.orderDetails[0] &&
                            <StaffOrderCard order={item} />
                        )
                    }

                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                    <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
                </View>
            </ScrollView>
        </>
    );
}

export default StaffCampagin