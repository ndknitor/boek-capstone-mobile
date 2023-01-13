import { Button } from '@rneui/base';
import React from 'react'
import { View, Text, Image } from 'react-native'
import useRouter from '../../libs/hook/useRouter';
import { paletteGrayShade2, paletteGrayTint5, paletteGreen, paletteGreenBold, primaryTint1, primaryTint4 } from '../../utils/color'
import { books } from '../../utils/mock'

function OrderCard() {
    const { navigate } = useRouter();
    const orderBook = books.slice(0, 2);
    return (
        <View key={Math.random()}
            style={{
                backgroundColor: "white",
                borderWidth: 1,
                height: 60 + 40 + (130 * 2),
                borderRadius: 8,
                overflow: "hidden",
                borderColor: primaryTint4
            }}>
            <View style={{ height: 40 }}>
                <View style={{
                    backgroundColor: paletteGreen,
                    justifyContent: "center",
                    height: "100%",
                    paddingLeft: 10
                }}>
                    <Text style={{ color: paletteGreenBold, fontSize: 15, fontWeight: "500" }}>Giao hàng thành công</Text>
                </View>
            </View>
            {
                orderBook.map(item =>
                    <View style={{
                        //borderWidth: 1,
                        height: 130,
                        padding: 5,
                        borderBottomColor: paletteGrayTint5,
                        borderBottomWidth: 1,
                        flexDirection: "row"
                    }}>
                        <View style={{
                            //borderWidth: 1,
                            height: "100%",
                            width: "25%",
                            flexDirection: "row"
                        }}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                resizeMode="contain"
                                style={{ width: "100%" }} />
                        </View>
                        <View style={{
                            //borderWidth: 1,
                            width: "45%",
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
                            <Text>Số lượng : 2</Text>
                            <Text style={{ color: paletteGrayShade2 }}>{item.issuer.name}</Text>
                        </View>
                        <View style={{
                            //borderWidth: 1,
                            width: "30%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 16 }}>69.000 x 2 đ</Text>
                        </View>
                    </View>
                )
            }
            <View style={{
                //borderWidth: 1,
                height: 60,
                padding: 7,
                flexDirection: "row"
            }}>
                <View style={{
                    //borderWidth: 1,
                    width: "65%",
                    height: "100%",
                    justifyContent: "center"
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Tổng tiền: </Text>
                        <Text style={{ fontSize: 16 }}>69.000 đ</Text>
                    </View>
                </View>
                <View style={{
                    //borderWidth: 1,
                    width: "35%"
                }}>
                    <Button
                        onPress={() => navigate("OrderDetail")}
                        buttonStyle={{
                            height: "100%",
                            backgroundColor: primaryTint1
                        }}>Xem chi tiết</Button>
                </View>
            </View>
        </View>
    )
}

export default OrderCard