import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
import useRouter from '../../libs/hook/useRouter';
import { Button, Icon } from '@rneui/base';
import Profile from '../Profile/Profile';
import { primaryColor } from '../../utils/color';
import QrCameraFrame from '../../component/QrCameraFrame/QrCameraFrame';
import PDFView from 'react-native-view-pdf';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import accountWhite from "../../assets/icons/account-circle-white.png";
import Campaigns from '../Campaigns/Campaigns';
import useIndexPage, { IndexContext, indexContextProviderInit } from './Index.hook';
import PageProps from '../../objects/schemes/PageProps';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import Search from '../Search/Search';
export interface IndexProps extends PageProps {

}
function Index() {
  return (
    <IndexContext.Provider value={indexContextProviderInit()}>
      <Content />
    </IndexContext.Provider>
  )
}
function Content() {
  const [index, setIndex] = useState(0);
  const { setOptions } = useRouter();
  const context = useContext(IndexContext);

  const [routes] = React.useState([
    { key: "0", title: 'Hội sách' },
    { key: "1", title: 'Tìm kiếm' },
    { key: "2", title: 'Cá nhân' },
    { key: "3", title: 'Test' }
  ]);
  const getTabBarIcon = (props: any) => {
    const { route } = props
    if (route.key == 0) {
      return <Icon name='book' color={"white"} size={20} />
    }
    if (route.key == 1) {
      return <Icon name='book' type='entypo' color={"white"} size={20} />
    }
    if (route.key == 2) {
      return <Image source={accountWhite} style={{ height: 20 }} resizeMode={"contain"} />
    }
  }

  const onSearchSubmit = () => {
    setIndex(1);
    context.toggleSearchSubmitChange();
  }
  useEffect(() => {
    if (index == 1) {
      setOptions({
        headerTitle: () =>
          <HeaderSearchBar
            focus={index == 1}
            onSubmit={onSearchSubmit}
            onChangeText={text => context.setSearchValue(text)} />
      });
    }
    else
    {
      setOptions({
        headerTitle : undefined
      })
    }

  }, [index]);
  return (
    <>
      <TabView
        animationEnabled
        tabBarPosition='bottom'
        swipeEnabled={false}
        renderLazyPlaceholder={() => <ActivityIndicator size='large' style={{ width: "100%", height: "100%" }} />}
        renderTabBar={(props) =>
          <TabBar
            {...props}
            style={{ height: 60 }}
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
            0: Campaigns,
            1: Search,
            2: Profile,
            3: Test
          })
        }
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("screen").width }}
      />
    </>
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
      <TouchableOpacity onPress={() => navigate("CampaignDetail")}>
        <Text>CampaignDetail</Text>
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