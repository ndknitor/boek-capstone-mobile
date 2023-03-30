import React from 'react'
import { ScrollView, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Text } from '@react-native-material/core'
import { paletteGray, paletteGrayLight, paletteGrayShade2, paletteGreen, paletteGreenBold, paletteGreenShade1, palettePink, primaryTint1, primaryTint4, primaryTint7 } from '../../../utils/color'
import useStaffOrdersPage from './StaffOrders.hook';
import image from "../../../assets/hsxv.webp";
import addWhite from "../../../assets/icons/add-white.png";
import Paging from '../../../components/Paging/Paging';
import { Button } from '@rneui/base';
import SelectedChip from '../../../components/SeletedChip/SelectedChip';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FloatActionButton from '../../../components/FloatActionButton/FloatActionButton';
import range from '../../../libs/functions/range';
import useRouter from '../../../libs/hook/useRouter';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

const Tab = createMaterialTopTabNavigator();

function StaffOrders() {
  const hook = useStaffOrdersPage();
  const { push } = useRouter();
  return (
    <>
      <FloatActionButton bottom={70} right={10}>
        <Menu>
          <MenuTrigger>
            <View style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Image source={addWhite} style={{ width: "50%", height: "50%" }} />
            </View>
          </MenuTrigger>
          <MenuOptions customStyles={{ optionsContainer: { width: "55%" } }} optionsContainerStyle={{ padding: 10 }}>
            <MenuOption
              style={{
                borderBottomWidth: 1,
                borderBottomColor: paletteGray,
                padding: 10
              }}
              //onSelect={() => push("CreateChooseCampaignOrder")}
              >
              <Text style={{ fontSize: 17 }}>Quét mã QR đơn hàng</Text>
            </MenuOption>
            <MenuOption
              style={{
                padding: 10
              }}
              onSelect={() => push("CreateChooseCampaignOrder")}>
              <Text style={{ fontSize: 17 }}>Tạo đơn hàng</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </FloatActionButton>
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
          data={["Tất cả", "Đang xử lý", "Chờ nhận hàng", "Đã nhận", "Hủy"]}
          renderItem={item =>
            <View style={{ height: "100%", justifyContent: "center", marginRight: 2 }}>
              <SelectedChip label={item.item} />
            </View>
          } />
        <View style={{ padding: 5 }}>
          {
            range(0, 10).map(item =>
              <View
                style={{
                  backgroundColor: "white",
                  borderBottomWidth: 1,
                  borderColor: paletteGray,
                  padding: 10
                }}>
                <View style={{ height: 40, flexDirection: "row" }}>
                  <View style={{ width: "60%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 15 }}>{"Mã đơn hàng"}</Text>
                  </View>
                  <View style={{ width: "40%" }}>
                    <View style={{
                      height: "90%",
                      backgroundColor: paletteGreenShade1,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 12,
                      },
                      shadowOpacity: 0.58,
                      shadowRadius: 16.00,
                      elevation: 8
                    }}>
                      <Text style={{ fontSize: 15, color: "white" }}>{"Giao thành công"}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  //onPress={() => push("OrderDetail")}
                  >
                  <Text style={{ fontSize: 14, color: paletteGray }}>{"Ngày đặt hàng"}</Text>
                  <View style={{
                    //borderWidth: 1,
                    height: 130,
                    padding: 5,
                    flexDirection: "row"
                  }}>
                    <View style={{
                      //borderWidth: 1,
                      height: "100%",
                      width: "25%",
                      flexDirection: "row"
                    }}>
                      <Image
                        source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/8a/c3/a9/733444596bdb38042ee6c28634624ee5.jpg" }}
                        resizeMode="contain"
                        style={{ width: "100%" }} />
                    </View>
                    <View style={{
                      //borderWidth: 1,
                      width: "45%",
                      justifyContent: "center"
                    }}>
                      <Text style={{ marginBottom: "2%", color: paletteGrayShade2 }}>BIZBOOK</Text>
                      <Text style={{ marginBottom: "2%", fontSize: 16, fontWeight: "600" }}>Thao túng thị trường rau sạch</Text>
                      <Text>SL : x2</Text>
                    </View>
                    <View style={{ width: "30%", justifyContent: "center", alignItems: "flex-end" }}>
                      <Text style={{ fontSize: 18, color: palettePink }}>69.000đ</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={{
                  //borderWidth: 1,
                  height: 60,
                  padding: 7,
                  flexDirection: "row"
                }}>
                  <View style={{ width: "40%" }}>
                    <Text style={{ color: paletteGrayShade2, fontSize: 15 }}>Tên hội sách</Text>
                  </View>
                  <View style={{ width: "60%", alignItems: "flex-end", justifyContent: "center" }}>
                    <Button
                      //onPress={hook.event.onOrderSubmit}
                      buttonStyle={{ backgroundColor: palettePink }}>Thanh toán</Button>
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
    </>
  )
}

const styles = StyleSheet.create({
  marginBot: {
    marginBottom: 6
  }
});

export default StaffOrders