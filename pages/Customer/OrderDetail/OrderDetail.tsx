import React from 'react'
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Text } from "@react-native-material/core";
import { paletteGray, paletteGreenBold, paletteOrange, palettePink, primaryTint1, primaryTint4 } from '../../../utils/color';
import navigateRightBlack from "../../../assets/icons/navigate-right-black.png";
import ExpandToggleView from '../../../components/ExpandToggleView/ExpandToggleView';
import formatNumber from '../../../libs/functions/formatNumber';
import BarCode from '../../../assets/SvgComponents/BarCode';
import packageBlack from "../../../assets/icons/package-black.png";
import Place from '../../../assets/SvgComponents/Place';
import useRouter from '../../../libs/hook/useRouter';
import { Button } from '@rneui/base';
import LayoutModal from '../../../components/LayoutModal/LayoutModal';
import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import useOrderDetailPage from './OrderDetail.hook';

function OrderDetail(props: StackScreenProps<ParamListBase>) {
  const { push } = useRouter();
  const hook = useOrderDetailPage(props);
  return (
    <>
      <LayoutModal visible={hook.ui.infoModalVisible} onClose={() => hook.ui.setInfoModalVisible(!hook.ui.infoModalVisible)}>
        <Pressable
          onPress={() => hook.ui.setInfoModalVisible(false)}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <View style={{
            backgroundColor: "white",
            borderRadius: 24,
            width: "95%",
            height: "35%",
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
            rowGap: 15,
            justifyContent: "center"
          }}>
            <Text style={{ fontSize: 16 }}>
              • NPH sẽ phụ trách giao hàng đến địa chỉ của
              bạn.
            </Text>
            <Text style={{ fontSize: 16 }}>
              • Phí vận chuyển của đơn phụ thuộc vào nội
              thành hay ngoại thành đối với các nơi hội
              sách đang tổ chức {"\n"}
              o Nội thành: 15,000 đ {"\n"}
              o Ngoại thành: 30,000 đ
            </Text>
            <Text style={{ fontSize: 16 }}>
              • Lưu ý: Boek không chịu trách nhiệm về đơn
              đổi trả của khách hàng. Xin liên hệ NPH về
              vấn đề này.
            </Text>
          </View>
        </Pressable>
      </LayoutModal>
      <ScrollView style={{
        backgroundColor: "white",
      }}>
        <View style={{
          borderBottomColor: primaryTint4,
          borderBottomWidth: 1,
          flexDirection: "row"
        }}>
          <View style={{
            //borderWidth: 1,
            width: "15%",
            alignItems: "center",
            paddingTop: 2
          }}>
            <BarCode width={30} height={30} />
          </View>
          <View style={{
            rowGap: 5,
            padding: 10
          }}>
            <Text style={{ fontSize: 16 }}>Mã đơn hàng</Text>
            <Text style={{ fontSize: 16, color: paletteGray }}>Giao hàng</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => push("TrackOrder")}
          style={{
            borderBottomColor: primaryTint4,
            borderBottomWidth: 1,
            padding: 10,
            flexDirection: "row"
          }}>
          <View style={{
            //borderWidth: 1,
            width: "15%",
          }}>
            <Image source={packageBlack} style={{ width: 35, height: 35 }} />
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
        </TouchableOpacity>
        <View style={{
          borderBottomColor: primaryTint4,
          borderBottomWidth: 1,
          padding: 10,
          flexDirection: "row"
        }}>
          <View style={{
            width: "15%"
          }}>
            <Place width={50} height={50} />
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
              <Text style={{ fontSize: 16, color: palettePink }}>Tổng tiền</Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 16, color: paletteGreenBold }}>{formatNumber(100000)}đ</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text style={{ fontSize: 16, color: palettePink }}>Tích điểm</Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 16, color: paletteOrange }}>{formatNumber(100000)}đ</Text>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Button
              onPress={hook.event.onOrderSubmit}
              buttonStyle={{ marginTop: 10, width: 120, backgroundColor: palettePink }}>Thanh toán</Button>
          </View>

        </View>
      </ScrollView>
    </>

  )
}
const styles = StyleSheet.create({
  infoText: {
    marginTop: 20
  },
});

export default OrderDetail