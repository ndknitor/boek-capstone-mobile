import React from 'react'
import { Pressable, ScrollView, View, Image } from 'react-native'
import { Button, Text } from '@react-native-material/core';
import LayoutModal from '../../../components/LayoutModal/LayoutModal'
import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import useOrderConfirmPage from './OrderConfirm.hook';
import BarCode from '../../../assets/SvgComponents/BarCode';
import { paletteGray, paletteGreenBold, paletteOrange, palettePink, primaryTint1, primaryTint4 } from '../../../utils/color';
import LocalShipping from '../../../assets/SvgComponents/LocalShipping';
import navigateRightBlack from "../../../assets/icons/navigate-right-black.png";
import ExpandToggleView from '../../../components/ExpandToggleView/ExpandToggleView';
import formatNumber from '../../../libs/functions/formatNumber';
import { CheckBox } from '@rneui/base';
import Shadow from '../../../components/Shadow/Shadow';


function OrderConfirm(props: StackScreenProps<ParamListBase>) {
    const cashPaymentMethod = 0;
    const zaloPayPaymentMethod = 1;
    const hook = useOrderConfirmPage(props);
    return (
        <>
            <LayoutModal visible={hook.ui.infoModalVisible} onClose={() => hook.ui.setInfoModalVisible(!hook.ui.infoModalVisible)}>
                <Pressable
                    onPress={() => hook.ui.setInfoModalVisible(false)}
                    style={{
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.6)"
                    }}>
                    <View style={{
                        backgroundColor: "white",
                        borderRadius: 24,
                        width: "95%",
                        height: "35%",
                        padding: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 24,
                        rowGap: 15,
                        justifyContent: "center"
                    }}>
                        <Text style={{ fontSize: 16 }}>
                            • NPH sẽ phụ trách giao hàng đến địa chỉ của
                            bạn.
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            • Phí vận chuyển của đơn phụ thuộc vào nội
                            thành hay ngoại thành đối với các nơi hội
                            sách đang tổ chức {"\n"}
                            o Nội thành: 15,000 đ {"\n"}
                            o Ngoại thành: 30,000 đ
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            • Lưu ý: Boek không chịu trách nhiệm về đơn
                            đổi trả của khách hàng. Xin liên hệ NPH về
                            vấn đề này.
                        </Text>
                    </View>
                </Pressable>
            </LayoutModal>

            <ScrollView style={{
                backgroundColor: "white",
                padding: 10
            }}>
                <View style={{
                    borderBottomColor: primaryTint1,
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    paddingBottom: 10
                }}>
                    <View style={{
                        //borderWidth: 1,
                        width: "10%",
                        alignItems: "center"
                    }}>
                        <LocalShipping />
                    </View>
                    <View style={{
                        //borderWidth: 1,
                        width: "80%",
                        rowGap: 7
                    }}>
                        <Text>Tên: </Text>
                        <Text>SĐT: </Text>
                        <Text>Địa chỉ: </Text>
                    </View>
                    <View style={{
                        //borderWidth: 1,
                        width: "10%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={navigateRightBlack} style={{ width: 25, height: 25 }} resizeMode="contain" />
                    </View>
                </View>

                <ExpandToggleView initExpanded={false} label='Tên hội sách'>
                    <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: primaryTint4 }}>
                        <>
                            <Text style={{ fontSize: 16, marginBottom: 10 }}>Tên nhà phát hành</Text>
                            <View style={{
                                flexDirection: "row",
                                marginBottom: 20
                            }}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: primaryTint1,
                                    width: "20%",
                                    height: 100,
                                    borderRadius: 8
                                }}>
                                    <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/8a/c3/a9/733444596bdb38042ee6c28634624ee5.jpg" }} />
                                </View>
                                <View style={{
                                    width: "50%",
                                    paddingLeft: 10,
                                    justifyContent: "center"
                                }}>
                                    <Text style={{ fontSize: 16 }}>Tên sách</Text>
                                    <Text>Số lượng: x1</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end", justifyContent: "center" }}>
                                    <Text style={{ color: palettePink, fontSize: 18, fontWeight: "700" }}>{formatNumber(100000)}đ</Text>
                                </View>
                            </View>
                        </>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>Tên nhà phát hành</Text>
                        <View style={{
                            flexDirection: "row",
                            marginBottom: 20
                        }}>
                            <View style={{
                                borderWidth: 1,
                                borderColor: primaryTint1,
                                width: "20%",
                                height: 100,
                                borderRadius: 8
                            }}>
                                <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/8a/c3/a9/733444596bdb38042ee6c28634624ee5.jpg" }} />
                            </View>
                            <View style={{
                                width: "50%",
                                paddingLeft: 10,
                                justifyContent: "center"
                            }}>
                                <Text style={{ fontSize: 16 }}>Tên sách</Text>
                                <Text>Số lượng: x1</Text>
                            </View>
                            <View style={{ width: "30%", alignItems: "flex-end", justifyContent: "center" }}>
                                <Text style={{ color: palettePink, fontSize: 18, fontWeight: "700" }}>{formatNumber(100000)}đ</Text>
                            </View>
                        </View>
                    </View>
                </ExpandToggleView>

                <View style={{
                    borderBottomColor: primaryTint4,
                    borderBottomWidth: 1,
                    rowGap: 5,
                    padding: 10
                }}>
                    <Text style={{ fontSize: 16 }}>Phương thức thanh toán</Text>
                    <CheckBox
                        title="Tiền mặt"
                        checked={hook.input.paymentMethod.value == cashPaymentMethod}
                        center
                        checkedIcon="dot-circle-o"
                        onPress={() => hook.input.paymentMethod.set(cashPaymentMethod)}
                        uncheckedIcon="circle-o"
                        containerStyle={{ backgroundColor: "transparent", alignItems: "flex-start" }} />
                    <CheckBox
                        title="ZaloPay"
                        checked={hook.input.paymentMethod.value == zaloPayPaymentMethod}
                        center
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={() => hook.input.paymentMethod.set(zaloPayPaymentMethod)}
                        containerStyle={{ backgroundColor: "transparent", alignItems: "flex-start" }} />
                </View>

                <View style={{
                    rowGap: 5,
                    padding: 10
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 16 }}>Tạm tính</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 16 }}>{formatNumber(100000)}đ</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 16 }}>Phí vận chuyển</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 16 }}>{formatNumber(100000)}đ</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 16, color: palettePink }}>Tích điểm</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 16, color: paletteOrange }}>{formatNumber(100000)}đ</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={{
                backgroundColor: "white",
                padding: 10
            }}>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                    <View style={{
                        width: "60%",
                        rowGap: 10
                    }}>
                        <Text style={{ fontSize: 16, color: palettePink }}>Tổng tiền</Text>
                        <Text style={{ fontSize: 20, color: paletteGreenBold }}>{formatNumber(100000)}đ</Text>
                    </View>
                    <View style={{
                        width: "40%",
                        alignItems: "flex-end"
                    }}>
                        <Button
                            title="Thanh toán"
                            //onPress={hook.event.onOrderSubmit}
                            style={{ marginTop: 10, width: 140, backgroundColor: palettePink }} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default OrderConfirm