import React from 'react'
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { paletteGrayShade2, paletteGrayTint5, paletteGreen, paletteGreenBold, primaryTint4, primaryTint7 } from '../../../utils/color'
import useStaffOrdersPage from './StaffOrders.hook';
import image from "../../../assets/hsxv.webp";
import Paging from '../../../component/Paging/Paging';
import { range } from '../../../utils/format';
import avatar from "../../../assets/avatar.jpg";
import { mockBooks } from '../../../utils/mock';


function StaffOrders() {
  const orderBook = mockBooks.slice(0, 2);
  const hook = useStaffOrdersPage();
  return (
    <>
      {/* <HeaderSearchBar value={hook.input.search.value} onChangeText={hook.input.search.set} /> */}
      <ScrollView
        ref={hook.ref.scrollViewRef}
        style={{
          padding: 5,
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}>
        {
          range(0, 10).map(item =>
            <View style={{
              borderWidth: 1,
              borderRadius: 8,
              borderColor: primaryTint4,
              marginTop: 10,
              overflow: "hidden",
              height: 40 + 120 + 100 + (130 * 2) + 60
            }}>
              <View style={{
                overflow: "hidden",
                backgroundColor: paletteGreen,
                justifyContent: "center",
                width: "100%",
                padding: 5,
                paddingLeft: 15,
                height: 40
              }}>
                <Text style={{
                  color: paletteGreenBold,
                  fontSize: 15,
                  fontWeight: "500"
                }}>Giao hàng thành công</Text>
              </View>

              <View style={{
                //borderWidth: 1,
                flexDirection: "row",
                height: 120,
                borderBottomWidth: 1,
                borderBottomColor: primaryTint7,
                alignItems: "center"
              }}>
                <View style={{
                  //borderWidth: 1,
                  width: "40%",
                  height: "100%"
                }}>
                  <Image source={image} style={{ height: "100%", width: "100%" }} resizeMode="contain" />
                </View>

                <View style={{
                  //borderWidth: 1,
                  width: "60%",
                  padding: 5,
                  paddingLeft: 15
                }}>
                  <Text style={{
                    fontSize: 18,
                    fontWeight: "600",
                    marginBottom: 6
                  }}>Tri ân thầy cô 20/11</Text>
                  <Text style={{ marginBottom: 2 }}>Ngày bất đầu: 11/11/1111</Text>
                  <Text style={{ marginBottom: 2 }}>Ngày kết thúc: 11/11/1111</Text>
                </View>
              </View>

              <View style={{
                //borderWidth: 1,
                flexDirection: "row",
                height: 100,
                borderBottomWidth: 1,
                borderBottomColor: primaryTint7
              }}>
                <View style={{
                  //borderWidth: 1,
                  width: "70%",
                  height: "100%",
                  padding: 10
                }}>

                  <Text style={{
                    fontSize: 18,
                    fontWeight: "600",
                    marginBottom: 6
                  }}>Thông tin khách hàng</Text>
                  <Text style={styles.marginBot}>Email: ndkn@gmail.com</Text>
                  <Text style={styles.marginBot}>Địa chỉ: 122 ASDhu skdbjhsd</Text>
                </View>

                {/* <View style={{
                  //borderWidth: 1,
                  width: "30%",
                  padding: 5,
                  paddingLeft: 15,
                  justifyContent: "center"
                }}>
                  <View style={{
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}>
                    <View style={{
                      borderWidth: 1,
                      borderRadius: 999,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60
                    }}>
                      <Image source={avatar} style={{ height: 99, width: 99 }} resizeMode="cover" />
                    </View>
                  </View>
                </View> */}
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
                      <Text style={{ color: paletteGrayShade2 }}>{item.issuer.user.name}</Text>
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
                  {/* <Button
                                            onPress={() => navigate("OrderDetail")}
                                            buttonStyle={{
                                                height: "100%",
                                                backgroundColor: primaryTint1
                                            }}>Xem chi tiết</Button> */}
                </View>
              </View>

            </View>
          )
        }
        <View style={styles.marginBot}>
          <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
        </View>

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  marginBot: {
    marginBottom: 6
  }
});

export default StaffOrders