import { View, Image, TouchableOpacity, Text,  GestureResponderEvent } from 'react-native'
import logo from "../../assets/logo.png";
import bookmark from "../../assets/icons/bookmark-border-white.png";
import bookmarkRemove from "../../assets/icons/bookmark-remove-white.png";
import { paletteRed, shade1, shade9 } from '../../utils/color';
import useOrganizationExpandComponent from './OrganizationView.hook';
export interface OrganizationViewProps {
    tracked?: boolean;
    onTrackPress?: (e: GestureResponderEvent) => void;
}
function OrganizationView(props: OrganizationViewProps) {
    return (
        <View style={{ flex: 1, flexDirection: "row", height: 160, borderBottomColor: shade9, borderBottomWidth: 2 }}>
            <View style={{ height: 160, width: "25%" }}>
                <Image style={{ height: "97%", width: "97%" }} source={logo} resizeMode={"contain"} />
            </View>
            <View style={{ width: "60%", overflow: "hidden", padding: 10, paddingTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>FPT</Text>
                <Text style={{ paddingTop: 5, fontSize: 15 }}>Địa chỉ: 58 P. Kim Mã, Kim Mã, Ba Đình, Hà Nội, Việt Nam</Text>
                <Text style={{ paddingTop: 10 }}>Số điện thoại: 0969696969</Text>
            </View>
            <View style={{ width: "15%", justifyContent: "flex-start", alignItems: "center" }}>
                <View style={{ alignItems: "center", justifyContent: "center",width: "100%", height: "80%" }}>

                    <TouchableOpacity onPress={props.onTrackPress} style={{
                        backgroundColor: props.tracked ? paletteRed : shade1,
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
                        <Image source={props.tracked ? bookmarkRemove : bookmark} resizeMode={"contain"} style={{ width: "60%", height: "60%" }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrganizationView