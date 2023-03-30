import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { ActivityIndicator, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import { Text } from '@react-native-material/core';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import PageLoader from '../../../components/PageLoader/PageLoader';
import StickyHeaderSearchBar from '../../../components/StickyHeaderSearchBar/StickyHeaderSearchBar';
import { paletteGray, palettePink, paletteRed, primaryColor, primaryTint1, primaryTint4 } from '../../../utils/color';
import sortBlack from "../../../assets/icons/sort-black.png";
import { useCreateChooseProductsOrderBooksPage, useCreateChooseProductsOrderSelectedBooksPage } from './CreateChooseProductsOrder.hook';
import DrawerLayout from 'react-native-drawer-layout';
import ExpandToggleView from '../../../components/ExpandToggleView/ExpandToggleView';
import SelectedLabel from '../../../components/SelectedLabel/SelectedLabel';
import { BookFormat } from '../../../objects/enums/BookFormat';
import { Button, CheckBox } from '@rneui/base';
import filterBlack from "../../../assets/icons/filter-black.png";
import SeletedBookCard from '../../../components/SeletedBookCard/SeletedBookCard';
import { mockBooks } from '../../../utils/mock';
import range from '../../../libs/functions/range';
import Paging from '../../../components/Paging/Paging';
import Shadow from '../../../components/Shadow/Shadow';
import Close from '../../../assets/SvgComponents/Close';
import truncateString from '../../../libs/functions/truncateString';
import useAppContext from '../../../context/Context';
import formatNumber from '../../../libs/functions/formatNumber';
import useRouter from '../../../libs/hook/useRouter';


const Tab = createMaterialTopTabNavigator();

function CreateChooseProductsOrder() {
  return (
    <Tab.Navigator
      //initialRouteName={props.route.params && (props.route.params as { tab: string }).tab || undefined}
      screenOptions={{
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
      <Tab.Screen options={{ title: "Sách" }} name="Books" component={Books} />
      <Tab.Screen options={{ title: "Sách đã chọn" }} name="BookFairs" component={SeletedBooks} />
    </Tab.Navigator>
  )
}
function Books() {
  const { staffCart } = useAppContext();
  const { push } = useRouter();
  const hook = useCreateChooseProductsOrderBooksPage();
  return (
    <>
      <PageLoader
        zIndex={1}
        loading={hook.ui.loading}
      />
      <DrawerLayout
        ref={hook.ref.filterBooksDrawerRef}
        drawerWidth={280}
        drawerPosition={"left"}
        drawerBackgroundColor={"white"}
        renderNavigationView={
          () =>
            <ScrollView>
              <ExpandToggleView label="Thể loại"
                onExpand={hook.event.onGenreExpand}>
                {
                  hook.data.genres.map(item =>
                    <SelectedLabel
                      onPress={() => hook.event.onGenresSeletedToggle(item.id)}
                      seleted={hook.input.seletedGenre.filter((id) => item.id == id).length > 0}
                      label={item.name}
                    />
                  )

                }
              </ExpandToggleView>
              <ExpandToggleView label="Định dạng">
                {
                  Object.values(BookFormat).map(item =>
                    typeof (item) == "number" &&
                    <SelectedLabel
                      onPress={() => hook.event.onFormatsToggle(item)}
                      seleted={hook.input.selectedFormats.filter((id) => item == id).length > 0}
                      label={BookFormat.toString(item)}
                    />
                  )
                }
              </ExpandToggleView>
              <ExpandToggleView label="Ngôn ngữ"
                onExpand={hook.event.onLanguageExpand}>
                {
                  hook.data.languages.map(item =>
                    <SelectedLabel
                      onPress={() => hook.event.onLanguageSeletedToggle(item)}
                      label={item}
                      seleted={hook.input.selectedLanguage.filter((id) => item == id).length > 0}
                    />
                  )
                }
              </ExpandToggleView>
              <ExpandToggleView label="Nhà phát hành"
                onExpand={hook.event.onIssuerExpand}>
                {
                  hook.data.issuers.map(item =>
                    <SelectedLabel
                      onPress={() => hook.event.onIssuerSeletedToggle(item.id)}
                      label={item.name}
                      seleted={hook.input.seletedIssuer.filter((id) => item.id == id).length > 0}
                    />
                  )
                }
              </ExpandToggleView>
              <ExpandToggleView label="Tác giả"
                onExpand={hook.event.onAuthorExpand}>
                {
                  hook.data.authors.map(item =>
                    <SelectedLabel
                      onPress={() => hook.event.onAuthorSeletedToggle(item.id as number)}
                      seleted={hook.input.seletedAuthor.filter((id) => item.id == id).length > 0}
                      label={item.name}
                    />
                  )
                }
              </ExpandToggleView>
              <ExpandToggleView label="Nhà xuất bản"
                onExpand={hook.event.onPublisherExpand}>
                {
                  hook.data.publishers?.map(item =>
                    <SelectedLabel
                      onPress={() => hook.event.onPublisherSeletedToggle(item.id as number)}
                      seleted={hook.input.selectedPublisher.filter((id) => item.id == id).length > 0}
                      label={item.name} />
                  )
                }
              </ExpandToggleView>
              <View style={{
                //borderWidth: 1,
                flexDirection: "row",
                paddingTop: 25,
                paddingBottom: 25
              }}>

                <View style={{ width: "50%", padding: 10 }}>
                  <Button
                    onPress={hook.event.onReset}
                    buttonStyle={{ backgroundColor: paletteRed }}>Thiết lập lại</Button>
                </View>
                <View style={{ width: "50%", padding: 10 }}>
                  <Button
                    onPress={hook.event.onSearchSubmit}
                    buttonStyle={{ backgroundColor: primaryTint1 }}>Lọc</Button>
                </View>
              </View>
            </ScrollView>
        }>
        <ScrollView
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
          ref={hook.ref.booksScrollViewRef}
          scrollEnabled={!hook.ui.loading}
          style={{
            backgroundColor: "white",
          }}>
          <StickyHeaderSearchBar
            onChangeText={hook.input.search.set}
            value={hook.input.search.value}
            onSubmit={hook.event.onSearchSubmit} />
          <View style={{
            marginBottom: 5,
            width: "100%",
            height: 35,
            flexDirection: "row"
          }}>
            <TouchableOpacity
              onPress={() => hook.ref.filterBooksDrawerRef.current?.openDrawer()}
              style={{
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderRightColor: primaryTint1,
              }}>
              <Image source={filterBlack} resizeMode="center" style={{ width: 16 }} />
              <Text>Lọc</Text>
            </TouchableOpacity>
            <View style={{ width: "50%" }}>
              <Menu>
                <MenuTrigger style={{ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                  <Image source={sortBlack} resizeMode="center" style={{ width: 16 }} />
                  <Text>Sắp xếp</Text>
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={{ padding: 7 }}>
                  <MenuOption onSelect={() => hook.input.sort.set("")}>
                    <Text style={{ fontSize: 16 }}>Mặc định</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => hook.input.sort.set("")}>
                    <Text style={{ fontSize: 16 }}>Giảm giá nhiều</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => hook.input.sort.set("")}>
                    <Text style={{ fontSize: 16 }}>Giá thấp dần</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => hook.input.sort.set("")} >
                    <Text>
                      <Text style={{ fontSize: 16 }}>Giá cao dần</Text>
                    </Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>
          <View style={{ padding: 10, flexDirection: "row", flexWrap: "wrap" }}>
            {
              hook.data.books && hook.data.books.map(item =>
                <View>
                  <SeletedBookCard
                    onPress={() => hook.event.onBookSeleted(item)}
                    seleted={staffCart.find(p => item.id == p.id) != undefined}
                    book={item} />
                </View>
              )
            }

          </View>
          <View style={{ marginBottom: 20 }}>
            {/* <Paging maxPage={hook.paging.maxPage} currentPage={hook.paging.currentPage} onPageNavigation={hook.paging.onPageNavigation} /> */}
          </View>
        </ScrollView>
      </DrawerLayout>
      <Shadow
        style={{
          display: staffCart.length > 0 ? "flex" : "none",
          backgroundColor: "white",
          height: "10%",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Button
          onPress={() => push("CreateConfirmOrder")}
          buttonStyle={{
            backgroundColor: primaryTint1,
            width: 150,
            height: 50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24
          }}>
          Tiếp theo
        </Button>
      </Shadow>
    </>
  )
}
function SeletedBooks() {
  const { staffCart, setStaffCart } = useAppContext();
  const hook = useCreateChooseProductsOrderSelectedBooksPage();
  return (
    <>
      <PageLoader
        zIndex={1}
        loading={hook.ui.loading}
      />
      <ScrollView
        style={{
          backgroundColor: "white",
          height: "100%"
        }}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll>

        {
          staffCart.map(product =>
            <View style={{ alignItems: "center" }}>
              <View style={{
                height: 220,
                borderColor: paletteGray,
                borderWidth: 1,
                borderTopWidth: 0,
              }}>
                <View style={{
                  height: "70%",
                  flexDirection: "row",
                  marginTop: "5%"
                }}>
                  <View style={{
                    width: "15%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <CheckBox
                      checked
                      center
                      containerStyle={{
                        backgroundColor: "transparent",
                        alignItems: "center"
                      }}
                    />
                  </View>
                  <View style={{
                    width: "25%",
                    height: "100%",
                    borderWidth: 1,
                    borderColor: primaryTint4
                  }}>
                    <Image source={{ uri: product.product.imageUrl }} style={{ height: "100%" }} resizeMode="cover" />
                  </View>
                  <View style={{
                    //borderWidth: 1,
                    width: "50%",
                    height: "100%",
                    padding: 10,
                    justifyContent: "center"
                  }}>
                    <Text style={{
                      fontSize: 20
                    }}>{truncateString(product.product.title, 6)}</Text>
                    <Text style={{ paddingTop: 2, color: palettePink, fontSize: 18, fontWeight: "700" }}>{formatNumber(product.product.salePrice)}đ     {product.product.discount && <Text style={{ textDecorationLine: "line-through", fontSize: 16, color: paletteGray }}>{formatNumber(product.product.book?.coverPrice)}đ</Text>}</Text>
                    <View style={{
                      flexDirection: "row",
                      height: 20,
                      paddingTop: 2
                    }}>
                      {/* <NumericInput
                                            minValue={1}
                                            totalWidth={90}
                                            value={product.quantity}
                                            onChange={(value) => hook.event.onQuantityChange(product, value)}
                                        /> */}
                    </View>
                  </View>
                  <View style={{
                    //borderWidth: 1,
                    width: "10%",
                    alignItems: 'center',
                    justifyContent: "center"
                  }}>
                    <TouchableOpacity
                    //onPress={() => removeFromCart(product.id)}
                    >
                      <Close width={25} height={25} color={paletteRed} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{
                  //borderWidth : 1,
                  flexDirection: "row",
                  alignItems: "center"
                }}>
                  {
                    product.product.withPdf &&
                    <CheckBox
                      title="PDF"
                      checked
                      center
                      containerStyle={{
                        backgroundColor: "transparent",
                        alignItems: "flex-start"
                      }}
                    />
                  }
                  {
                    product.product.withAudio &&
                    <CheckBox
                      title="Audio"
                      checked
                      center
                      containerStyle={{ backgroundColor: "transparent", alignItems: "flex-start" }} />
                  }
                </View>
              </View>
            </View>
          )
        }

      </ScrollView>

    </>
  )
}

export default CreateChooseProductsOrder