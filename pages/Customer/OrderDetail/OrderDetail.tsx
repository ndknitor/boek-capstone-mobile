import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { paletteGray, paletteGreenBold, palettePink, primaryTint1, primaryTint4 } from '../../../utils/color';
import navigateRightBlack from "../../../assets/icons/navigate-right-black.png";
import ExpandToggleView from '../../../components/ExpandToggleView/ExpandToggleView';
import formatNumber from '../../../libs/functions/formatNumber';

function OrderDetail() {
  return (
    <ScrollView style={{
      backgroundColor: "white",
    }}>
      <View style={{
        borderBottomColor: primaryTint4,
        borderBottomWidth: 1,
        rowGap: 5,
        padding: 10
      }}>
        <Text style={{ fontSize: 16 }}>Mã đơn hàng</Text>
        <Text style={{ fontSize: 16, color: paletteGray }}>Giao hàng</Text>
      </View>
      <View style={{
        borderBottomColor: primaryTint4,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: "row"
      }}>
        <View style={{
          width: "15%"
        }}>

        </View>
        <View style={{
          //borderWidth: 1,
          width: "75%"
        }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Theo dõi đơn hàng</Text>
          <Text style={{ color: paletteGreenBold }}>Trạng thái đơn hàng</Text>
          <Text style={{ color: paletteGray }}>Ngày của trạng thái</Text>
        </View>
        <View style={{
          //borderWidth: 1,
          width: "10%",
          alignItems: "center",
          justifyContent: "flex-start"
        }}>
          <Image source={navigateRightBlack} style={{ width: 25, height: 25 }} resizeMode="contain" />
        </View>
      </View>
      <View style={{
        borderBottomColor: primaryTint4,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: "row"
      }}>
        <View style={{
          width: "15%"
        }}>

        </View>
        <View style={{
          //borderWidth: 1,
          width: "75%",
          rowGap: 5
        }}>
          <Text style={{ fontSize: 16 }}>Tên khách hàng</Text>
          <Text style={{ fontSize: 16, color: paletteGray }}>SĐT: 0000000000</Text>
          <Text style={{ fontSize: 16, color: paletteGray }}>Địa chỉ: kjesbfs</Text>
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
        </View>
      </ExpandToggleView>
      <View style={{
        borderBottomColor: primaryTint4,
        borderBottomWidth: 1,
        rowGap: 5,
        padding: 10
      }}>
        <Text style={{ fontSize: 16 }}>Phương thức thanh toán</Text>
        <Text style={{ color: paletteGray }}>Tiền mặt</Text>
      </View>
      <View style={{
        borderBottomColor: primaryTint4,
        borderBottomWidth: 1,
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
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 16 }}>Tổng tiền</Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Text style={{ fontSize: 16, color: paletteGreenBold }}>{formatNumber(100000)}đ</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 16 }}>Tích điểm</Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Text style={{ fontSize: 16 }}>{formatNumber(100000)}đ</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  infoText: {
    marginTop: 20
  },
});

export default OrderDetail