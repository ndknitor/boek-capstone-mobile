import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AxiosInterceptor } from './component/AxiosInterceptor';
import Forbidden from './pages/Forbidden';
import React from 'react';
import { route } from './libs/hook/useRouter';
import AskGenres from './pages/AskGenres/AskGenres';
import PersonalInformation from './pages/PersonalInformation/PersonalInformation';
import { primaryColor, primaryTint1 } from './utils/color';
import Organizations from './pages/Organizations/Organizations';
import Orders from './pages/Orders/Orders';
import AskOrganizations from './pages/AskOrganizations/AskOrganizations';
import useInit from './context/useInit';
import AskPersonalInformation from './pages/AskPersonalInformation/AskPersonalInformation';
import BookDetail from './pages/BookDetail/BookDetail';
import CampaignDetail from './pages/CampaignDetail/CampaignDetail';
import IssuerDetail from './pages/IssuerDetail/IssuerDetail';
import IssuerMoreBook from './pages/IssuerMoreBook/IssuerMoreBook';
import PriceComparison from './pages/PriceComparison/PriceComparison';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Campaigns from './pages/Campaigns/Campaigns';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import { Icon } from '@rneui/base';
import { ActivityIndicator, Image } from 'react-native';
import accountWhite from "./assets/icons/account-circle-white.png";
import Index from './pages/Index/Index';
import OrderDetail from './pages/OrderDetail/OrderDetail';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Routers() {
  useInit();
  return (
    <NavigationContainer ref={route}>
      <AxiosInterceptor>
        <StackNavigator />
      </AxiosInterceptor>
    </NavigationContainer>
  );
}
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: primaryColor }, headerTitleStyle: { color: "white" }, headerTintColor: "white" }}>
      <Stack.Screen options={{ headerShown: false }} name={"Index"}>{() => <TabNavigator />}</Stack.Screen>
      <Stack.Screen options={{ title: "Tổ chức" }} name={"Organizations"}>{() => <Organizations />}</Stack.Screen>
      <Stack.Screen options={{ title: "So sánh giá" }} name={"PriceComparison"}>{(props) => <PriceComparison {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "Đơn hàng" }} name={"Orders"}>{() => <Orders />}</Stack.Screen>
      <Stack.Screen options={{ title: "Thông tin cá nhân" }} name={"PersonalInformation"}>{() => <PersonalInformation />}</Stack.Screen>
      <Stack.Screen options={{ title: "Chi tiết đơn hàng" }} name={"OrderDetail"}>{() => <OrderDetail />}</Stack.Screen>

      <Stack.Screen options={{ title: "" }} name={"IssuerMoreBook"}>{(props) => <IssuerMoreBook {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"AskGenres"}>{() => <AskGenres />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"IssuerDetail"}>{(props) => <IssuerDetail {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"BookDetail"}>{() => <BookDetail />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"CampaignDetail"}>{() => <CampaignDetail />}</Stack.Screen>

      <Stack.Screen options={{ headerShown: false }} name={"AskGenresWizard"}>{() => <AskGenres skiped />}</Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name={"AskOrganizations"}>{() => <AskOrganizations />}</Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name={"AskPersonalInformation"}>{() => <AskPersonalInformation />}</Stack.Screen>

      <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      //safeAreaInsets={{}}
      screenOptions={{
        tabBarStyle: {
          height: 60
        },
        headerShown: false,
        tabBarLabelStyle:
        {
          fontSize: 13,
          color: "white",
          //marginBottom: "13%"
        },
        tabBarIconStyle: {
          //marginTop: 5
        },
        tabBarInactiveBackgroundColor: primaryColor,
        tabBarActiveBackgroundColor: primaryTint1,
        lazy: true
      }} >
      <Tab.Screen options={{ title: "Hội sách", tabBarIcon: () => <Icon name='book' color={"white"} size={17} /> }} name="Campaigns" component={Campaigns} />
      <Tab.Screen options={{ title: "Tìm kiếm", tabBarIcon: () => <Icon name='book' type='entypo' color={"white"} size={17} /> }} name="Search" component={Search} />
      <Tab.Screen options={{ title: "Cá nhân", tabBarIcon: () => <Image source={accountWhite} style={{ height: 17 }} resizeMode={"contain"} /> }} name="Profile" component={Profile} />
      <Tab.Screen name="Test" options={{ title: "Test" }} component={Index} />
    </Tab.Navigator>
  );
}

export default Routers
