import React from 'react'
import { View, ScrollView, Image, Dimensions } from 'react-native'
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar'
import avatar from "../../assets/avatar.jpg";
import PDFView from 'react-native-view-pdf';

function Books() {
    return (
        <>
            <HeaderSearchBar />
            <ScrollView style={{ width: "100%", height: "100%" }}>
                {/* <View style={{ borderWidth: 1, width: "100%", height: 123 }}>
                    <Image source={avatar} style={{ width: "20%", height: "100%" }} />
                </View> */}
            </ScrollView>
        </>
    )
}

export default Books