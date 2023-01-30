import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { primaryTint6 } from '../../../utils/color';
import moment from 'moment';
import useStaffCampaignsPage from './StaffCampaigns.hook';
import PageLoader from '../../../component/PageLoader/PageLoader';
import useRouter from '../../../libs/hook/useRouter';
import ShowMoreButton from '../../../component/ShowMoreButton/ShowMoreButton';

function StaffCampaigns() {
    const hook = useStaffCampaignsPage();
    const { navigate } = useRouter();
    const dateTimeFormat = "DD/MM/YYYY HH:MM:SS";
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView>
                <SafeAreaView>
                    <View style={{
                        backgroundColor: "white",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 24
                    }}>
                        <View style={{ width: "100%", padding: 10, marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: "700" }}>Hội sách đang diễn ra</Text>
                        </View>
                        {
                            hook.data.onGoingCampagins.map(item =>
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
                        <View style={{ marginBottom: 20 }}>
                            <ShowMoreButton />
                        </View>
                    </View>

                    <View>
                        <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                            <Text style={{ fontSize: 20, fontWeight: "700", }}>Hội sách sắp diễn ra</Text>
                        </View>
                        {
                            hook.data.upComingCampagins.slice(0, 6).map(item =>
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
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        <View style={{ marginBottom: 20 }}>
                            <ShowMoreButton />
                        </View>
                    </View>

                    <View>
                        <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                            <Text style={{ fontSize: 20, fontWeight: "700", }}>Hội sách đã kết thúc</Text>
                        </View>
                        {
                            hook.data.upComingCampagins.slice(0, 6).map(item =>
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
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        <View style={{ marginBottom: 20 }}>
                            <ShowMoreButton />
                        </View>
                    </View>

                    <View>
                        <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                            <Text style={{ fontSize: 20, fontWeight: "700", }}>Hội sách đã hủy</Text>
                        </View>
                        {
                            hook.data.upComingCampagins.slice(0, 6).map(item =>
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
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        <View style={{ marginBottom: 20 }}>
                            <ShowMoreButton />
                        </View>
                    </View>
                    
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

export default StaffCampaigns