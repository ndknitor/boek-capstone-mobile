import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AxiosInterceptor } from './shared/component/AxiosInterceptor';
import About from './pages/About';
import Forbidden from './pages/Forbidden';
import Index from './pages/Index';
import Render from './pages/Render';
import Unauthorized from './pages/Unauthorized';
import Layout from './shared/component/Layout';

const Stack = createNativeStackNavigator();

function Routers() {
  return (
    <NavigationContainer >
      <AxiosInterceptor>
        <Layout>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Index"}>{() => <Index />}</Stack.Screen>
            <Stack.Screen name={"About"}>{() => <About />}</Stack.Screen>
            <Stack.Screen name={"Render"}>{() => <Render />}</Stack.Screen>

            <Stack.Screen name={"Unauthorized"}>{() => <Unauthorized />}</Stack.Screen>
            <Stack.Screen name={"Forbidden"}>{() => <Forbidden />}</Stack.Screen>
          </Stack.Navigator>
        </Layout>
      </AxiosInterceptor>
    </NavigationContainer>
  )
}

export default Routers
