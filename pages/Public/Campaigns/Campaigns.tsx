import React, { useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper';
import useCampaignsPage from './Campaigns.hook';
import OnGoingBookFair from '../../../components/OnGoingBookFair/OnGoingBookFair';
import UpcomingBookFair from '../../../components/UpcomingBookFair/UpcomingBookFair';
import AuthorizeView from '../../../libs/AuthorizeView';
import NonAuthorizeView from '../../../libs/NonAuthorizeView';
import PageLoader from '../../../components/PageLoader/PageLoader';

function Campaigns() {
    const hook = useCampaignsPage();
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
                        <View style={{ height: 300 }}>
                            <Swiper
                                autoplay
                                autoplayTimeout={8}
                                showsButtons>
                                <View>
                                    <OnGoingBookFair title="Tri ân thầy cô 20/11" endTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                                </View>
                                <View>
                                    <OnGoingBookFair title="Tri ân thầy cô 20/11" endTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                                </View>
                            </Swiper>
                        </View>
                    </View>
                    <View style={{ width: "100%", padding: 10, paddingTop: 20, }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 5 }}>Hội sách sắp diễn ra</Text>
                    </View>

                    <NonAuthorizeView>
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
                            <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                        </View>
                    </NonAuthorizeView>

                    <AuthorizeView>
                        <>
                            <View style={{ width: "100%", padding: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "700" }}>Gần bạn nhất</Text>
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
                                <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                                <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            </View>
                        </>

                        <>
                            <View style={{ width: "100%", padding: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "700" }}>Có thể loại sách bạn thích</Text>
                            </View>
                            <View
                                style={{
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
                                <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                                <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            </View>
                        </>

                        <>
                            <View style={{ width: "100%", padding: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "700" }}>Vì bạn quan tâm [Organization]</Text>
                            </View>
                            <View>
                                <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                                <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                            </View>
                        </>

                    </AuthorizeView>

                </SafeAreaView>
            </ScrollView>
        </>
    )
}

export default Campaigns