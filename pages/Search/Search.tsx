import { View, ScrollView, ActivityIndicator, Text, Image, TouchableOpacity, Dimensions, Pressable } from 'react-native'
import BookCard from '../../component/BookCard/BookCard';
import Paging from '../../component/Paging/Paging';
import { shade1, } from '../../utils/color';
import filterBlack from "../../assets/icons/filter-black.png";
import sortBlack from "../../assets/icons/sort-black.png";
import { books } from '../../utils/mock';
import { SceneMap, SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';
import React, { useState } from 'react';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import useSearchsPage from './Search.hook';
import { Button } from '@rneui/base';
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
            animationEnabled
            tabBarPosition='top'
            renderLazyPlaceholder={() => <ActivityIndicator size='large' style={{ width: "100%", height: "100%" }} />}
            renderTabBar={(props) =>
                <TabBar
                    {...props}
                    indicatorContainerStyle={{ backgroundColor: shade1 }}
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
    const hook = useSearchsPage(props);
    return (
        <>
            <ActivityIndicator
                size="large"
                style={{
                    display: hook.loading ? "flex" : "none",
                    zIndex: 1,
                    opacity: 0.6,
                    position: "absolute",
                    width: "100%",
                    height: "90%",
                    top: 90
                }} />
            <ScrollView
                ref={hook.scrollViewRef}
                scrollEnabled={!hook.loading}
                style={{
                    backgroundColor: "white",
                }}>
                <View style={{
                    borderColor: shade1,
                    borderTopWidth: 1,
                    marginBottom: 5,
                    width: "100%",
                    height: 35,
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("dit me may")}
                        style={{ flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "center", borderRightColor: shade1 }}>
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
                <View style={{ padding: 10, flexDirection: "row" }}>
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
        </>
    );
}
function BookFairs(props: SearchProps) {
    return (
        <View style={{ width: "100%", height: "100%", borderWidth: 1 }}>

        </View>
    );
}

export default Search