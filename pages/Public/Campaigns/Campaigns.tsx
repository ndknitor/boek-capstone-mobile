import React, { useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import Swiper from 'react-native-swiper';
import useCampaignsPage from './Campaigns.hook';
import OnGoingBookFair from '../../../components/OnGoingBookFair/OnGoingBookFair';
import UpcomingBookFair from '../../../components/UpcomingBookFair/UpcomingBookFair';
import PageLoader from '../../../components/PageLoader/PageLoader';
import PreLoadTabView from '../../../components/PreLoadTabView/PreLoadTabView';
import ShowMoreButton from '../../../components/ShowMoreButton/ShowMoreButton';
import { ParamListBase } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
export interface CampaignsProps extends BottomTabScreenProps<ParamListBase> {

}
function Campaigns(props: CampaignsProps) {
    const hook = useCampaignsPage(props);
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView
                refreshControl={<RefreshControl refreshing={hook.scrollViewRefresh.refreshing} onRefresh={hook.scrollViewRefresh.onRefresh} />}>
                <SafeAreaView>
                    {
                        hook.data.onGoingCampagins &&
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
                                <Text style={{ fontSize: 20, fontWeight: "700" }}>{hook.data.onGoingCampagins.title}</Text>
                            </View>
                            <View style={{ height: 225 }}>
                                <Swiper
                                    autoplay
                                    autoplayTimeout={8}
                                    showsButtons>
                                    {
                                        hook.data.onGoingCampagins.campaigns.map(item =>
                                            <View>
                                                <OnGoingBookFair campaign={item} />
                                            </View>
                                        )
                                    }
                                </Swiper>
                            </View>
                        </View>
                    }
                    {
                        hook.data.upCampaginsContainer?.unhierarchicalCustomerCampaigns.map(item =>
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
                                <View style={{
                                    marginBottom: 30,
                                    marginTop: 20
                                }}>
                                    <ShowMoreButton onPress={() => { props.navigation.jumpTo("Search", { tab: "BookFairs" }) }} />
                                </View>
                            </>
                        )
                    }
                    {
                        hook.data.upCampaginsContainer?.hierarchicalCustomerCampaigns.map(item =>
                            <>
                                <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                                    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 5 }}>{item.title}</Text>
                                </View>
                                <View style={{
                                    backgroundColor: "white"
                                }}>
                                    <PreLoadTabView
                                        titles={item.subHierarchicalCustomerCampaigns.map(item => item.subTitle)}
                                        childrens={item.subHierarchicalCustomerCampaigns.map(sub =>
                                            sub.campaigns.map(c =>
                                                <UpcomingBookFair campaign={c} />
                                            )
                                        )} />
                                </View>
                                <View style={{
                                    marginBottom: 30,
                                    marginTop: 20
                                }}>
                                    <ShowMoreButton onPress={() => { props.navigation.jumpTo("Search", { tab: "BookFairs" }) }} />
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