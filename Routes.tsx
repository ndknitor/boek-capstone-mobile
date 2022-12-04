import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AxiosInterceptor } from './component/AxiosInterceptor';
import Forbidden from './pages/Forbidden';
import Index from './pages/Index/Index';
import Layout from './component/Layout';
import Profile from './pages/Profile/Profile';
import React from 'react';
import Login from './pages/Login/Login';

const Stack = createNativeStackNavigator();

function Routers() {
  return (
    <NavigationContainer>
      <AxiosInterceptor>
        <Layout>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Index"}>{() => <Index />}</Stack.Screen>
            <Stack.Screen name={"Login"}>{() => <Login />}</Stack.Screen>
            <Stack.Screen name={"Profile"}>{() => <Profile />}</Stack.Screen>

            <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
          </Stack.Navigator>
        </Layout>
      </AxiosInterceptor>
    </NavigationContainer>
  );
}

export default Routers
