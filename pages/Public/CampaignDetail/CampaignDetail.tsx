import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, ScrollView, Animated } from 'react-native'
import img1 from "../../../assets/wtd.webp";
import locationBlack from "../../../assets/icons/location-black.png";
import calendarBlack from "../../../assets/icons/calendar-today-black.png";
import avatar from "../../../assets/avatar.jpg";
import useCampaignDetaillPage from './CampaignDetail.hook';
import verticalAlignTopWhite from "../../../assets/icons/vertical-align-top-white.png";
import navigateRightWhite from "../../../assets/icons/navigate-right-white.png";
import useRouter from '../../../libs/hook/useRouter';
import LabeledImage from '../../../components/LabeledImage/LabeledImage';
import TitleFlatBooks from '../../../components/TitleFlatBooks/TitleFlatBooks';
import ShowMoreButton from '../../../components/ShowMoreButton/ShowMoreButton';
import { paletteGray, paletteGrayTint9, paletteGreen, paletteGreenBold, primaryColor, primaryTint1, primaryTint2, primaryTint7 } from '../../../utils/color';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import eventBusyBlack from "../../../assets/icons/event-busy-black.png";
import LayoutModal from '../../../components/LayoutModal/LayoutModal';
import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import PageLoader from '../../../components/PageLoader/PageLoader';
import { dateTimeFormat } from '../../../utils/format';
import moment from 'moment';
import TitleTabedFlatBooks from '../../../components/TitleTabedFlatBooks/TitleTabedFlatBooks';
import CampaignStatus from '../../../objects/enums/CampaignStatus';
import { Button } from '@rneui/base';

