import React from 'react'
import { ScrollView, View, Image, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { paletteGray, paletteGrayLight, paletteGreen, paletteGreenBold, primaryColor, primaryTint1, primaryTint4, primaryTint7 } from '../../../utils/color'
import useStaffOrdersPage from './StaffOrders.hook';
import image from "../../../assets/hsxv.webp";
import addWhite from "../../../assets/icons/add-white.png";
import Paging from '../../../components/Paging/Paging';
import { Button } from '@rneui/base';
import SelectedChip from '../../../components/SeletedChip/SelectedChip';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FloatActionButton from '../../../components/FloatActionButton/FloatActionButton';
import range from '../../../libs/functions/range';
import OrderDetailDrawerLayout from '../../../components/OrderDetailDrawerLayout/OrderDetailDrawerLayout';

const Tab = createMaterialTopTabNavigator();

function StaffOrders() {
  return (
    <>
      <FloatActionButton bottom={70} right={10}>
        <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image source={addWhite} style={{ width: "50%", height: "50%" }} />
        </View>
      </FloatActionButton>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
          color: primaryColor,
          fontWeight: "500"
        },
        tabBarIndicatorStyle: {
          backgroundColor: primaryColor
        },
        swipeEnabled: false,
        lazy: true,
        lazyPlaceholder: () => <ActivityIndicator size="large" style={{ height: "100%" }} />
      }}>
        {/* <Tab.Screen options={{ title: "Tất cả" }} name="All" component={TabScreen} /> */}
        <Tab.Screen options={{ title: "Đơn giao" }} name="OnGoing" component={Content} />
        <Tab.Screen options={{ title: "Đơn nhận tại quầy" }} name="Upcoming" component={Content} />
      </Tab.Navigator>
    </>
  )
}

function Content() {
  const hook = useStaffOrdersPage();

  return (
    <OrderDetailDrawerLayout
      drawerRef={hook.ref.drawerLayoutRef}>
      <ScrollView
        ref={hook.ref.scrollViewRef}
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}>
        <FlatList
          style={{
            height: 50,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: paletteGray,
            justifyContent: "center",
            paddingLeft: 10
          }}
          horizontal
          data={["Đơn gì đó", "Đơn gì đó", "Đơn gì đó", "Đơn gì đó", "Đơn gì đó", "Đơn gì đó",]}
          renderItem={item =>
            <View style={{ height: "100%", justifyContent: "center", marginRight : 2 }}>
              <SelectedChip label={item.item} />
            </View>
          } />
        <View style={{ padding: 5 }}>
          {
            range(0, 10).map(item =>
              <View style={{
                borderWidth: 1.5,
                borderRadius: 8,
                borderColor: primaryTint4,
                marginTop: 20,
                overflow: "hidden"
              }}>
                <View style={{
                  //borderWidth: 1,
                  height: 120,
                  flexDirection: "row",
                  borderBottomWidth: 2,
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
                  borderBottomWidth: 2,
                  borderBottomColor: primaryTint7
                }}>
                  <View style={{
                    //borderWidth: 1,
                    width: "100%",
                    height: "100%",

                  }}>
                    <View style={{ padding: 10 }}>
                      <Text style={{
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 6
                      }}>Thông tin khách hàng</Text>
                    </View>

                    <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                      <View style={{ width: "50%" }}>
                        <Text >Email:</Text>
                      </View>
                      <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Text >ndkn@gmail.com</Text>
                      </View>
                    </View>

                    <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                      <View style={{ width: "50%" }}>
                        <Text >Họ và tên:</Text>
                      </View>
                      <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Text >Ngô Đình Khôi Nguyên</Text>
                      </View>
                    </View>

                    <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                      <View style={{ width: "50%" }}>
                        <Text >Địa chỉ:</Text>
                      </View>
                      <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Text >122 ASDhu skdbjhsd</Text>
                      </View>
                    </View>

                    <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                      <View style={{ width: "50%" }}>
                        <Text >Số điện thoại:</Text>
                      </View>
                      <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Text >069696969</Text>
                      </View>
                    </View>

                  </View>
                </View>

                <View style={{
                  //borderWidth: 1,
                  height: 200
                }}>
                  <View style={{
                    //borderWidth: 1,
                    padding: 10,
                    height: "30%"
                  }}>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 6
                    }}>Thông tin đơn hàng</Text>
                  </View>


                  <View style={{
                    height: "60%",
                    flexDirection: "row"
                  }}>
                    <View style={{
                      //borderWidth: 1,
                      width: "100%",
                      justifyContent: "center"
                    }}>

                      <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                        <View style={{ width: "50%" }}>
                          <Text >Tổng cộng:</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                          <Text >69.000 đ</Text>
                        </View>
                      </View>

                      <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                        <View style={{ width: "50%" }}>
                          <Text >Phí vận chuyển:</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                          <Text >69.000 đ</Text>
                        </View>
                      </View>

                      <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                        <View style={{ width: "50%" }}>
                          <Text >Giảm giá:</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                          <Text >69.000 đ</Text>
                        </View>
                      </View>

                      <View style={{ padding: 8, flexDirection: "row", borderColor: paletteGrayLight, borderTopWidth: 1, width: "100%" }}>
                        <View style={{ width: "50%" }}>
                          <Text style={{ fontSize: 16, fontWeight: "600" }}>Thành tiền:</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                          <Text style={{ fontSize: 16, fontWeight: "600" }} >69.000 đ</Text>
                        </View>
                      </View>

                    </View>
                  </View>
                </View>

                <View style={{
                  overflow: "hidden",
                  backgroundColor: paletteGreen,
                  width: "100%",
                  padding: 5,
                  paddingLeft: 15,
                  height: 60,
                  flexDirection: "row"
                }}>
                  <View style={{
                    width: "65%",
                    justifyContent: "center"
                  }}>
                    <Text style={{
                      color: paletteGreenBold,
                      fontSize: 15,
                      fontWeight: "500"
                    }}>Giao hàng thành công</Text>
                  </View>
                  <View style={{ width: "35%", padding: 5 }}>
                    <Button
                      onPress={hook.event.onOrderDetailPress}
                      buttonStyle={{
                        height: "100%",
                        backgroundColor: primaryTint1
                      }}>Xem chi tiết</Button>
                  </View>
                </View>
              </View>
            )
          }
        </View>
        <View style={{ marginBottom: 20 }}>
          <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
        </View>

      </ScrollView>
    </OrderDetailDrawerLayout>
  );
}

const styles = StyleSheet.create({
  marginBot: {
    marginBottom: 6
  }
});

export default StaffOrders