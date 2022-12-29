import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper';

import useBookFairPage from './BookFairs.hook';
import OnGoingBookFair from '../../component/OnGoingBookFair/OnGoingBookFair';
import UpcomingBookFair from '../../component/UpcomingBookFair/UpcomingBookFair';
import { shade10 } from '../../utils/color';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';

function BookFairs() {
    useBookFairPage();
    return (
        <>
            {/* <HeaderSearchBar /> */}
            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={{ width: "100%", padding: 10, backgroundColor: shade10 }}>
                    <Text style={{ fontSize: 24, fontWeight: "700" }}>Hội sách đang diễn ra</Text>
                </View>
                <View style={{ height: 300 }}>
                    <Swiper autoplay autoplayTimeout={8} showsButtons>
                        <View>
                            <OnGoingBookFair title="Tri ân thầy cô 20/11" endTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                        </View>
                        <View>
                            <OnGoingBookFair title="Tri ân thầy cô 20/11" endTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                        </View>
                    </Swiper>
                </View>

                <View style={{ backgroundColor: shade10 }}>
                    <View style={{ width: "100%", padding: 10, backgroundColor: shade10 }}>
                        <Text style={{ fontSize: 24, fontWeight: "700", }}>Hội sách sắp diễn ra</Text>
                    </View>

                    <View style={{ width: "100%", padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Gần bạn nhất</Text>
                    </View>
                    <View>
                        <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                        <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                    </View>

                    <View style={{ width: "100%", padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Có thể loại sách bạn thích</Text>
                    </View>
                    <View>
                        <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                        <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                    </View>

                    <View style={{ width: "100%", padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Vì bạn quan tâm [Organization]</Text>
                    </View>
                    <View>
                        <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                        <UpcomingBookFair title="Tri ân thầy cô 20/11" dateTime="07:00 05/12/2022" location="Quận 7" organizations="FPT, Viettel" publishers="Kim Đồng" />
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

export default BookFairs