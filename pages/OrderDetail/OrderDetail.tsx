import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { paletteGray } from '../../utils/color';
import { books } from '../../utils/mock';

function OrderDetail() {
  const orders = books.slice(0, 3);
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
              width: "60%",
              padding: 6
            }}>
              <View style={{ borderWidth: 1, height: "100%" }}>

              </View>
            </View>
          </View>
        )
      }
      <View style={{
        //borderWidth: 1,
        padding: 10
      }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Thông tin đơn hàng</Text>
        <Text style={styles.infoText}>Địa chỉ: sdjfnj k ksd fjskfs djfk k</Text>
        <Text style={styles.infoText}>Hình thức thanh toán: Offline</Text>
        <Text style={styles.infoText}>Ngày đặt hàng: 11/11/1111</Text>
        <Text style={styles.infoText}>Ngày giao hàng: 11/11/1111</Text>
        <Text style={styles.infoText}>Ngày nhận hàng: 11/11/1111</Text>
        <Text style={styles.infoText}>Ghi chú: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum quidem velit molestias culpa, totam ad! Molestias, quasi quia, neque obcaecati cum ipsam vero dignissimos doloremque aut accusamus recusandae suscipit?</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  infoText: {
    marginTop: 20,
    fontSize: 16
  }
});

export default OrderDetail