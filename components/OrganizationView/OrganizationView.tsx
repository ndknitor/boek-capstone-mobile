import { View, Image, TouchableOpacity, Text, GestureResponderEvent, ActivityIndicator } from 'react-native'
import bookmark from "../../assets/icons/bookmark-border-white.png";
import bookmarkRemove from "../../assets/icons/bookmark-remove-white.png";
import { paletteRed, primaryTint1, primaryTint9, } from '../../utils/color';
import { OrganizationViewModel } from '../../objects/viewmodels/Organizations/OrganizationViewModel';
import { BasicOrganizationViewModel } from '../../objects/viewmodels/Organizations/BasicOrganizationViewModel';
export interface OrganizationViewProps {
    organization: OrganizationViewModel | BasicOrganizationViewModel;
    tracked?: boolean;
    onTrackPress?: (e: GestureResponderEvent) => void;
    loading: boolean;
}
function OrganizationView(props: OrganizationViewProps) {
    return (
        <View style={{ flex: 1, flexDirection: "row", height: 160, borderBottomColor: primaryTint9, borderBottomWidth: 2 }}>
            <View style={{ height: 160, width: "25%", alignItems: "center" }}>
                <Image style={{ height: "80%", width: "80%" }} source={{ uri: props.organization.imageUrl }} resizeMode={"contain"} />
            </View>
            <View style={{ width: "60%", overflow: "hidden", padding: 10, paddingTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>{props.organization.name}</Text>
                <Text style={{ paddingTop: 5, fontSize: 15 }}>Địa chỉ: {props.organization.address}</Text>
                <Text style={{ paddingTop: 10 }}>Số điện thoại: {props.organization.phone}</Text>
            </View>
            <View style={{ width: "15%", justifyContent: "flex-start", alignItems: "center" }}>
                <View style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "80%" }}>

                    <TouchableOpacity
                        disabled={props.loading}
                        onPress={props.onTrackPress}
                        style={{
                            backgroundColor: props.tracked ? paletteRed : primaryTint1,
                            borderRadius: 9999,
                            width: 45,
                            height: 45,
                            alignItems: "center",
                            justifyContent: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 24
                        }}>
                        {
                            props.loading ? <ActivityIndicator style={{ width: "100%", height: "100%" }} color="white" /> :
                                <Image source={props.tracked ? bookmarkRemove : bookmark} resizeMode={"contain"} style={{ width: "60%", height: "60%" }} />
                        }

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrganizationView