import moment from 'moment';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import img1 from "../../assets/wtd.webp";
import useRouter from '../../libs/hook/useRouter';
import { CampaignViewModel } from '../../objects/viewmodels/Campaigns/CampaignViewModel';
import { dateTimeFormat } from '../../utils/format';

interface OnGoingBookFairProps {
    campaign: CampaignViewModel;
}
function OnGoingBookFair(props: OnGoingBookFairProps) {
    const { navigate } = useRouter();
    return (
        <TouchableOpacity onPress={() => navigate("CampaignDetail")}>
            <Image source={{ uri: props.campaign.imageUrl }} style={{ width: "100%", height: "100%" }} resizeMethod="resize" resizeMode="contain" />
            <LinearGradient
                start={{ x: 0.5, y: 0.2 }}
                end={{ x: 0.5, y: 1 }}
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                style={{ position: "absolute", height: "100%", width: "100%" }}>
            </LinearGradient>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <View style={{
                    width: "95%",
                    height: "90%",
                    justifyContent: "flex-end"
                }}>
                    <Text style={{ fontSize: 22, fontWeight: "500" }}>{props.campaign.name}</Text>
                    <View style={{
                        //borderWidth : 1,
                        width: "100%",
                        flexDirection: "row"
                    }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ marginLeft: 2 }} >Địa điểm: {props.campaign.address}</Text>
                            <Text style={{ fontSize: 12, marginLeft: 2 }}>Kết thúc:
                                <Text style={{ fontWeight: "500" }}> {moment(props.campaign.endDate).format(dateTimeFormat)}</Text>
                            </Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={{ textAlign: "right" }}>Tổ chức: {props.campaign.campaignOrganizations.map(item => item.organization.name).join(", ")}</Text>
                            <Text style={{ textAlign: "right" }}>NXB: {props.campaign.participants.map(item => item.issuer.user.name).join(", ")}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OnGoingBookFair