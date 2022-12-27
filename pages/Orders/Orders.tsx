import React, { useState } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import { shade9 } from '../../utils/color';
import useOrdersPage from './Orders.hook'
import logo from "../../assets/logo.png";
import { Tab, TabView } from '@rneui/base';

function Orders() {
    useOrdersPage();
    const [index, setIndex] = useState(0);
    return (
        <View style={{ height: "100%", flex: 1 }}>
            <TabView>
                <TabView.Item>
                    <ScrollView style={{ flex: 1, width: "100%", height: "100%" }}>
                        <View style={{ flex: 1, flexDirection: "row", height: 160, borderBottomColor: shade9, borderBottomWidth: 2 }}>
                            <View style={{ height: 160, width: "25%" }}>
                                <Image style={{ height: "97%", width: "97%" }} source={logo} resizeMode={"contain"} />
                            </View>
                            <View style={{ width: "60%", padding: 10 }}>
                                <View>
                                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit adipisci, expedita esse minima perspiciatis quos sequi nesciunt eveniet itaque mollitia consequatur quae alias vero veritatis nemo vitae. Blanditiis, illo culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique dignissimos sequi eligendi nesciunt consequatur beatae voluptatum ipsam pariatur soluta tenetur vitae blanditiis, libero quaerat maiores? A aut eaque ex!</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </TabView.Item>
            </TabView>
            <Tab />
        </View>
    )
}

export default Orders