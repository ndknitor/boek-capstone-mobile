import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { primaryTint6 } from '../../utils/color';
import useRouter from '../../libs/hook/useRouter';
import { CampaignViewModel } from '../../objects/viewmodels/Campaigns/CampaignViewModel';
import moment from 'moment';
import { dateTimeFormat } from '../../utils/format';
interface UpcomingBookFairProps {
    campaign: CampaignViewModel;
}
function UpcomingBookFair(props: UpcomingBookFairProps) {
    const { navigate } = useRouter();
    return (
        <View style={{ height: 220, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
                onPress={() => navigate("CampaignDetail")}
                style={{ width: "100%", height: "100%", borderBottomColor: primaryTint6, borderBottomWidth: 1 }}>
                <Image
                    source={{ uri: props.campaign.imageUrl }}
                    style={{ flex: 1, width: "100%", height: "100%" }}
                    resizeMethod="resize"
                    resizeMode="stretch" />
                <LinearGradient
                    start={{ x: 0.5, y: -0.1 }}
                    end={{ x: 0.5, y: 1 }}
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                    style={{ position: "absolute", height: "100%", width: "100%" }}>
                </LinearGradient>
                <View
                    style={{ position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <View style={{ width: "92%", height: "90%", justifyContent: "flex-end" }}>
                        <Text style={{ fontSize: 22, fontWeight: "500" }}>{props.campaign.name}</Text>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <View style={{ width: "55%" }}>
                                <Text style={{ marginLeft: 2 }} >Địa điểm: {props.campaign.address}</Text>
                                <Text style={{ fontSize: 12, marginLeft: 2 }} >
                                    Thời gian:
                                    <Text style={{ fontWeight: "500" }}> {moment(props.campaign.startDate).format(dateTimeFormat)}</Text>
                                </Text>
                            </View>
                            <View style={{ width: "45%" }}>
                                <Text style={{ textAlign: "right" }} >Tổ chức: {props.campaign.campaignOrganizations.map(item => item.organization.name).join(", ")}</Text>
                                <Text style={{ textAlign: "right" }}>NXB: {props.campaign.participants.map(item => item.issuer.user.name).join(", ")}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default UpcomingBookFair