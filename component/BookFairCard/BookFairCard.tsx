import React from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { paletteGreen, paletteGreenBold, primaryTint4 } from '../../utils/color';
import image from "../../assets/hsxv.webp";
import avatar from "../../assets/avatar.jpg";
import locationBlack from "../../assets/icons/location-black.png";
import calendarBlack from "../../assets/icons/calendar-today-black.png";
import useRouter from '../../libs/hook/useRouter';


function BookFairCard() {
    const { navigate } = useRouter();
    return (
        <TouchableOpacity
            onPress={() => navigate("CampaignDetail")}
            style={{ borderWidth: 1, borderColor: primaryTint4, borderRadius: 8, paddingLeft: 10, paddingRight: 10, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginBottom: 5, width: "45%" }}>
                    <Image
                        source={image}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: (9 / 16) * ((Dimensions.get("screen").width - 20) * 45 / 100)
                        }} />
                </View>
                <View style={{ padding: 10, width: "55%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 5 }}>Tri ân thầy cô 20/11</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={calendarBlack} style={{ height: 17, width: 25 }} resizeMode="contain" />
                        </View>

                        <Text>Thời gian: 11/11/1111</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={locationBlack} style={{ height: 17, width: 25 }} resizeMode="contain" />
                        </View>
                        <Text>Địa điểm</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                    <View>
                        <View
                            style={{
                                position: "absolute",
                                borderRadius: 999,
                                width: 25,
                                height: 25,
                                overflow: "hidden"
                            }}>
                            <Image source={avatar} style={{ width: "100%", height: "100%" }} />
                        </View>
                        <View
                            style={{
                                marginLeft: 15,
                                position: "absolute",
                                borderRadius: 999,
                                width: 25,
                                height: 25,
                                overflow: "hidden"
                            }}>
                            <Image source={image} style={{ width: "100%", height: "100%" }} />
                        </View>
                        <View
                            style={{
                                marginLeft: 30,
                                borderRadius: 999,
                                width: 25,
                                height: 25,
                                overflow: "hidden"
                            }}>
                            <Image source={avatar} style={{ width: "100%", height: "100%" }} />
                        </View>
                    </View>
                    <View style={{ paddingLeft: 5, flex: 1 }}>
                        <Text >Các nhà phát hành: Tên nhà phát hành, Tên nhà phát hành</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: paletteGreen, alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                <Text style={{ color: paletteGreenBold, fontSize: 13, fontWeight: "500" }}>ĐANG DIỄN RA</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BookFairCard