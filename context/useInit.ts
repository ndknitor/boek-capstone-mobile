import AsyncStorage from '@react-native-async-storage/async-storage';
import useAsyncEffect from "use-async-effect";
import appxios, { setAuthorizationBearer } from '../components/AxiosInterceptor';
import useAuth from '../libs/hook/useAuth';
import { LoginViewModel } from '../objects/viewmodels/Users/LoginViewModel';
import StorageKey from '../utils/storageKey';
import useAppContext from "./Context";
import auth from '@react-native-firebase/auth';
import { BaseResponseModel } from '../objects/responses/BaseResponseModel';
import EndPont from '../utils/endPoints';
import * as Notifications from 'expo-notifications';

export default function useInit() {
  const { setUser } = useAppContext();
  const { setAuthorize, initLoading, setInitLoading } = useAuth();
  useAsyncEffect(async () => {
    const userJsonString = await AsyncStorage.getItem(StorageKey.user);
    if (auth().currentUser) {
      let user: LoginViewModel;
      if (userJsonString) {
        console.log(userJsonString);
        user = JSON.parse(userJsonString);
      }
      else {
        const request = {
          idToken: await auth().currentUser?.getIdToken()
        };
        //        console.log(request);

        const loginResponse = await appxios.post<BaseResponseModel<LoginViewModel>>(EndPont.public.login, request);
        if (loginResponse.status == 200) {
          user = loginResponse.data.data;
          setUser(user);
          setAuthorize([user.role.toString()]);
          setAuthorizationBearer(user.accessToken);
        }
      }
    }
    if (initLoading) {
      setInitLoading(false);
    }
    const onPressNotificationListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response.notification.request.content.data);
    });
    return onPressNotificationListener;
  }, []);
}