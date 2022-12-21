import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AxiosInterceptor } from './component/AxiosInterceptor';
import Forbidden from './pages/Forbidden';
import Index from './pages/Index/Index';
import Layout from './component/Layout';
import Profile from './pages/Profile/Profile';
import React from 'react';
import Login from './pages/Login/Login';
import { route } from './libs/hook/useRouter';
import AskGenres from './pages/AskGenres/AskGenres';
import PersonalInformation from './pages/PersonalInformation/PersonalInformation';
import { primaryColor } from './utils/color';

const Stack = createNativeStackNavigator();

function Routers() {
  return (
    <NavigationContainer ref={route}>
      <AxiosInterceptor>
        <Layout>
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: primaryColor }, headerTitleStyle: { color: "white" }, headerTintColor: "white" }}>
            <Stack.Screen options={{ headerShown: false }} name={"Index"}>{() => <Index />}</Stack.Screen>
            <Stack.Screen options={{ headerShown : false}} name={"AskGenres"}>{() => <AskGenres />}</Stack.Screen>
            
            <Stack.Screen name={"Profile"}>{() => <Profile />}</Stack.Screen>

            <Stack.Screen options={{ title: "" }} name={"Login"}>{() => <Login />}</Stack.Screen>
            <Stack.Screen options={{ title: "" }} name={"PersonalInformation"}>{() => <PersonalInformation />}</Stack.Screen>


            <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
          </Stack.Navigator>
        </Layout>
      </AxiosInterceptor>
    </NavigationContainer>
  );
}

export default Routers
