import React, { useRef } from 'react'
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { paletteGray, paletteGreen, paletteGreenBold, shade1, shade7 } from '../../utils/color';
import img1 from "../../assets/wtd.webp";
import locationBlack from "../../assets/icons/location-black.png";
import calendarBlack from "../../assets/icons/calendar-today-black.png";
import avatar from "../../assets/avatar.jpg";
import verticalAlignTopWhite from "../../assets/icons/vertical-align-top-white.png";
import useCampaignDetaillPage from './CampaignDetail.hook';
import LabeledImage from '../../component/LabeledImage/LabeledImage';
import TitleFlatBooks from '../../component/TitleFlatBooks/TitleFlatBooks';
import useRouter from '../../libs/hook/useRouter';
import { books, t } from '../../utils/mock';
import TitleTabedFlatBooks from '../../component/TitleTabedFlatBooks/TitleTabedFlatBooks';

function CampaignDetail() {
    const hook = useCampaignDetaillPage();
    const { navigate } = useRouter();
    return (
        <>
            <TouchableOpacity
                onPress={hook.scrollToTop}
                style={{
                    display: hook.scrollToTopShowed ? "flex" : "none",
                    backgroundColor: shade1,
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    position: "absolute",
                    zIndex: 1,
                    bottom: 60,
                    right: 10,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Image
                    source={verticalAlignTopWhite}
                    resizeMode="cover"
                    style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <ScrollView
                onScroll={hook.onScrollViewScroll}
                ref={hook.scrollViewRef}>
                <View style={{ backgroundColor: "white" }}>
                    <View style={{ width: "100%", padding: 10 }}>
                        <Text style={{ fontSize: 24, fontWeight: "600" }}>Tri ân thầy cô 20/11</Text>
                    </View>
                    <View style={{ width: "100%", paddingLeft: 10 }}>
                        <View style={{ marginTop: 4, backgroundColor: paletteGreen, alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                            <Text style={{ color: paletteGreenBold, fontSize: 13, fontWeight: "500" }}>ĐANG DIỄN RA</Text>
                        </View>
                        {/* <View style={{ marginTop: 4, backgroundColor: paletteGrayLight, alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                    <Text style={{ fontSize: 13, fontWeight: "500" }}>SẮP DIỄN RA</Text>
                </View> */}
                    </View>
                    <Image style={{ flex: 1, width: "100%", height: Dimensions.get("window").width }} source={img1} resizeMode="contain" />

                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                                <Image style={{ height: 20, width: 20 }} source={locationBlack} />
                            </View>
                            <Text>Diễn ra tại : Quận 7</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                                <Image style={{ height: 20, width: 20, marginRight: 2 }} source={calendarBlack} />
                            </View>
                            <Text >Kết thúc : 07:00 05/12/2022</Text>
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: "600", }}>Nhà phát hành và ưu đãi</Text>
                        <Text style={{ fontSize: 16, color: paletteGray, marginBottom: 10 }}>(Nhấn vào NPH để xem chi tiết ưu đãi)</Text>
                        <FlatList
                            horizontal
                            data={t}
                            renderItem={e =>
                                <LabeledImage onPress={() => navigate("IssuerDetail")} label={e.item.toString()} source={avatar} />
                            } />

                        <TitleFlatBooks data={books} title="Sách giảm giá" />
                        <TitleTabedFlatBooks title="Sách combo" data={[
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                        ]} />
                        <TitleTabedFlatBooks title="Thể loại 2" data={[
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                        ]} />
                        <TitleTabedFlatBooks title="Thể loại 1" data={[
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                        ]} />
                        <TitleTabedFlatBooks title="Thể loại 1" data={[
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                        ]} />
                        <TitleTabedFlatBooks title="Thể loại 1" data={[
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                            {
                                tabLabel: "Thể loại 1",
                                tabData: books
                            },
                        ]} />
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: "600", }}>Mô tả</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, necessitatibus aliquam. Incidunt voluptatum provident consequuntur, soluta, sunt exercitationem corporis labore enim repellendus quae nobis sed quo est molestiae facere magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur magni inventore dolores sequi totam labore dolore placeat sed maxime eum aspernatur, minima distinctio nulla cum ipsa, velit illo vero!</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 3, marginTop: 10 }}>Tổ chức</Text>
                        <FlatList
                            horizontal
                            data={t}
                            renderItem={e =>
                                <LabeledImage label={e.item.toString()} source={avatar} />
                            } />
                        <View style={{ borderWidth: 1, borderColor: shade7, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", }}>Lưu ý</Text>
                            <Text style={{ fontSize: 13, }}>Boek không chịu trách nhiệm về việc đơn hàng đổi trả sách của khách hàng. Xin liên hệ về các nhà phát hành nếu liên quan về đổi trả sách.</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    );
}

export default CampaignDetail