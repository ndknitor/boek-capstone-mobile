import { View, ScrollView, ActivityIndicator, Text, Image, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren, useContext, useEffect, } from 'react';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { useBookFairsPage, useBooksPage } from './Search.hook';
import DrawerLayout from 'react-native-drawer-layout';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { ParamListBase } from '@react-navigation/native';
import { Button } from '@rneui/base';
import filterBlack from "../../../assets/icons/filter-black.png";
import sortBlack from "../../../assets/icons/sort-black.png";
import HeaderSearchBar from '../../../components/HeaderSearchBar/HeaderSearchBar';
import { paletteRed, primaryColor, primaryTint1, primaryTint10 } from '../../../utils/color';
import ExpandToggleView from '../../../components/ExpandToggleView/ExpandToggleView';
import SelectedLabel from '../../../components/SelectedLabel/SelectedLabel';
import BookCard from '../../../components/BookCard/BookCard';
import Paging from '../../../components/Paging/Paging';
import DateTimePickerInput from '../../../components/DateTimePickerInput/DateTimePickerInput';
import BookFairCard from '../../../components/BookFairCard/BookFairCard';
import PageLoader from '../../../components/PageLoader/PageLoader';
import { BookFormat } from '../../../objects/enums/BookFormat';
import { GeoLocate } from '../../../objects/enums/GeoLocate';
import { CampaignFormat } from '../../../objects/enums/CampaignFormat';
import { SearchPageContext, SearchPageContextProvider } from '../../../components/SearchContextProvider/SearchContextProvider';
import useAppContext from '../../../context/Context';

const Tab = createMaterialTopTabNavigator();

export interface SearchProps {

}
function Search(props: SearchProps) {
    return (
        <SearchPageContextProvider>
            <Content />
        </SearchPageContextProvider>
    )
}
function Content() {
    const context = useContext(SearchPageContext);
    return (
        <>
            <HeaderSearchBar onChangeText={context.setSearchValue} value={context.searchValue} />
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
                <Tab.Screen options={{ title: "Sách" }} name="Books" component={Books} />
                <Tab.Screen options={{ title: "Hội sách" }} name="BookFairs" component={BookFairs} />
            </Tab.Navigator>
        </>
    );
}

function Books(props: MaterialTopTabScreenProps<ParamListBase>) {
    const hook = useBooksPage(props);
    return (
        <>
            <PageLoader loading={hook.loading} />
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
                    ref={hook.ref.booksScrollViewRef}
                    scrollEnabled={!hook.loading}
                    style={{
                        backgroundColor: "white",
                    }}>
                    <View style={{
                        marginBottom: 5,
                        width: "100%",
                        height: 35,
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity
                            onPress={() => hook.ref.filterBooksDrawerRef.current?.openDrawer()}
                            style={{ flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "center", borderRightColor: primaryTint1 }}>
                            <Image source={filterBlack} resizeMode="center" style={{ width: 16 }} />
                            <Text>Lọc</Text>
                        </TouchableOpacity>
                        <View style={{ width: "50%" }}>
                            <Menu >
                                <MenuTrigger style={{ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                                    <Image source={sortBlack} resizeMode="center" style={{ width: 16 }} />
                                    <Text>Sắp xếp</Text>
                                </MenuTrigger>
                                <MenuOptions optionsContainerStyle={{ padding: 7 }}>
                                    <MenuOption onSelect={() => alert(`Save`)}>
                                        <Text style={{ fontSize: 16 }}>Gần đây nhất</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)}>
                                        <Text style={{ fontSize: 16 }}>Giảm giá nhiều</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)}>
                                        <Text style={{ fontSize: 16 }}>Giá thấp dần</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)} >
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
                            hook.data.books.map(item =>
                                <View key={Math.random()}>
                                    <BookCard book={item} />
                                </View>
                            )
                        }
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Paging maxPage={hook.paging.maxPage} currentPage={hook.paging.currentPage} onPageNavigation={hook.paging.onPageNavigation} />
                    </View>
                </ScrollView>
            </DrawerLayout>

        </>
    );
}

