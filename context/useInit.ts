import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import useAsyncEffect from "use-async-effect";
import appxios, { setAuthorizationBearer } from '../components/AxiosInterceptor';
import useAuth from '../libs/hook/useAuth';
import { LoginViewModel } from '../objects/viewmodels/Users/LoginViewModel';
import StorageKey from '../utils/storageKey';
import useAppContext from "./Context";
import auth from '@react-native-firebase/auth';
import { BaseResponseModel } from '../objects/responses/BaseResponseModel';
import EndPont from '../utils/endPoints';


export default function useInit() {
  const { setGeoPosition, geoPosition, setUser } = useAppContext();
  const { setAuthorize, initLoading, setInitLoading } = useAuth();
  useAsyncEffect(async () => {
    const userJsonString = await AsyncStorage.getItem(StorageKey.user);
    if (auth().currentUser) {
      let user: LoginViewModel;
      if (userJsonString) {
        user = JSON.parse(userJsonString);
      }
      else {
        const request = {
          idToken: await auth().currentUser?.getIdToken()
        };
        const loginResponse = await appxios.post<BaseResponseModel<LoginViewModel>>(EndPont.public.login, request);
        user = loginResponse.data.data;
      }
      setUser(user);
      setAuthorize([user.role.toString()]);
      setAuthorizationBearer(user.accessToken);
    }

    if (geoPosition) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setGeoPosition(location);
      console.log(location);
    }
    if (initLoading) {
      setInitLoading(false);
    }
  }, []);
}