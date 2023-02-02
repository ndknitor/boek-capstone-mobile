import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import img1 from "../../assets/wtd.webp";
import useRouter from '../../libs/hook/useRouter';

interface OnGoingBookFairProps {
    title: string;
    location: string;
    endTime: string;
    organizations: string;
    publishers: string;
}
function OnGoingBookFair(props: OnGoingBookFairProps) {
    const {navigate} = useRouter();
    return (
        <TouchableOpacity onPress={() => navigate("CampaignDetail")}>
            <Image source={img1} style={{ width: "100%", height: "100%" }} resizeMethod="resize" resizeMode="contain" />
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
                    width: "85%",
                    height: "90%",
                    justifyContent: "flex-end"
                }}>
                    <Text style={{ fontSize: 22, fontWeight: "500" }}>{props.title}</Text>
                    <View style={{
                        width: "100%",
                        flexDirection: "row"
                    }}>
                        <View style={{ width: "55%" }}>
                            <Text style={{ marginLeft: 2 }} >Địa điểm: {props.location}</Text>
                            <Text style={{ fontSize: 12, marginLeft: 2 }}>Kết thúc:
                                <Text style={{ fontWeight: "500" }}> {props.endTime}</Text>
                            </Text>
                        </View>
                        <View style={{ width: "45%" }}>
                            <Text style={{ textAlign: "right" }}>Tổ chức: {props.organizations}</Text>
                            <Text style={{ textAlign: "right" }}>NXB: {props.publishers}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OnGoingBookFair