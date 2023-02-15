import React, { useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import Swiper from 'react-native-swiper';
import useCampaignsPage from './Campaigns.hook';
import OnGoingBookFair from '../../../components/OnGoingBookFair/OnGoingBookFair';
import UpcomingBookFair from '../../../components/UpcomingBookFair/UpcomingBookFair';
import PageLoader from '../../../components/PageLoader/PageLoader';

function Campaigns() {
    const hook = useCampaignsPage();
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView
                refreshControl={<RefreshControl refreshing={hook.scrollViewRefresh.refreshing} onRefresh={hook.scrollViewRefresh.onRefresh}/>}
            >
                <SafeAreaView>
                    {
                        hook.data.upCampaginsContainer?.unhierarchicalCustomerCampaigns.map(item =>
                            item.title == hook.const.onGoingTitle &&
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
                                <View style={{ height: 225 }}>
                                    <Swiper
                                        autoplay
                                        autoplayTimeout={8}
                                        showsButtons>
                                        {
                                            item.campaigns && item.campaigns.map(c =>
                                                <View>
                                                    <OnGoingBookFair campaign={c} />
                                                </View>
                                            )
                                        }
                                    </Swiper>
                                </View>
                            </View>
                        )
                    }
                    {
                        hook.data.upCampaginsContainer?.unhierarchicalCustomerCampaigns.map(item =>
                            item.title != hook.const.onGoingTitle &&
                            <>
                                <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                                    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 5 }}>{item.title}</Text>
                                </View>
                                <View style={{
                                    backgroundColor: "white",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.58,
                                    shadowRadius: 16.00,
                                    elevation: 6
                                }}>
                                    {
                                        item.campaigns && item.campaigns.map(c =>
                                            <UpcomingBookFair campaign={c} />
                                        )
                                    }
                                </View>
                            </>
                        )
                    }
                    <View style={{
                        backgroundColor: "white",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 6
                    }}>
                    </View>


                </SafeAreaView>
            </ScrollView>
        </>
    )
}

export default Campaigns