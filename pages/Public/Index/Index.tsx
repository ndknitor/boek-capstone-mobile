import React, { useContext, useEffect, useState } from 'react';
import PDFView from 'react-native-view-pdf';
import useRouter from '../../../libs/hook/useRouter';
import { View } from 'react-native';
import Sound from 'react-native-sound';
import AudioPlayer from '../../../components/AudioPlayer/AudioPlayer';
function Index() {
  const { navigate } = useRouter();
  const [scanQr, setScanQr] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <AudioPlayer audioUri='http://10.0.2.2:6969/Starting%20Line-SLwboaO8POs.mp3' />
      {/* <View style={{
        padding: 10
      }}>
       "https://file-examples.com/storage/fe0b804ac5640668798b8d0/2017/11/file_example_MP3_700KB.mp3"
        <AudioProgressBar duration={99} onSeek={() => { }} />
      </View> */}

      {/* <PDFView
        fadeInDuration={250}
        style={{ width: "100%", height: "100%", }}
        resource="https://www.africau.edu/images/default/sample.pdf"
        resourceType="url"
        onLoad={() => console.log(`PDF rendered from `)}
        onError={() => console.log('Cannot render PDF')} /> */}

      {/* <TouchableOpacity onPress={() => navigate("AskOrganizations")}>
        <Text>Ask Organization</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("AskPersonalInformation")}>
        <Text>Ask PersonalInformation</Text>
      </TouchableOpacity>
      <TouchableSafeAreaViewOpacity onPress={() => navigate("AskGenres")}>
        <Text>AskGenres</Text>
      </TouchableSafeAreaViewOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Modal</Text>
      </TouchableOpacity>
      <LayoutModal
        visible={modalVisible}
        onClose={() => { setModalVisible(false) }}>
        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
          <Text>dit me may</Text>
        </TouchableOpacity>
      </LayoutModal> */}

      {/* <Button onPress={async () => scanQr ? setScanQr(false) : setScanQr(true)} >Scan</Button>
      <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: 350, height: 350 }}>
          <QrCameraFrame onBarCodeScanned={(e) => { alert(e.data); setScanQr(false) }} scanQr={scanQr} onCameraPermissionError={() => setScanQr(false)} />
        </View>
      </View> */}
    </>
  )
}
export default Index;