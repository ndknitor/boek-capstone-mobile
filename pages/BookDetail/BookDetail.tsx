import { Button } from '@rneui/base';
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { paletteGray, palettePink, primaryColor, shade1, shade5, shade6, shade7 } from '../../utils/color';
import { formatNumber } from '../../utils/format';
import { books } from '../../utils/mock';
import useBookDetailPage from './BookDetail.hook';
import avatar from "../../assets/avatar.jpg";
import TitleTabedFlatBooks from '../../component/TitleTabedFlatBooks/TitleTabedFlatBooks';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import ShowMoreButton from '../../component/ShowMoreButton/ShowMoreButton';
import useRouter from '../../libs/hook/useRouter';

function BookDetail() {
    const hook = useBookDetailPage();
    const book = books[0];
    const { navigate } = useRouter();
    return (
        <>
            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={{ alignItems: "center" }}>
                    <View style={{ width: "70%", height: 400, paddingTop: 20 }}>
                        <View style={{ borderRadius: 24, borderWidth: 1, borderColor: shade5, overflow: "hidden" }}>
                            <Image
                                style={{ width: "100%", height: "100%" }}
                                source={{ uri: book.imageUrl }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ padding: 10, paddingTop: 20 }}>
                    <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "600" }}>{book.name}</Text>
                    <Text style={{ fontSize: 16 }}>Thể loại: {book.genre.name}</Text>

                    <View style={{ justifyContent: 'flex-start', alignItems: "flex-end", marginBottom: 5 }}>
                        <Text style={{ fontSize: 16 }}>Có <Text style={{ color: primaryColor, fontWeight: "600" }}>69 </Text>giá khác</Text>
                    </View>
                    <View style={{ marginBottom: 20, flexDirection: "row" }}>
                        <View style={{ width: "40%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={{ color: palettePink, fontSize: 20, fontWeight: "700" }}>{formatNumber(book.coverPrice)} đ</Text>
                            <Text style={{ color: paletteGray, fontSize: 18, textDecorationLine: "line-through" }}>{formatNumber(book.coverPrice)} đ</Text>
                        </View>

                        <View style={{ width: "30%", alignItems: "center", justifyContent: "center" }}>
                            <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
                                <View style={{ width: "90%", backgroundColor: palettePink, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontSize: 20, padding: 7 }}>-69%</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: "30%", justifyContent: "center" }}>
                            <View>
                                <Button 
                                onPress={() => navigate("PriceComparison")}
                                buttonStyle={{ borderRadius: 8, backgroundColor: shade1 }}>So sánh giá</Button>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20, flexDirection: "row" }}>
                        <View style={{ width: "20%", justifyContent: 'center' }}>
                            <View style={{
                                borderRadius: 999,
                                overflow: "hidden",
                                width: 60,
                                height: 60
                            }}>
                                <Image
                                    source={avatar}
                                    resizeMode="cover"
                                    style={{ width: 60, height: 60 }} />
                            </View>

                        </View>
                        <View style={{ width: "80%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Tác giả</Text>
                        </View>
                    </View>
                    <Text style={{ marginBottom: 30, fontSize: 22, fontWeight: "600" }}>Thông tin chi tiết</Text>
                    <View>
                        <LinearGradient
                            start={{ x: 0.5, y: 0.4 }}
                            end={{ x: 0.5, y: 1 }}
                            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                zIndex: 1
                            }}>
                        </LinearGradient>
                        <View style={{ flexDirection: "row", marginBottom: 25 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", width: "25%" }}>Mã sách:</Text>
                            <Text style={{ fontSize: 16, width: "75%" }}>xxxxxxxxxxxxx</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 25 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", width: "25%" }}>ISBN10:</Text>
                            <Text style={{ fontSize: 16, width: "75%" }}>xxxxxxxxxxxxx</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 25 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", width: "25%" }}>ISBN13:</Text>
                            <Text style={{ fontSize: 16, width: "75%" }}>xxxxxxxxxxxxx</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", width: "25%" }}>NPH:</Text>
                            <Text style={{ fontSize: 16, width: "75%" }}>xxxxxxxxxxxxx</Text>
                        </View>
                    </View>
                    <ShowMoreButton />
                    <View style={{ marginBottom: 30 }} />

                    <Text style={{ marginBottom: 5, fontSize: 22, fontWeight: "600" }}>Mô tả sản phẩm</Text>
                    <View>
                        <LinearGradient
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                zIndex: 1
                            }}>
                        </LinearGradient>
                        <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptate, repellendus laborum tempora iure laudantium aperiam saepe veniam ipsam voluptatibus porro molestias corrupti perspiciatis obcaecati unde doloribus eveniet mollitia expedita.</Text>
                    </View>
                    <ShowMoreButton />
                    <TitleTabedFlatBooks title="Có thể bạn quan tâm" data={[
                        {
                            tabLabel: "Cùng thể loại",
                            tabData: books
                        },
                        {
                            tabLabel: "Cùng nhà phát hành",
                            tabData: books
                        }
                    ]} />
                </View>
            </ScrollView>
            <Button buttonStyle={{ backgroundColor: primaryColor, padding : 12 }}>Chọn mua</Button>
        </>
    )
}

export default BookDetail