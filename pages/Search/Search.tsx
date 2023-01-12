import { View, ScrollView, ActivityIndicator, Text, Image, TouchableOpacity } from 'react-native'
import BookCard from '../../component/BookCard/BookCard';
import Paging from '../../component/Paging/Paging';
import { paletteRed, primaryColor, primaryTint1, primaryTint10, primaryTint4 } from '../../utils/color';
import { books } from '../../utils/mock';
import React, { PropsWithChildren, useContext, useState } from 'react';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { SearchPageContext, useBookFairsPage, useBooksPage } from './Search.hook';
import { range } from '../../utils/format';
import BookFairCard from '../../component/BookFairCard/BookFairCard';
import DrawerLayout from 'react-native-drawer-layout';
import TreeView from 'react-native-final-tree-view';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import filterBlack from "../../assets/icons/filter-black.png";
import sortBlack from "../../assets/icons/sort-black.png";
import expandMoreBlack from "../../assets/icons/expand-more-black.png";
import expandLessBlack from "../../assets/icons/expand-less-black.png";
import { ParamListBase } from '@react-navigation/native';
import { Button } from '@rneui/base';

const Tab = createMaterialTopTabNavigator();

export interface SearchProps {

}
function Search(props: SearchProps) {
    const context = useContext(SearchPageContext);
    return (
        <SearchPageContextProvider>
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
        </SearchPageContextProvider>

    )
}
function Books(props: MaterialTopTabScreenProps<ParamListBase>) {
    const hook = useBooksPage(props);
    return (
        <>
            <PageLoader loading={hook.loading} />
            <DrawerLayout
                ref={hook.filterBooksDrawerRef}
                drawerWidth={280}
                drawerPosition={"left"}
                drawerBackgroundColor={"white"}
                renderNavigationView={
                    () =>
                        <ScrollView>
                            <TreeView
                                initialExpanded={false}
                                data={hook.filterBooksTreeData}
                                renderNode={item =>
                                    <View style={{
                                        borderBottomWidth: item.hasChildrenNodes ? 1 : 0,
                                        padding: 15,
                                        flexDirection: "row",
                                        borderColor: primaryTint4,
                                        backgroundColor: item.hasChildrenNodes ? "white" : primaryTint10
                                    }}>
                                        <View style={{ width: "85%" }}>
                                            <Text
                                                style={{
                                                    marginLeft: 25 * item.level,
                                                    fontSize: item.level ? 14 : 16,
                                                }}>
                                                {item.node.name}
                                            </Text>
                                        </View>
                                        {
                                            item.hasChildrenNodes &&
                                            <View style={{ width: "15%", alignItems: "center", justifyContent: "center" }}>
                                                <Image source={item.isExpanded ? expandLessBlack : expandMoreBlack} style={{ height: 25 }} resizeMode="contain" />
                                            </View>
                                        }
                                    </View>

                                } />
                            <View style={{
                                //borderWidth: 1,
                                flexDirection: "row",
                                paddingTop: 25,
                                paddingBottom: 25
                            }}>

                                <View style={{ width: "50%", padding: 10 }}>
                                    <Button buttonStyle={{ backgroundColor: paletteRed }}>Thiết lập lại</Button>
                                </View>
                                <View style={{ width: "50%", padding: 10 }}>
                                    <Button buttonStyle={{ backgroundColor: primaryTint1 }}>Lọc</Button>
                                </View>
                            </View>
                        </ScrollView>
                }>
                <ScrollView
                    ref={hook.booksScrollViewRef}
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
                            onPress={() => hook.filterBooksDrawerRef.current?.openDrawer()}
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
                                        <Text style={{ fontSize: 16 }}>Giá thấp nhất</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)} >
                                        <Text>
                                            <Text style={{ fontSize: 16 }}>Giá cao nhất</Text>
                                        </Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    </View>
                    <View style={{ padding: 10, flexDirection: "row", flexWrap: "wrap" }}>
                        {
                            books.map(item =>
                                <View key={Math.random()}>
                                    <BookCard book={item} />
                                </View>
                            )
                        }
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Paging maxPage={hook.maxPage} currentPage={hook.currentPage} onPageNavigation={hook.onPageNavigation} />
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
                ref={hook.filterBookFairsDrawerRef}
                drawerWidth={280}
                drawerPosition={"left"}
                drawerBackgroundColor={"white"}
                renderNavigationView={() =>
                    <ScrollView>
                        <TreeView
                            initialExpanded={false}
                            data={hook.filterBookFairsTreeData}
                            renderNode={item =>
                                <View style={{
                                    borderBottomWidth: item.hasChildrenNodes ? 1 : 0,
                                    padding: 15,
                                    flexDirection: "row",
                                    borderColor: primaryTint4,
                                    backgroundColor: item.hasChildrenNodes ? "white" : primaryTint10
                                }}>
                                    <View style={{ width: "85%" }}>
                                        <Text
                                            style={{
                                                marginLeft: 25 * item.level,
                                                fontSize: item.level ? 14 : 16,
                                            }}>
                                            {item.node.name}
                                        </Text>
                                    </View>
                                    {
                                        item.hasChildrenNodes &&
                                        <View style={{ width: "15%", alignItems: "center", justifyContent: "center" }}>
                                            <Image source={item.isExpanded ? expandLessBlack : expandMoreBlack} style={{ height: 25 }} resizeMode="contain" />
                                        </View>
                                    }
                                </View>
                            } />
                        <View style={{
                            //borderWidth: 1,
                            flexDirection: "row",
                            paddingTop: 25,
                            paddingBottom: 25
                        }}>
                            <View style={{ width: "50%", padding: 10 }}>
                                <Button buttonStyle={{ backgroundColor: paletteRed }}>Thiết lập lại</Button>
                            </View>
                            <View style={{ width: "50%", padding: 10 }}>
                                <Button buttonStyle={{ backgroundColor: primaryTint1 }}>Lọc</Button>
                            </View>
                        </View>
                    </ScrollView>
                }>
                <ScrollView style={{ padding: 7, height: "100%", backgroundColor: "white" }} contentContainerStyle={{ alignItems: "center" }}>
                    <View style={{
                        marginBottom: 5,
                        width: "100%",
                        height: 35,
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity
                            onPress={() => hook.filterBookFairsDrawerRef.current?.openDrawer()}
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
                                        <Text style={{ fontSize: 16 }}>Giá thấp nhất</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Not called`)} >
                                        <Text>
                                            <Text style={{ fontSize: 16 }}>Giá cao nhất</Text>
                                        </Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    </View>
                    {
                        range(0, 5).map(item =>
                            <View key={Math.random()} style={{ marginBottom: 10 }}>
                                <BookFairCard />
                            </View>
                        )
                    }
                    <View style={{ marginBottom: 10, width: "100%", height: "100%" }}>
                        <Paging currentPage={hook.currentPage} maxPage={hook.maxPage} />
                    </View>
                </ScrollView>
            </DrawerLayout>
        </>
    );
}

function PageLoader({ loading }: { loading: boolean }) {
    return (
        <ActivityIndicator
            size="large"
            style={{
                display: loading ? "flex" : "none",
                zIndex: 1,
                opacity: 0.6,
                position: "absolute",
                width: "100%",
                height: "90%",
                top: 90
            }} />
    );
}

function SearchPageContextProvider(props: PropsWithChildren) {
    const [searchValue, setSearchValue] = useState("");
    const [onSubmit, setOnSubmit] = useState<() => void>(() => { });
    return (
        <SearchPageContext.Provider value={{ searchValue, setSearchValue, onSubmit, setOnSubmit }}>
            {props.children}
        </SearchPageContext.Provider>
    );
}

export default Search