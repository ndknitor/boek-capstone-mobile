import React from 'react'
import { View, Image, Text } from 'react-native'
import Swiper from 'react-native-swiper';
import img1 from "../../assets/wtd.webp";
import img2 from "../../assets/hsxv.webp";
import { Tab } from '@rneui/base/dist/Tab';

function BookFair() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, maxHeight: "38%" }}>
                <Swiper showsButtons autoplay autoplayTimeout={8} >

                    <View style={{ flex: 1 }}>
                        <Image source={img1} style={{ flex: 1, maxWidth: "100%" }} resizeMethod="resize" resizeMode="contain" />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Image source={img2} style={{ flex: 1, maxWidth: "100%" }} resizeMethod="resize" resizeMode="contain" />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Image source={img1} style={{ flex: 1, maxWidth: "100%" }} resizeMethod="resize" resizeMode="contain" />
                    </View>

                </Swiper>
            </View>
        </View>
    )
}

export default BookFair