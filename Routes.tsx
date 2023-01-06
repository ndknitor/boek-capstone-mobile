import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AxiosInterceptor } from './component/AxiosInterceptor';
import Forbidden from './pages/Forbidden';
import Index from './pages/Index/Index';
import React from 'react';
import { route } from './libs/hook/useRouter';
import AskGenres from './pages/AskGenres/AskGenres';
import PersonalInformation from './pages/PersonalInformation/PersonalInformation';
import { primaryColor } from './utils/color';
import Organizations from './pages/Organizations/Organizations';
import Orders from './pages/Orders/Orders';
import AskOrganizations from './pages/AskOrganizations/AskOrganizations';
import useInit from './context/useInit';
import AskPersonalInformation from './pages/AskPersonalInformation/AskPersonalInformation';
import BookDetail from './pages/BookDetail/BookDetail';
import CampaignDetail from './pages/CampaignDetail/CampaignDetail';
import IssuerDetail from './pages/IssuerDetail/IssuerDetail';
import IssuerMoreBook from './pages/IssuerMoreBook/IssuerMoreBook';

const Stack = createNativeStackNavigator();

function Routers() {
  useInit();
  return (
    <NavigationContainer ref={route}>
      <AxiosInterceptor>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: primaryColor }, headerTitleStyle: { color: "white" }, headerTintColor: "white" }}>
          <Stack.Screen options={{ headerShown: false }} name={"Index"}>{() => <Index />}</Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name={"AskGenresWizard"}>{() => <AskGenres skiped />}</Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name={"AskOrganizations"}>{() => <AskOrganizations />}</Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name={"Organizations"}>{() => <Organizations />}</Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name={"AskPersonalInformation"}>{() => <AskPersonalInformation />}</Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name={"IssuerMoreBook"}>{(props) => <IssuerMoreBook {...props} />}</Stack.Screen>

          <Stack.Screen options={{ title: "" }} name={"IssuerDetail"}>{(props) => <IssuerDetail {...props} />}</Stack.Screen>
          <Stack.Screen options={{ title: "" }} name={"BookDetail"}>{() => <BookDetail />}</Stack.Screen>
          <Stack.Screen options={{ title: "" }} name={"CampaignDetail"}>{() => <CampaignDetail />}</Stack.Screen>
          <Stack.Screen options={{ title: "" }} name={"Orders"}>{() => <Orders />}</Stack.Screen>
          <Stack.Screen options={{ title: "" }} name={"AskGenres"}>{() => <AskGenres />}</Stack.Screen>
          <Stack.Screen options={{ title: "" }} name={"PersonalInformation"}>{() => <PersonalInformation />}</Stack.Screen>

          <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
        </Stack.Navigator>
      </AxiosInterceptor>
    </NavigationContainer>
  );
}

export default Routers
