import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import { paletteGray, paletteGrayLight, paletteGreen, paletteGreenBold, palettePink, primaryTint6 } from '../../../utils/color';
import { books } from '../../../utils/mock';
import usePriceComparisonPage from './PriceComparison.hook'
export interface PriceComparisonProps extends StackScreenProps<ParamListBase> {

}
function PriceComparison(props: PriceComparisonProps) {
    const hook = usePriceComparisonPage(props);
    const book = books[0];
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{
                backgroundColor: "white",
                padding: 20,
                flexDirection: "row",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                elevation: 8
            }}>
                <View style={{
                    width: "40%",
                    borderRadius: 8,
                    overflow: "hidden",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    elevation: 24
                }}>
                    <Image source={{ uri: book.imageUrl }} style={{ height: 120 }} resizeMode="cover" />
                </View>
                <View style={{ width: "60%", justifyContent: "flex-end", paddingLeft: 20, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>{book.name}</Text>
                    <Text style={{ fontSize: 16, color: paletteGray }}>Tên hội sách</Text>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: palettePink }}>69.000 đ</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: primaryTint6 }}>
                    <View style={{ padding: 10, width: "40%" }} >
                        <View style={{ borderWidth: 1, borderColor: primaryTint6, borderRadius: 8, overflow: "hidden" }}>
                            <Image source={{ uri: book.imageUrl }} style={{ height: 140 }} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={{ width: "60%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>{book.name}</Text>
                        <Text style={{ fontSize: 16, color: paletteGray }}>Tên hội sách</Text>
                        <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: "600", color: palettePink }}>
                            69.000 đ
                        </Text>
                        <Text style={{ width: "70%", borderRadius: 24, textAlign: "center", padding: 5, backgroundColor: paletteGreen, color: paletteGreenBold, fontSize: 15, fontWeight: "500" }}>Nhỏ hơn 1000 đ</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: primaryTint6 }}>
                    <View style={{ padding: 10, width: "40%" }} >
                        <View style={{ borderWidth: 1, borderColor: primaryTint6, borderRadius: 8, overflow: "hidden" }}>
                            <Image source={{ uri: book.imageUrl }} style={{ height: 140 }} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={{ width: "60%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>{book.name}</Text>
                        <Text style={{ fontSize: 16, color: paletteGray }}>Tên hội sách</Text>
                        <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: "600", color: palettePink }}>
                            69.000 đ
                        </Text>
                        <Text style={{ width: "70%", borderRadius: 24, textAlign: "center", padding: 5, backgroundColor: paletteGrayLight, fontSize: 15, fontWeight: "500" }}>Lớn hơn 1000 đ</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default PriceComparison