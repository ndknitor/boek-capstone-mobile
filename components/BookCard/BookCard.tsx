import React from 'react'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import { paletteGray, palettePink, primaryTint7 } from '../../utils/color';;
import useRouter from '../../libs/hook/useRouter';
import { MobileBookProductViewModel } from '../../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel';
import formatNumber from '../../libs/functions/formatNumber';
import { MobileBookProductsViewModel } from '../../objects/viewmodels/BookProduct/Mobile/MobileBookProductsViewModel';
interface BookCardProps {
  book: MobileBookProductViewModel | MobileBookProductsViewModel;
}
function BookCard({ book }: BookCardProps) {
  const { push } = useRouter();
  return (
    <View
      style={{
        width: 195,
        height: 240,
        alignItems: "center",
        justifyContent: "center"
      }}>
      <TouchableOpacity
        onPress={() => push("BookDetail", { bookId: book.id })}
        style={{
          borderColor: primaryTint7,
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
              <Text style={{ fontSize: 16, fontWeight: "600" }}>{book.title || ""}</Text>
            </View>
            <View style={{ height: "70%", width: "100%", flexDirection: "row" }}>
              <View style={{ width: "60%", height: "100%", justifyContent: "center", paddingLeft: 2 }}>
                <Text style={{ color: palettePink, fontSize: 18, fontWeight: "700" }}>{formatNumber(book.salePrice)}đ</Text>
                {
                  book.discount ?
                    <Text style={{ color: paletteGray, fontSize: 16, textDecorationLine: "line-through" }}>{formatNumber(book.book?.coverPrice)}đ</Text>
                    :
                    null
                }
              </View>
              <View style={{ width: "40%", height: "100%", alignItems: "flex-start", justifyContent: "flex-start" }}>
                {
                  book.discount ?
                    <View style={{
                      width: "90%",
                      backgroundColor: palettePink,
                      alignItems: "center"
                    }}>
                      <Text style={{ color: "white", fontSize: 18, padding: 5 }}>-{book.discount}%</Text>
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

export default BookCard