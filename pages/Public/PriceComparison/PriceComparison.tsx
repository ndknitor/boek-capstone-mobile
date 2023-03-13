import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '@rneui/base';
import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import formatNumber from '../../../libs/functions/formatNumber';
import useRouter from '../../../libs/hook/useRouter';
import { paletteGray, paletteGrayLight, paletteGreen, paletteGreenBold, palettePink, primaryTint1, primaryTint4, primaryTint6 } from '../../../utils/color';
import { mockBooks } from '../../../utils/mock';
import usePriceComparisonPage from './PriceComparison.hook'
export interface PriceComparisonProps extends StackScreenProps<ParamListBase> {

}
function PriceComparison(props: PriceComparisonProps) {
    const { push } = useRouter();
    const hook = usePriceComparisonPage(props);
    return (
        <View style={{ backgroundColor: "white", width : "100%"}}>
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
                    width: "35%",
                    borderRadius: 8,
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: primaryTint4
                }}>
                    <Image source={{ uri: hook.data.bookProduct?.imageUrl }} style={{ height: 150 }} resizeMode="contain" />
                </View>
                <View style={{ width: "65%", justifyContent: "center", paddingLeft: 20, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>{hook.data.bookProduct?.title}</Text>
                    <Text style={{ fontSize: 16, color: paletteGray }}>{hook.data.bookProduct?.campaign?.name}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: palettePink }}>{formatNumber(hook.data.bookProduct?.salePrice)} đ</Text>
                </View>
            </View>
            <ScrollView>

                {
                    hook.data.bookProduct?.otherMobileBookProducts?.map(item =>
                        <View style={{
                            flexDirection: "row",
                            borderBottomWidth: 1,
                            borderBottomColor: primaryTint6
                        }}>
                            <View style={{ width: "40%", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "600", color: palettePink }}>
                                    {formatNumber(item.salePrice)} đ
                                </Text>
                            </View>
                            <View style={{ width: "60%", alignItems: "flex-end", padding: 10 }}>
                                <Text style={{ marginBottom: 10, fontSize: 16, color: paletteGray }}>{item.campaignName}</Text>
                                <Button buttonStyle={{ width: 80, backgroundColor: primaryTint1 }}
                                    onPress={() => push("BookDetail", { bookId: item.id })}>Xem</Button>
                            </View>
                        </View>
                    )
                }

            </ScrollView>
        </View>
    )
}

export default PriceComparison