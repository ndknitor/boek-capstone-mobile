import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import useRouter from '../../libs/hook/useRouter';
import useIndexPage from './Index.hook';
import img1 from "../../assets/wtd.webp";
import img2 from "../../assets/hsxv.webp";
import { Tab, TabView } from '@rneui/base';
import Profile from '../Profile/Profile';
import { primaryColor, secondaryColor } from '../../utils/color';


function Index() {
  const { navigate } = useRouter();
  const [index, setIndex] = React.useState(0);
  useIndexPage();

  return (
    <>
      <View style={{ flex: 1 }}>

        <TabView value={index} onChange={setIndex} animationType="spring" disableSwipe>
          <TabView.Item style={{ width: '100%' }}>

            <View style={{ flex: 1, maxHeight: "38%" }}>
              <Swiper showsButtons>

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

          </TabView.Item>
          <TabView.Item style={{ width: '100%' }}>

            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigate("Login")}>
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate("AskGenres")}>
                <Text>Ask Genre</Text>
              </TouchableOpacity>
            </View>

          </TabView.Item>
          <TabView.Item style={{ width: '100%' }}>

            <Profile />

          </TabView.Item>
        </TabView>

        <Tab

          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          containerStyle={(active) => ({
            backgroundColor: active ? secondaryColor : primaryColor
          })}
          variant="primary"
        >
          <Tab.Item
            title="Hội sách"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'book', color: 'white', size: 20 }}
          />
          <Tab.Item
            title="Sách"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'book', type: 'entypo', color: 'white', size: 20 }}
          />
          <Tab.Item
            title="Cá nhân"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'man-sharp', type: 'ionicon', color: 'white', size: 20 }}
          />
        </Tab>

      </View>

    </>

  )
}



const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default Index