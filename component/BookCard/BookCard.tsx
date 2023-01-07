import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { paletteGray, palettePink, shade1, shade2, shade7 } from '../../utils/color';
import image from "../../assets/LBC828K4.webp";
import avatar from "../../assets/avatar.jpg";
import shoppingBasketWhite from "../../assets/icons/shopping-basket-white.png";
import { Book } from '../../objects/entities/Book';
import { formatNumber } from '../../utils/format';
import useRouter from '../../libs/hook/useRouter';
interface BookCardProps {
  book: Book;
}
function BookCard({ book }: BookCardProps) {
  const { navigate } = useRouter();
  return (
    <View
      style={{
        width: 195,
        height: 260,
        alignItems: "center",
        justifyContent: "center"
      }}>
      <TouchableOpacity
        onPress={() => navigate("BookDetail")}
        style={{
          borderColor: shade7,
          borderWidth: 1,
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
              width: "95%"
            }}>
            <Image
              source={{ uri: book.imageUrl }}
              resizeMode="cover"
              style={{ height: "100%", width: "100%" }} />
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
              <Text style={{ fontSize: 16, fontWeight: "600" }}>Doraemon</Text>
            </View>
            <View style={{ height: "70%", width: "100%", flexDirection: "row" }}>
              <View style={{ width: "60%", height: "100%", justifyContent: "flex-start", paddingLeft: 2 }}>
                <Text style={{ color: palettePink, fontSize: 18, fontWeight: "700" }}>69.000đ</Text>
                <Text style={{ color: paletteGray, fontSize: 16, textDecorationLine: "line-through" }}>69.000đ</Text>
              </View>
              <View style={{ width: "40%", height: "100%", alignItems: "flex-start", justifyContent: "flex-start" }}>
                <View style={{
                  width: "90%",
                  backgroundColor: palettePink,
                  alignItems: "center"
                }}>
                  <Text style={{ color: "white", fontSize: 18, padding: 5 }}>-69%</Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    </View>
    // <View style={{ borderWidth: 1, borderColor: shade7, borderRadius: 8, height: 480, padding: 10 }}>
    //   <TouchableOpacity style={{ width: "100%", height: "35%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
    //     <Image style={{ height: "100%", width: "100%" }} source={{ uri: book.imageUrl }} resizeMode='cover' />
    //   </TouchableOpacity>

    //   <View style={{ height: " 65%" }}>
    //     <TouchableOpacity style={{ height: "20%", flexDirection: "row" }}>
    //       <View style={{ width: "15%", alignItems: "center", justifyContent: "center" }}>
    //         <View style={{ alignItems: "center", justifyContent: "center", width: 40, height: 40 }}>
    //           <Image
    //             source={{ uri: book.issuer.imageUrl }}
    //             resizeMode="cover"
    //             style={{ height: "100%", width: "100%", overflow: "hidden", borderRadius: 9999 }}
    //           />
    //         </View>
    //       </View>
    //       <View style={{ width: "85%", justifyContent: "center" }}>
    //         <Text style={{ fontSize: 16, fontWeight: "500" }}>{book.name}</Text>
    //         <Text style={{ fontWeight: "500" }}>{book.issuer.name}</Text>
    //       </View>
    //     </TouchableOpacity>

    //     <View style={{ height: "10%", justifyContent: "center" }}>
    //       <View style={{ backgroundColor: paletteGreen, alignItems: "center", justifyContent: "center", width: "30%", height: "75%", borderRadius: 24 }}>
    //         <Text style={{ color: paletteGreenBold, fontSize: 15, fontWeight: "500" }}>{formatNumber(book.coverPrice)} đ</Text>
    //       </View>
    //     </View>

    //     <View style={{ height: "55%", padding: 10 }}>
    //       <View style={{ height: "100%", justifyContent: "center" }}>
    //         <Text style={{ paddingBottom: 6, fontSize: 14 }}>Xuất bản: {book.publisher && book.publisher.name}</Text>
    //         <Text style={{ paddingBottom: 6, fontSize: 14 }}>Tác giả: {book.bookAuthors.map((item, index) => `${item.author.name}${index + 1 < book.bookAuthors.length && ", "}`)}</Text>
    //         <Text style={{ paddingBottom: 6, fontSize: 14 }}>Thể loại: {book.genre.name}</Text>
    //         <Text style={{ paddingBottom: 6, fontSize: 14 }}>Ngôn ngữ: {book.language}</Text>
    //         <Text style={{ paddingBottom: 6, fontSize: 14 }}>Xuất bản năm {book.releasedYear}</Text>
    //       </View>
    //     </View>
    //     <View style={{ height: "25%" }}>
    //       <Button buttonStyle={{ backgroundColor: shade2, borderRadius: 8 }}>
    //         <Image style={{ height: 20, width: 20, marginRight: 8 }} source={shoppingBasketWhite} />
    //         Thêm vào giỏ hàng
    //       </Button>
    //     </View>
    //   </View>
    // </View>
  )
}

export default BookCard