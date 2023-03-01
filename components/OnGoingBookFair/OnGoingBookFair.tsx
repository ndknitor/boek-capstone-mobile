import moment from 'moment';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Place from '../../assets/SvgComponents/Place';
import img1 from "../../assets/wtd.webp";
import useRouter from '../../libs/hook/useRouter';
import { CampaignViewModel } from '../../objects/viewmodels/Campaigns/CampaignViewModel';
import { dateTimeFormat } from '../../utils/format';
import locationBlack from "../../assets/icons/location-black.png";
import eventBusyBlack from "../../assets/icons/event-busy-black.png";
import corporateFareBlack from "../../assets/icons/corporate-fare-black.png";
import theaterComedyBlack from "../../assets/icons/theater-comedy-black.png";


interface OnGoingBookFairProps {
    campaign: CampaignViewModel;
}
function OnGoingBookFair(props: OnGoingBookFairProps) {
    const { push } = useRouter();
    return (
        <TouchableOpacity onPress={() => push("CampaignDetail", { campaignId: props.campaign.id })}>
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
                            <Text style={{ marginLeft: 2 }}><Image source={locationBlack} resizeMode="contain" style={{ width: 17, height: 17 }} /> {props.campaign.address}</Text>
                            <Text style={{ fontSize: 12, marginLeft: 2 }}>
                                <Image source={eventBusyBlack} resizeMode="contain" style={{ width: 17, height: 17 }} />
                                <Text style={{ fontWeight: "500" }}> {moment(props.campaign.endDate).format(dateTimeFormat)}</Text>
                            </Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={{ textAlign: "right" }}><Image source={corporateFareBlack} resizeMode="contain" style={{ width: 17, height: 17 }} /> {props.campaign.campaignOrganizations.map(item => item.organization.name).join(", ")}</Text>
                            <Text style={{ textAlign: "right" }}><Image source={theaterComedyBlack} resizeMode="contain" style={{ width: 17, height: 17 }} /> {props.campaign.participants.map(item => item.issuer.user.name).join(", ")}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OnGoingBookFair