import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { primaryTint6 } from '../../../utils/color';
import { campaigns } from '../../../utils/mock';
import moment from 'moment';


function StaffCampaigns() {
    return (
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
                        campaigns.slice(0, 6).map(item =>
                            <TouchableOpacity style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: primaryTint6 }}>
                                <View style={{
                                    //borderWidth: 1,
                                    width: "40%",
                                    alignItems: "center",
                                    justifyContent: "flex-start"
                                }}>
                                    <Image source={{ uri: item.imageUrl }} resizeMode="contain" style={{ width: "90%", height: 120 }} />
                                </View>
                                <View style={{ padding: 10, width: "60%" }}>
                                    <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
                                    <Text style={{ marginBottom: 5 }}>Ngày bắt đầu: {moment(item.startOfflineDate).format("DD/MM/YYYY HH:MM:SS")}</Text>
                                    <Text style={{ marginBottom: 5 }}>Ngày kết thúc: {moment(item.endOfflineDate).format("DD/MM/YYYY HH:MM:SS")}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", }}>Hội sách sắp diễn ra</Text>
                </View>
                {
                    campaigns.slice(0, 6).map(item =>
                        <TouchableOpacity style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: primaryTint6 }}>
                            <View style={{
                                //borderWidth: 1,
                                width: "40%",
                                alignItems: "center",
                                justifyContent: "flex-start"
                            }}>
                                <Image source={{ uri: item.imageUrl }} resizeMode="contain" style={{ width: "90%", height: 120 }} />
                            </View>
                            <View style={{ padding: 10, width: "60%" }}>
                                <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
                                <Text style={{ marginBottom: 5 }}>Ngày bắt đầu: {moment(item.startOfflineDate).format("DD/MM/YYYY HH:MM:SS")}</Text>
                                <Text style={{ marginBottom: 5 }}>Ngày kết thúc: {moment(item.endOfflineDate).format("DD/MM/YYYY HH:MM:SS")}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </SafeAreaView>
        </ScrollView>
    )
}

export default StaffCampaigns