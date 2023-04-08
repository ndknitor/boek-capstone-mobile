import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { primaryColor, primaryTint5, primaryTint6, } from '../../../utils/color';
import moment from 'moment';
import useStaffCampaignsPage from './StaffCampaigns.hook';
import PageLoader from '../../../components/PageLoader/PageLoader';
import useRouter from '../../../libs/hook/useRouter';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import Paging from '../../../components/Paging/Paging';
import { ParamListBase } from '@react-navigation/native';
import PreLoadTabView from '../../../components/PreLoadTabView/PreLoadTabView';
import UpcomingBookFair from '../../../components/UpcomingBookFair/UpcomingBookFair';
import Shadow from '../../../components/Shadow/Shadow';

const Tab = createMaterialTopTabNavigator();
function StaffCampaigns() {
    const dateTimeFormat = "DD/MM/YYYY";
    const { navigate } = useRouter();
    const hook = useStaffCampaignsPage();
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView
                ref={hook.ref.scrollViewRef}
                style={{ backgroundColor: "white" }}>
                <View style={{ padding: 15, paddingBottom: 30 }}>
                    <Shadow style={{
                        padding: 15,
                        paddingBottom: 30,
                        backgroundColor: "white",
                        borderRadius: 8
                    }}>
                        <PreLoadTabView
                            titles={hook.data.campagins.map(item => item.title)}
                            childrens={hook.data.campagins.map(sub =>
                                sub.campaigns.map(c =>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: primaryTint5,
                                        backgroundColor: "white",
                                        borderRadius: 8,
                                        marginTop: 5
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => navigate("StaffCampagin", { campaign: c })}
                                            style={{ flexDirection: "row" }}>
                                            <View style={{
                                                //borderWidth: 1,
                                                width: "40%",
                                                alignItems: "center",
                                                justifyContent: "flex-start"
                                            }}>
                                                <Image source={{ uri: c.imageUrl }} resizeMode="contain" style={{ width: "90%", height: 120 }} />
                                            </View>
                                            <View style={{ padding: 10, width: "60%" }}>
                                                <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: "600" }}>{c.name}</Text>
                                                <Text style={{ marginBottom: 5 }}>Bắt đầu: {moment(c.startOfflineDate).format(dateTimeFormat)}</Text>
                                                <Text style={{ marginBottom: 5 }}>Kết thúc: {moment(c.endOfflineDate).format(dateTimeFormat)}</Text>
                                                <Text style={{ marginBottom: 5 }}>Online</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            )} />
                    </Shadow>
                </View>
            </ScrollView>
        </>
    )
}


export default StaffCampaigns