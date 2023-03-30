import React from 'react'
import { TouchableOpacity, View, Image, GestureResponderEvent } from 'react-native'
import { Text } from '@react-native-material/core'
import { paletteGray, paletteGrayLight, palettePink, palettePinkTint2, palettePinkTint4, palettePinkTint6, primaryTint7 } from '../../utils/color'
import { MobileBookProductViewModel } from '../../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel';
import { MobileBookProductsViewModel } from '../../objects/viewmodels/BookProduct/Mobile/MobileBookProductsViewModel';
import formatNumber from '../../libs/functions/formatNumber';
interface SeletedBookCardProps {
    book: MobileBookProductViewModel | MobileBookProductsViewModel;
    seleted: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
function SeletedBookCard(props: SeletedBookCardProps) {
    return (
        <View
            style={{
                width: 195,
                height: 240,
                alignItems: "center",
                justifyContent: "center"
            }}>
            <TouchableOpacity
                onPress={props.onPress}
                style={{
                    borderColor: props.seleted ? palettePink : primaryTint7,
                    borderWidth: props.seleted ? 2 : 1,
                    borderRadius: 8,
                    height: "97%",
                    width: "95%"
                }}>
                <View
                    style={{
                        height: "60%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <View
                        style={{
                            height: "95%",
                            width: "95%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Image
                            source={{ uri: props.book.imageUrl }}
                            resizeMode="cover"
                            style={{ height: "90%", width: "90%" }} />
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "40%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <View style={{
                        width: "95%",
                        height: "90%"
                    }}>
                        <View style={{ height: "30%", paddingLeft: 2 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600"
                            }}>{props.book.title || ""}</Text>
                        </View>
                        <View style={{ height: "70%", width: "100%", flexDirection: "row" }}>
                            <View style={{ width: "60%", height: "100%", justifyContent: "center", paddingLeft: 2 }}>
                                <Text style={{
                                    color: palettePink,
                                    fontSize: 18,
                                    fontWeight: "700"
                                }}>{formatNumber(props.book.salePrice)}đ</Text>
                                {
                                    props.book.discount ?
                                        <Text style={{ color: paletteGray, fontSize: 16, textDecorationLine: "line-through" }}>{formatNumber(props.book.book?.coverPrice)}đ</Text>
                                        :
                                        null
                                }
                            </View>
                            <View style={{ width: "40%", height: "100%", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                {
                                    props.book.discount ?
                                        <View style={{
                                            width: "90%",
                                            backgroundColor: palettePink,
                                            alignItems: "center"
                                        }}>
                                            <Text style={{ color: "white", fontSize: 18, padding: 5 }}>-{props.book.discount}%</Text>
                                        </View>
                                        :
                                        null
                                }
                            </View>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SeletedBookCard