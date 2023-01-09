import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import useRouter from '../../libs/hook/useRouter';
import { Button, Icon } from '@rneui/base';
import Profile from '../Profile/Profile';
import { primaryColor } from '../../utils/color';
import QrCameraFrame from '../../component/QrCameraFrame/QrCameraFrame';
import PDFView from 'react-native-view-pdf';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import accountWhite from "../../assets/icons/account-circle-white.png";
import Campaigns from '../Campaigns/Campaigns';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import Search from '../Search/Search';
import PageProps from '../../objects/schemes/PageProps';
import useAppContext from '../../context/Context';
export interface IndexProps extends PageProps {

}
function Index() {
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