function BookFairs(props: MaterialTopTabScreenProps<ParamListBase>) {
    const hook = useBookFairsPage(props);
    return (
        <>
            <PageLoader loading={hook.loading} />
            <DrawerLayout
                ref={hook.ref.filterBookFairsDrawerRef}
                drawerWidth={280}
                drawerPosition={"left"}
                drawerBackgroundColor={"white"}
                renderNavigationView={() =>
                    <ScrollView>
                        <ExpandToggleView label="Thời gian">
                            <View style={{ backgroundColor: primaryTint10 }}>
                                <View style={{ flexDirection: "row", height: 40 }}>
                                    <View style={{ width: "40%", alignItems: "flex-end", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 15 }}>Từ :</Text>
                                    </View>
                                    <View style={{ width: "60%" }}>
                                        <DateTimePickerInput
                                            maximumDate={hook.input.filterEndDate.value}
                                            value={hook.input.filterStartDate.value}
                                            onConfirm={hook.input.filterStartDate.set}
                                            onReset={() => hook.input.filterStartDate.set(undefined)} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", height: 40 }}>
                                    <View style={{ width: "40%", alignItems: "flex-end", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 15 }}>Đến :</Text>
                                    </View>
                                    <View style={{ width: "60%" }}>
                                        <DateTimePickerInput
                                            minimumDate={hook.input.filterStartDate.value}
                                            value={hook.input.filterEndDate.value}
                                            onConfirm={hook.input.filterEndDate.set}
                                            onReset={() => hook.input.filterEndDate.set(undefined)} />
                                    </View>
                                </View>
                            </View>
                        </ExpandToggleView>
                        <ExpandToggleView label="Định dạng">
                            {
                                Object.values(CampaignFormat).map(item =>
                                    typeof (item) == "number" &&
                                    <SelectedLabel
                                        onPress={() => hook.event.onFormatsSeletedToggle(item)}
                                        seleted={hook.input.seletedFormat == item}
                                        label={CampaignFormat.toString(item)}
                                    />
                                )
                            }
                        </ExpandToggleView>
                        <ExpandToggleView label="Địa điểm">
                            {
                                Object.values(GeoLocate).map(item =>
                                    typeof (item) == "string" &&
                                    <SelectedLabel
                                        onPress={() => hook.event.onLocationsSeletedToggle(item)}
                                        seleted={hook.input.seletedLocation.filter((id) => item == id).length > 0}
                                        label={item}
                                    />
                                )
                            }
                        </ExpandToggleView>
                        <ExpandToggleView label="Thể loại"
                            onExpand={hook.event.onGenreExpand}>
                            {
                                hook.data.genres.map(item =>
                                    <SelectedLabel
                                        onPress={() => hook.event.onGenresSeletedToggle(item.id)}
                                        seleted={hook.input.seletedGenre.filter((id) => item.id == id).length > 0}
                                        label={item.name}
                                    />)
                            }
                        </ExpandToggleView>
                        <ExpandToggleView
                            onExpand={hook.event.onIssuerExpand}
                            label="Nhà phát hành">
                            {
                                hook.data.issuers.map(item =>
                                    <SelectedLabel
                                        onPress={() => hook.event.onIssuerSeletedToggle(item.id)}
                                        seleted={hook.input.seletedIssuer.filter((id) => item.id == id).length > 0}
                                        label={item.name}
                                    />)
                            }
                        </ExpandToggleView>
                        <ExpandToggleView label="Tổ chức">

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
                                <Button buttonStyle={{ backgroundColor: primaryTint1 }}>Lọc</Button>
                            </View>
                        </View>
                    </ScrollView>
                }>
                <ScrollView
                    ref={hook.ref.bookFairsScrollViewRef}
                    style={{ padding: 7, height: "100%", backgroundColor: "white" }}
                    contentContainerStyle={{ alignItems: "center" }}>
                    <View style={{
                        marginBottom: 5,
                        width: "100%",
                        height: 35,
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity
                            onPress={() => hook.ref.filterBookFairsDrawerRef.current?.openDrawer()}
                            style={{ flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "center", borderRightColor: primaryTint1 }}>
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
                                    <MenuOption onSelect={() => alert(`Save`)}>
                                        <Text style={{ fontSize: 16 }}>Gần đây nhất</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)}>
                                        <Text style={{ fontSize: 16 }}>Giảm giá nhiều</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)}>
                                        <Text style={{ fontSize: 16 }}>Giá thấp nhất</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)} >
                                        <Text style={{ fontSize: 16 }}>Giá cao nhất</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    </View>
                    {
                        hook.data.campaigns.map(item =>
                            <View key={Math.random()} style={{ marginBottom: 10 }}>
                                <BookFairCard campagin={item} />
                            </View>
                        )
                    }
                    <View style={{ marginBottom: 10, width: "100%", height: "100%" }}>
                        <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
                    </View>
                </ScrollView>
            </DrawerLayout>
        </>
    );
}

export default Search