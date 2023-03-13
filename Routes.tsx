import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AxiosInterceptor } from './components/AxiosInterceptor';
import Forbidden from './pages/Forbidden';
import React from 'react';
import { route } from './libs/hook/useRouter';
import { primaryColor, primaryTint1 } from './utils/color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Campaigns from './pages/Public/Campaigns/Campaigns';
import { Icon } from '@rneui/base';
import { Image } from 'react-native';
import accountWhite from "./assets/icons/account-circle-white.png";
import workHistoryWhite from "./assets/icons/work-history-white.png";
import useAuth from './libs/hook/useAuth';
import useInit from './context/useInit';
import Organizations from './pages/Customer/Organizations/Organizations';
import PriceComparison from './pages/Public/PriceComparison/PriceComparison';
import PersonalInformation from './pages/Authenticated/PersonalInformation/PersonalInformation';
import Orders from './pages/Customer/Orders/Orders';
import OrderDetail from './pages/Customer/OrderDetail/OrderDetail';
import IssuerMoreBook from './pages/Public/IssuerMoreBook/IssuerMoreBook';
import AskGenres from './pages/Customer/AskGenres/AskGenres';
import IssuerDetail from './pages/Public/IssuerDetail/IssuerDetail';
import BookDetail from './pages/Public/BookDetail/BookDetail';
import CampaignDetail from './pages/Public/CampaignDetail/CampaignDetail';
import AskOrganizations from './pages/Customer/AskOrganizations/AskOrganizations';
import Index from './pages/Public/Index/Index';
import AskPersonalInformation from './pages/Customer/AskPersonalInformation/AskPersonalInformation';
import Search from './pages/Public/Search/Search';
import Profile from './pages/Public/Profile/Profile';
import StaffCampaigns from './pages/Staff/StaffCampaigns/StaffCampaigns';
import { Role } from './objects/enums/Role';
import StaffOrders from './pages/Staff/StaffOrders/StaffOrders';
import StaffCampagin from './pages/Staff/StaffCampagin/StaffCampagin';
import PageLoader from './components/PageLoader/PageLoader';
import Cart from './pages/Public/Cart/Cart';
import RecurringCampaign from './pages/Public/RecurringCampaign/RecurringCampaign';
import PdfShower from './pages/Public/PdfShower/PdfShower';
import BookItems from './pages/Public/BookItems/BookItems';
import BookItemDetail from './pages/Public/BookItemDetail/BookItemDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Routers() {
  useInit();
  //useAuthorizeInit();
  return (
    <NavigationContainer ref={route}>
      <AxiosInterceptor>
        <StackNavigator />
      </AxiosInterceptor>
    </NavigationContainer>
  );
}
function StackNavigator() {
  const { initLoading, isInRole } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: primaryColor }, headerTitleStyle: { color: "white" }, headerTintColor: "white" }}>

      <Stack.Screen options={{ headerShown: false }} name={"Index"}>{() =>
        !initLoading ?
          isInRole([Role.staff.toString()]) ?
            <StaffTabNavigator />
            :
            <TabNavigator />
          :
          <PageLoader loading />
      }</Stack.Screen>
      {/* Public */}
      <Stack.Screen options={{ title: "Giỏ hàng" }} name={"Cart"}>{(props) => <Cart {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "So sánh giá" }} name={"PriceComparison"}>{(props) => <PriceComparison {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"IssuerMoreBook"}>{(props) => <IssuerMoreBook {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "Chi tiết" }} name={"IssuerDetail"}>{(props) => <IssuerDetail {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"CampaignDetail"}>{(props) => <CampaignDetail {...props} />}</Stack.Screen>
      <Stack.Screen options={{ title: "" }} name={"BookDetail"} component={BookDetail} />
      <Stack.Screen options={{ title: "Địa điểm" }} name={"RecurringCampaign"} component={RecurringCampaign} />
      <Stack.Screen options={{ title: "" }} name={"PdfShower"} component={PdfShower} />
      <Stack.Screen options={{ title: "" }} name={"BookItems"} component={BookItems} />
      <Stack.Screen options={{ title: "" }} name={"BookItemDetail"} component={BookItemDetail} />

      {/* Customer */}
      <Stack.Screen options={{ title: "Tổ chức" }} name={"Organizations"}>{() => <Organizations />}</Stack.Screen>
      <Stack.Screen options={{ title: "Thông tin cá nhân" }} name={"PersonalInformation"}>{() => <PersonalInformation />}</Stack.Screen>
      <Stack.Screen options={{ title: "Đơn hàng" }} name={"Orders"}>{() => <Orders />}</Stack.Screen>
      <Stack.Screen options={{ title: "Chi tiết đơn hàng" }} name={"OrderDetail"}>{() => <OrderDetail />}</Stack.Screen>
      <Stack.Screen options={{ title: "Thể loại sách yêu thích" }} name={"AskGenres"}>{() => <AskGenres />}</Stack.Screen>

      <Stack.Screen options={{ headerShown: false }} name={"AskGenresWizard"}>{() => <AskGenres skiped />}</Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name={"AskOrganizations"}>{() => <AskOrganizations />}</Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name={"AskPersonalInformation"}>{(props) => <AskPersonalInformation  {...props} />}</Stack.Screen>

      {/* Staff */}
      <Stack.Screen options={{ headerShown: false }} name={"StaffCampagin"}>{(props) => <StaffCampagin />}</Stack.Screen>

      <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      backBehavior='none'
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        tabBarStyle: {
          height: 60
        },
        headerShown: false,
        tabBarLabelStyle:
        {
          fontSize: 13,
          color: "white",
          marginBottom: "10%"
        },
        tabBarIconStyle: {
          //marginTop: 5
        },
        tabBarInactiveBackgroundColor: primaryColor,
        tabBarActiveBackgroundColor: primaryTint1,
        lazy: true
      }}>
      <Tab.Screen options={{ title: "Hội sách", tabBarIcon: () => <Icon name='book' color={"white"} size={17} /> }} name="Campaigns" component={Campaigns} />
      <Tab.Screen options={{ unmountOnBlur: true, title: "Tìm kiếm", tabBarIcon: () => <Icon name='book' type='entypo' color={"white"} size={17} /> }} name="Search" component={Search} />
      <Tab.Screen options={{ title: "Cá nhân", tabBarIcon: () => <Image source={accountWhite} style={{ height: 17 }} resizeMode={"contain"} /> }} name="Profile" component={Profile} />
      {
        __DEV__ &&
        <Tab.Screen name="Test" options={{ title: "Test" }} component={Index} />
      }
    </Tab.Navigator>
  );
}

function StaffTabNavigator() {
  return (
    <Tab.Navigator
      backBehavior='none'
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        tabBarStyle: {
          height: 60
        },
        headerShown: false,
        tabBarLabelStyle:
        {
          fontSize: 13,
          color: "white",
          marginBottom: "10%"
        },
        tabBarIconStyle: {
          //marginTop: 5
        },
        tabBarInactiveBackgroundColor: primaryColor,
        tabBarActiveBackgroundColor: primaryTint1,
        lazy: true
      }}>
      <Tab.Screen options={{ title: "Hội sách", tabBarIcon: () => <Icon name='book' color={"white"} size={17} /> }} name="StaffCampaigns" component={StaffCampaigns} />
      <Tab.Screen options={{ title: "Đơn hàng", tabBarIcon: () => <Image source={workHistoryWhite} style={{ height: 17 }} resizeMode={"contain"} /> }} name="StaffOrders" component={StaffOrders} />
      <Tab.Screen options={{ title: "Cá nhân", tabBarIcon: () => <Image source={accountWhite} style={{ height: 17 }} resizeMode={"contain"} /> }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Routers
