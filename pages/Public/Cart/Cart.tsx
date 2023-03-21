import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, CheckBox } from '@rneui/base'
import React from 'react'
import { ScrollView, View, Image, TouchableOpacity } from 'react-native'
import { Text } from "@react-native-material/core";
import NumericInput from 'react-native-numeric-input'
import Close from '../../../assets/SvgComponents/Close'
import ExpandToggleView from '../../../components/ExpandToggleView/ExpandToggleView'
import useAppContext from '../../../context/Context'
import formatNumber from '../../../libs/functions/formatNumber'
import { paletteGray, paletteGrayTint9, palettePink, paletteRed, primaryTint1, primaryTint10, primaryTint4, primaryTint6, primaryTint8, primaryTint9 } from '../../../utils/color'
import useCartPage from './Cart.hook'
import Shadow from '../../../components/Shadow/Shadow'
import truncateString from '../../../libs/functions/truncateString'

function Cart(props: StackScreenProps<ParamListBase>) {
    const hook = useCartPage();
    const { cart, addToCart, removeFromCart } = useAppContext();
    return (
        <>
            <View style={{
                display: cart.length == 0 ? "flex" : "none",
                height: "90%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ fontSize: 18 }}>Chưa có sản phẩm nào trong giỏ hàng</Text>
            </View>
            <ScrollView style={{
                backgroundColor: "white", height: "90%",
                display: cart.length == 0 ? "none" : "flex"
            }}>
                {
                    hook.getCampagins().map(campaign =>
                        <ExpandToggleView
                            label={campaign.name}
                            initExpanded={hook.initExpanded(campaign)}>
                            <View style={{
                                padding: 15,
                                borderWidth: 1,
                                borderColor: primaryTint6
                            }}>
                                {
                                    hook.getIssuerByCampaignId(campaign.id as number).map(issuer =>
                                        <Shadow style={{
                                            backgroundColor: "white",
                                            elevation: 2,
                                            marginBottom: 20
                                        }}>
                                            <View style={{
                                                alignItems: "center"
                                            }}>
                                                <View style={{
                                                    flexDirection: "row",
                                                    borderWidth: 1,
                                                    borderTopStartRadius: 8,
                                                    borderTopEndRadius: 8,
                                                    borderColor: primaryTint4,

                                                }}>
                                                    <View style={{
                                                        //borderWidth: 1,
                                                        width: "100%"
                                                    }}>
                                                        <CheckBox
                                                            title={issuer.user.name}
                                                            checked
                                                            center
                                                            containerStyle={{
                                                                backgroundColor: "transparent",
                                                                alignItems: "flex-start"
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                            {
                                                hook.getProuctByIssuerIdAndCampaginId(issuer.id as string, campaign.id as number).map(product =>

                                                    <View style={{ alignItems: "center" }}>
                                                        <View style={{
                                                            height: 220,
                                                            borderColor: paletteGray,
                                                            borderWidth: 1,
                                                            borderTopWidth: 0,
                                                        }}>
                                                            <View style={{
                                                                height: "70%",
                                                                flexDirection: "row",
                                                                marginTop: "5%"
                                                            }}>
                                                                <View style={{
                                                                    width: "15%",
                                                                    alignItems: "center",
                                                                    justifyContent: "center"
                                                                }}>
                                                                    <CheckBox
                                                                        checked
                                                                        center
                                                                        containerStyle={{
                                                                            backgroundColor: "transparent",
                                                                            alignItems: "center"
                                                                        }}
                                                                    />
                                                                </View>
                                                                <View style={{
                                                                    width: "25%",
                                                                    height: "100%",
                                                                    borderWidth: 1,
                                                                    borderColor: primaryTint4
                                                                }}>
                                                                    <Image source={{ uri: product.product.imageUrl }} style={{ height: "100%" }} resizeMode="cover" />
                                                                </View>
                                                                <View style={{
                                                                    //borderWidth: 1,
                                                                    width: "50%",
                                                                    height: "100%",
                                                                    padding: 10,
                                                                    justifyContent: "center"
                                                                }}>
                                                                    <Text style={{
                                                                        fontSize: 20
                                                                    }}>{truncateString(product.product.title, 6)}</Text>
                                                                    <Text style={{ paddingTop: 2, color: palettePink, fontSize: 18, fontWeight: "700" }}>{formatNumber(product.product.salePrice)}đ     {product.product.discount && <Text style={{ textDecorationLine: "line-through", fontSize: 16, color: paletteGray }}>{formatNumber(product.product.book?.coverPrice)}đ</Text>}</Text>
                                                                    <View style={{
                                                                        flexDirection: "row",
                                                                        height: 20,
                                                                        paddingTop: 2
                                                                    }}>
                                                                        <NumericInput
                                                                            minValue={1}
                                                                            totalWidth={90}
                                                                            value={product.quantity}
                                                                            onChange={(value) => hook.event.onQuantityChange(product, value)}
                                                                        />
                                                                    </View>
                                                                </View>
                                                                <View style={{
                                                                    //borderWidth: 1,
                                                                    width: "10%",
                                                                    alignItems: 'center',
                                                                    justifyContent: "center"
                                                                }}>
                                                                    <TouchableOpacity onPress={() => removeFromCart(product.id)}>
                                                                        <Close width={25} height={25} color={paletteRed} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                            <View style={{
                                                                //borderWidth : 1,
                                                                flexDirection: "row",
                                                                alignItems: "center"
                                                            }}>
                                                                {
                                                                    product.product.withPdf &&
                                                                    <CheckBox
                                                                        title="PDF"
                                                                        checked
                                                                        center
                                                                        containerStyle={{
                                                                            backgroundColor: "transparent",
                                                                            alignItems: "flex-start"
                                                                        }}
                                                                    />
                                                                }
                                                                {
                                                                    product.product.withAudio &&
                                                                    <CheckBox
                                                                        title="Audio"
                                                                        checked
                                                                        center
                                                                        containerStyle={{ backgroundColor: "transparent", alignItems: "flex-start" }} />
                                                                }
                                                            </View>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        </Shadow>
                                    )
                                }

                            </View>
                        </ExpandToggleView>
                    )
                }
            </ScrollView>
            <View style={{
                borderTopColor: paletteGray,
                borderTopWidth: 1,
                height: "10%",
                backgroundColor: "white",
                flexDirection: "row"
            }}>
                <View style={{
                    //borderWidth: 1,
                    width: "60%",
                    padding: 10
                }}>
                    <Text style={{ fontSize: 17, marginBottom: 10 }}>Tổng cộng</Text>
                    <Text style={{ fontSize: 15, color: palettePink }}>Vui lòng chọn sản phẩm</Text>
                </View>
                <View style={{
                    //borderWidth : 1,
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Button buttonStyle={{
                        display: cart.length == 0 ? "none" : "flex",
                        backgroundColor: primaryTint1,
                        width: 130
                    }} >Mua hàng</Button>
                    {/* <Button buttonStyle={{
                        backgroundColor: paletteGrayShade1,
                        width: 130
                    }} >Mua hàng</Button> */}
                </View>
            </View>
        </>
    )
}

export default Cart