function CampaignDetail(props: StackScreenProps<ParamListBase>) {
    const hook = useCampaignDetaillPage(props);
    const { navigate } = useRouter();
    return (
        <>
            <PageLoader loading={hook.ui.loading} opacity={1} />

            <LayoutModal
                visible={hook.ui.issuerModalVisible.value}
                onClose={() => hook.ui.issuerModalVisible.set(false)}
                closeOverlay>
                <View style={{
                    //borderWidth: 1,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    paddingTop: "20%"
                }}>
                    <View
                        style={{
                            backgroundColor: paletteGrayTint9,
                            borderRadius: 8,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 24,
                            height: 240,
                            width: "95%",
                            flexDirection: "row"
                        }}>
                        <View style={{
                            width: "30%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <View style={{ borderRadius: 999, overflow: "hidden" }}>
                                <Image
                                    source={{ uri: hook.data.issuerDetail?.user.imageUrl }}
                                    resizeMode="cover"
                                    style={{
                                        width: 90,
                                        height: 90
                                    }} />
                            </View>
                        </View>
                        <View style={{
                            width: "70%",
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 16, margin: 5 }}>Tên: {hook.data.issuerDetail?.user.name}</Text>
                            <Text style={{ fontSize: 16, margin: 5 }}>SDT: {hook.data.issuerDetail?.user.phone}</Text>
                            <Text style={{ fontSize: 16, margin: 5 }}>Địa chỉ: {hook.data.issuerDetail?.user.address}</Text>
                            <Text style={{ fontSize: 16, margin: 5 }}>Email: {hook.data.issuerDetail?.user.email}</Text>
                        </View>
                    </View>


                </View>
            </LayoutModal>

            <FadeTransition
                showed={hook.scrollToTop.scrollToTopShowed}
                style={{
                    backgroundColor: primaryTint1,
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
                <TouchableOpacity
                    onPress={hook.scrollToTop.scrollToTop}
                    style={{

                    }}>
                    <Image
                        source={verticalAlignTopWhite}
                        resizeMode="cover"
                        style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </FadeTransition>

            <ScrollView
                onScrollEndDrag={hook.event.onScrollViewScroll}
                onMomentumScrollEnd={hook.event.onScrollViewScroll}
                ref={hook.ref.scrollViewRef}>
                <View style={{ backgroundColor: "white" }}>
                    <View style={{ width: "100%", padding: 10 }}>
                        <Text style={{ fontSize: 24, fontWeight: "600" }}>{hook.data.campaign?.name}</Text>
                    </View>
                    <View style={{ width: "100%", paddingLeft: 10 }}>
                        {
                            hook.data.campaign?.status == CampaignStatus.notStarted &&
                            <View style={{ marginTop: 4, backgroundColor: "yellow", alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                                <Text style={{ color: "white", fontSize: 13, fontWeight: "500" }}>{hook.data.campaign?.statusName}</Text>
                            </View>
                        }
                        {
                            hook.data.campaign?.status == CampaignStatus.start &&
                            <View style={{ marginTop: 4, backgroundColor: paletteGreen, alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                                <Text style={{ color: paletteGreenBold, fontSize: 13, fontWeight: "500" }}>{hook.data.campaign?.statusName}</Text>
                            </View>
                        }
                        {
                            hook.data.campaign?.status == CampaignStatus.end &&
                            <View style={{ marginTop: 4, backgroundColor: paletteGray, alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                                <Text style={{ color: "white", fontSize: 13, fontWeight: "500" }}>{hook.data.campaign?.statusName}</Text>
                            </View>
                        }
                        {
                            hook.data.campaign?.status == CampaignStatus.postpone &&
                            <View style={{ marginTop: 4, backgroundColor: "red", alignItems: "center", justifyContent: "center", width: "30%", height: 25, borderRadius: 24 }}>
                                <Text style={{ fontSize: 13, fontWeight: "500" }}>{hook.data.campaign?.statusName}</Text>
                            </View>
                        }
                    </View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <Image source={{ uri: hook.data.campaign?.imageUrl }} style={{ marginTop: 20, marginBottom: 20, width: "90%", height: Dimensions.get("window").width / 16 * 9 }} resizeMethod="resize" resizeMode="contain" />
                    </View>

                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                                <Image style={{ height: 20, width: 20 }} source={locationBlack} />
                            </View>
                            <Text>Diễn ra tại : {hook.data.campaign?.address}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                                <Image style={{ height: 20, width: 20, marginRight: 2 }} source={calendarBlack} />
                            </View>
                            <Text >Bắt đầu : {moment(hook.data.campaign?.startDate).format(dateTimeFormat)}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                                <Image style={{ height: 20, width: 20, marginRight: 2 }} source={eventBusyBlack} />
                            </View>
                            <Text >Kết thúc : {moment(hook.data.campaign?.endDate).format(dateTimeFormat)}</Text>
                        </View>
                        <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 22, fontWeight: "600", }}>Nhà phát hành</Text>
                        {
                            hook.data.campaign?.issuers?.length == 0 || !hook.data.campaign?.issuers ?
                                <View>
                                    <Text style={{ fontSize: 17 }}>Chưa có nhà phát hành</Text>
                                </View>
                                :
                                <>
                                    <FlatList
                                        horizontal
                                        data={hook.data.campaign?.issuers}
                                        renderItem={e =>
                                            <LabeledImage
                                                onPress={() => hook.event.onIssuerDetailPress(e.item)}
                                                label={e.item?.user.name} source={{ uri: e.item.user.imageUrl }} />} />
                                </>
                        }
                        {
                            hook.data.campaign?.hierarchicalBookProducts?.map(item =>
                                <>
                                    <TitleTabedFlatBooks
                                        title={item.title}
                                        data={item.subHierarchicalBookProducts?.map(product => ({ tabLabel: product.subTitle, tabData: product.bookProducts })) as any} />
                                    <ShowMoreButton onPress={() => navigate("IssuerMoreBook")} />
                                </>
                            )
                        }
                        {
                            hook.data.campaign?.unhierarchicalBookProducts?.map(item =>
                                <TitleFlatBooks
                                    title={item.title}
                                    data={item.bookProducts as any} />
                            )
                        }
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: "600", }}>Mô tả</Text>
                            <Text>{hook.data.campaign?.description}</Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <View style={{ width: "85%" }}>
                                <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 3, marginTop: 10 }}>Tổ chức</Text>
                            </View>
                            {
                                hook.data.campaign?.isRecurring &&
                                <View style={{ width: "15%", alignItems: "center", justifyContent: "center" }}>
                                    <Button buttonStyle={{ backgroundColor: primaryTint2, borderRadius: 999, width: 35, height: 35 }}>
                                        <Image source={navigateRightWhite} style={{ width: "100%", height: 30 }} resizeMode="contain" />
                                    </Button>
                                </View>
                            }
                        </View>
                        <FlatList
                            horizontal
                            data={hook.data.campaign?.organizations}
                            renderItem={e =>
                                <LabeledImage label={e.item?.name} source={{ uri: e.item.imageUrl }} />
                            } />
                        <View style={{ borderWidth: 1, borderColor: primaryTint7, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10 }}>
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