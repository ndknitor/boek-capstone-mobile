import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions, ScrollView, Image, ActivityIndicator } from 'react-native';
import useRouter, { route } from '../../libs/hook/useRouter';
import useIndexPage from './Index.hook';
import { Button, Icon } from '@rneui/base';
import Profile from '../Profile/Profile';
import { primaryColor, shade1 } from '../../utils/color';
import QrCameraFrame from '../../component/QrCameraFrame/QrCameraFrame';
import BookFair from '../BookFair/BookFair';
import Books from '../Books/Books';
import PDFView from 'react-native-view-pdf';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import accountWhite from "../../assets/icons/account-circle-white.png";

function Index() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "0", title: 'Hội sách' },
    { key: "1", title: 'Sách' },
    { key: "2", title: 'Cá nhân' },
    { key: "3", title: 'Test' }
  ]);
  const getTabBarIcon = (props: any) => {
    const { route } = props
    if (route.key == 0) {
      return <Icon name='book' color={"white"} size={25} />
    }
    if (route.key == 1) {
      return <Icon name='book' type='entypo' color={"white"} size={25} />
    }
    if (route.key == 2) {
      return <Image source={accountWhite} style={{ height: 25 }} resizeMode={"contain"} />
    }
  }

  return (
    <TabView
      tabBarPosition='bottom'
      swipeEnabled={false}
      renderTabBar={(props) =>
        <TabBar
          {...props}
          indicatorContainerStyle={{ backgroundColor: primaryColor }}
          indicatorStyle={{ backgroundColor: "white" }}
          inactiveColor={"white"}
          activeColor={"white"}
          labelStyle={{ fontSize: 10 }}
          renderIcon={(e) => getTabBarIcon(e)}
        />}
      navigationState={{ index, routes }}
      renderScene={
        SceneMap({
          0: BookFair,
          1: Books,
          2: Profile,
          3: Test
        })
      }
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get("screen").width }}
    />
  );
}
const Test = () => {
  const { navigate } = useRouter();
  const [scanQr, setScanQr] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {/* <PDFView
        fadeInDuration={250}
        style={{ width: "100%", height: "100%", }}
        resource="https://www.africau.edu/images/default/sample.pdf"
        resourceType="url"
        onLoad={() => console.log(`PDF rendered from `)}
        onError={() => console.log('Cannot render PDF')} /> */}

      <TouchableOpacity onPress={() => navigate("AskOrganizations")}>
        <Text>Ask Organization</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("AskPersonalInformation")}>
        <Text>Ask PersonalInformation</Text>
      </TouchableOpacity>
      <Button onPress={async () => scanQr ? setScanQr(false) : setScanQr(true)} > Scan</Button>
      <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: 350, height: 350 }}>
          <QrCameraFrame onBarCodeScanned={(e) => { alert(e.data); setScanQr(false) }} scanQr={scanQr} onCameraPermissionError={() => setScanQr(false)} />
        </View>
      </View>
    </View>
  )
}

export default Index