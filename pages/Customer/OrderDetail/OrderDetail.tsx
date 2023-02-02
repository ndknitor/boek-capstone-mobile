import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { paletteGray, paletteGrayShade2, paletteGreen, paletteGreenBold } from '../../../utils/color';
import { mockBooks } from '../../../utils/mock';

function OrderDetail() {
  const orders = mockBooks.slice(0, 3);
  return (
    <ScrollView style={{
      backgroundColor: "white",
    }}>
      {
        orders.map(item =>
          <View style={{
            borderBottomColor: paletteGray,
            borderBottomWidth: 1,
            height: 200,
            flexDirection: "row"
          }}>
            <View style={{
              //borderWidth: 1,
              height: "100%",
              width: "40%"
            }}>
              <Image source={{ uri: item.imageUrl }} resizeMode="contain" style={{ height: "100%" }} />
            </View>
            <View style={{
              //borderWidth: 1,
              width: "60%"
            }}>
              <View style={{
                //borderWidth: 1,
                height: "100%",
                justifyContent: "center"
              }}>
                <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
                <Text style={{ marginBottom: 5, color: paletteGrayShade2 }}>{item.issuer.user.name}</Text>
                <Text style={{ marginBottom: 5, }}>Số lượng : 2</Text>
                <Text style={{ marginBottom: 5 }}>Đơn giá : 69.000 đ</Text>
                <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}>Tổng : 138.000 đ</Text>
              </View>
            </View>
          </View>
        )
      }
      <View style={{
        //borderWidth: 1,
        padding: 10
      }}>
        <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: "600" }}>Tổng tiền: 69.000.000 đ</Text>
        <View style={{ marginBottom: 10, width: "50%", height: 40 }}>
          <View style={{
            backgroundColor: paletteGreen,
            justifyContent: "center",
            height: "100%"
          }}>
            <Text style={{
              color: paletteGreenBold,
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center"
            }}>Giao hàng thành công</Text>
          </View>
        </View>
        <View
          style={{
            //borderWidth: 1
          }}>
          <Text style={styles.infoText}>Địa chỉ: sdjfnj k ksd fjskfs djfk k</Text>
          <Text style={styles.infoText}>Hình thức thanh toán: Offline</Text>
          <Text style={styles.infoText}>Ngày đặt hàng: 11/11/1111</Text>
          <Text style={styles.infoText}>Ngày giao hàng: 11/11/1111</Text>
          <Text style={styles.infoText}>Ngày nhận hàng: 11/11/1111</Text>
          <Text style={styles.infoText}>Ghi chú: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum quidem velit molestias culpa, totam ad! Molestias, quasi quia, neque obcaecati cum ipsam vero dignissimos doloremque aut accusamus recusandae suscipit?</Text>
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