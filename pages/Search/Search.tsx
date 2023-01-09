import { View, ScrollView, ActivityIndicator, Text, Image, TouchableOpacity, Dimensions, Pressable, DrawerLayoutAndroid, BackHandler } from 'react-native'
import BookCard from '../../component/BookCard/BookCard';
import Paging from '../../component/Paging/Paging';
import { paletteGray, paletteGrayLight, primaryTint1, primaryTint10, primaryTint4, primaryTint7, primaryTint9 } from '../../utils/color';
import filterBlack from "../../assets/icons/filter-black.png";
import sortBlack from "../../assets/icons/sort-black.png";
import { books } from '../../utils/mock';
import { SceneMap, SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';
import React, { useRef, useState } from 'react';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { useBookFairsPage, useBooksPage } from './Search.hook';
import { range } from '../../utils/format';
import BookFairCard from '../../component/BookFairCard/BookFairCard';
import expandMoreBlack from "../../assets/icons/expand-more-black.png";
import expandLessBlack from "../../assets/icons/expand-less-black.png";
import DrawerLayout from 'react-native-drawer-layout';
import TreeView from 'react-native-final-tree-view';

export interface SearchProps extends SceneRendererProps {

}
function Search(props: SearchProps) {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "0", title: 'Sách' },
        { key: "1", title: 'Hội sách' },
    ]);

    return (
        <TabView
            lazy
            swipeEnabled={false}
            animationEnabled
            tabBarPosition='top'
            renderLazyPlaceholder={() => <ActivityIndicator size='large' style={{ width: "100%", height: "100%" }} />}
            renderTabBar={(props) =>
                <TabBar
                    {...props}
                    indicatorContainerStyle={{ backgroundColor: primaryTint1 }}
                    indicatorStyle={{ backgroundColor: "white" }}
                    inactiveColor={"white"}
                    activeColor={"white"}
                    labelStyle={{ fontSize: 13 }}
                />}
            navigationState={{ index, routes }}
            renderScene={
                SceneMap({
                    0: Books,
                    1: BookFairs
                })
            }
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get("screen").width }}
        />
    )
}
function Books(props: SearchProps) {
    const hook = useBooksPage(props);
    return (
        <>
            <DrawerLayout
                ref={hook.filterBooksDrawerRef}
                drawerWidth={250}
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
                                                    fontSize: item.level ? 16 : 18,
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
                        </ScrollView>
                }>
                <PageLoader loading={hook.loading} />
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
                            <Image source={filterBlack} resizeMode="center" style={{ width: "10%" }} />
                            <Text>Lọc</Text>
                        </TouchableOpacity>
                        <View style={{ width: "50%" }}>
                            <Menu >
                                <MenuTrigger style={{ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                                    <Image source={sortBlack} resizeMode="center" style={{ width: "10%" }} />
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

function BookFairs(props: SearchProps) {
    const hook = useBookFairsPage(props);
    return (
        <>
            <PageLoader loading={hook.loading} />
            <DrawerLayout
                ref={hook.filterBookFairsDrawerRef}
                drawerWidth={250}
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
                                                fontSize: item.level ? 16 : 18,
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
                    </ScrollView>
                }>
                <ScrollView style={{ padding: 7, height: "100%" }} contentContainerStyle={{ alignItems: "center" }}>

                    <View style={{
                        marginBottom: 5,
                        width: "100%",
                        height: 35,
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity
                            onPress={() => hook.filterBookFairsDrawerRef.current?.openDrawer()}
                            style={{ flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "center", borderRightColor: primaryTint1 }}>
                            <Image source={filterBlack} resizeMode="center" style={{ width: "10%" }} />
                            <Text>Lọc</Text>
                        </TouchableOpacity>
                        <View style={{ width: "50%" }}>
                            <Menu >
                                <MenuTrigger style={{ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                                    <Image source={sortBlack} resizeMode="center" style={{ width: "10%" }} />
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

export default Search