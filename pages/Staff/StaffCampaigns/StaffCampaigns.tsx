import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { paletteGrayTint4, paletteGrayTint6, paletteGrayTint7, paletteRed, primaryColor, primaryTint6, primaryTint7 } from '../../../utils/color';
import moment from 'moment';
import useStaffCampaignsPage from './StaffCampaigns.hook';
import PageLoader from '../../../component/PageLoader/PageLoader';
import useRouter from '../../../libs/hook/useRouter';
import ShowMoreButton from '../../../component/ShowMoreButton/ShowMoreButton';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import Paging from '../../../component/Paging/Paging';
import { ParamListBase } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
function StaffCampaigns() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarScrollEnabled: true,
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
            {/* <Tab.Screen options={{ title: "Tất cả" }} name="All" component={TabScreen} /> */}
            <Tab.Screen options={{ title: "Đang diễn ra" }} name="OnGoing" component={TabScreen} />
            <Tab.Screen options={{ title: "Sắp diễn ra" }} name="Upcoming" component={TabScreen} />
            <Tab.Screen options={{ title: "Đã kết thúc" }} name="Over" component={TabScreen} />
            <Tab.Screen options={{ title: "Đã hủy" }} name="Cancel" component={TabScreen} />
        </Tab.Navigator>
    )
}
function TabScreen(props: MaterialTopTabScreenProps<ParamListBase>) {
    const hook = useStaffCampaignsPage();
    const { navigate } = useRouter();
    const dateTimeFormat = "DD/MM/YYYY HH:MM:SS";
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView
                ref={hook.ref.scrollViewRef}
                style={{ backgroundColor: "white" }}>
                {
                    hook.data.campagins.map(item =>
                        <TouchableOpacity
                            onPress={() => navigate("StaffCampagin")}
                            style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: primaryTint6 }}>
                            <View style={{
                                //borderWidth: 1,
                                width: "40%",
                                alignItems: "center",
                                justifyContent: "flex-start"
                            }}>
                                <Image source={{ uri: item.imageUrl }} resizeMode="contain" style={{ width: "90%", height: 120 }} />
                            </View>
                            <View style={{ padding: 10, width: "60%" }}>
                                <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
                                <Text style={{ marginBottom: 5 }}>Bắt đầu: {moment(item.startOfflineDate).format(dateTimeFormat)}</Text>
                                <Text style={{ marginBottom: 5 }}>Kết thúc: {moment(item.endOfflineDate).format(dateTimeFormat)}</Text>
                                {/* <Text style={{ marginBottom: 5 }}>Online</Text> */}
                            </View>
                        </TouchableOpacity>
                    )
                }
                <View style={{ marginBottom: 10 }}>
                    <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
                </View>
            </ScrollView>
        </>
    );
}



export default StaffCampaigns