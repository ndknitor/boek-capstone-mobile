import React from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { paletteGreen, paletteGreenBold, primaryTint4 } from '../../utils/color';
import image from "../../assets/hsxv.webp";
import avatar from "../../assets/avatar.jpg";
import locationBlack from "../../assets/icons/location-black.png";
import calendarBlack from "../../assets/icons/calendar-today-black.png";
import useRouter from '../../libs/hook/useRouter';
import { CampaignViewModel } from '../../objects/viewmodels/Campaigns/CampaignViewModel';
import moment from 'moment';
interface BookFairCardProps {
    campagin?: CampaignViewModel
}

function BookFairCard({ campagin }: BookFairCardProps) {
    let arr = campagin?.participants || [];
    arr = [...arr, ...arr]
    const { navigate } = useRouter();
    return (
        <TouchableOpacity
            onPress={() => navigate("CampaignDetail")}
            style={{ borderWidth: 1, borderColor: primaryTint4, borderRadius: 8, padding: 10, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginBottom: 5, width: "45%" }}>
                    <Image
                        source={{ uri: campagin?.imageUrl }}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: (9 / 16) * ((Dimensions.get("screen").width - 20) * 45 / 100)
                        }} />
                </View>
                <View style={{ padding: 10, width: "55%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 5 }}>{campagin?.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={calendarBlack} style={{ height: 17, width: 25 }} resizeMode="contain" />
                        </View>

                        <Text>{moment(campagin?.startOfflineDate).format("DD/MM/YYYY HH:MM:SS")}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={locationBlack} style={{ height: 17, width: 25 }} resizeMode="contain" />
                        </View>
                        <Text>{"Địa điểm"}</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                    {
                        campagin?.participants.map((item, index) =>
                            <View
                                style={{
                                    marginLeft: 15 * index,
                                    position: index == campagin.participants.length - 1 ? "relative" : "absolute",
                                    borderRadius: 999,
                                    width: 25,
                                    height: 25,
                                    overflow: "hidden"
                                }}>
                                <Image source={{ uri: item.issuer.user.imageUrl }} style={{ width: "100%", height: "100%" }} />
                            </View>
                        )
                    }
                    <View style={{ paddingLeft: 5, flex: 1 }}>
                        <Text >Các nhà phát hành: {campagin?.participants.map(item => item.issuer.user.name).join(", ")}</Text>
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