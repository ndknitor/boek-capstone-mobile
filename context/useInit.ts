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
import useDebounce from '../libs/hook/useDebounce';
import { useEffect } from 'react';
import { ProductInCart } from '../objects/models/ProductInCart';
import useIsFirstRender from '../libs/hook/useIsFirstRender';
import { Role } from '../objects/enums/Role';
import { CustomerViewModel } from '../objects/viewmodels/Users/customers/CustomerViewModel';
import endPont from '../utils/endPoints';

export default function useInit() {
  const { setUser, cart, setCart, totalProductQuantity, setTotalProductQuantity } = useAppContext();
  const { setAuthorize, initLoading, setInitLoading } = useAuth();
  const debounceCart = useDebounce(cart, 900);
  const isFirstRender = useIsFirstRender();
  useAsyncEffect(async () => {
    if (!isFirstRender) {
      await AsyncStorage.setItem(StorageKey.cart, JSON.stringify(cart));
    }
  }, [debounceCart]);

  useAsyncEffect(async () => {
    const jsonString = await AsyncStorage.getItem(StorageKey.cart);
    let storeCart: ProductInCart[] = [];
    if (jsonString) {
      storeCart = JSON.parse(jsonString) as ProductInCart[];
      if (cart.length == 0) {
        setCart(storeCart);
      }
    }

    if (totalProductQuantity == 0) {
      let totalQuantity = 0;
      storeCart.map(item => totalQuantity += item.quantity);
      setTotalProductQuantity(totalQuantity);
    }

    const userJsonString = await AsyncStorage.getItem(StorageKey.user);

    if (auth().currentUser) {
      let user: LoginViewModel = {} as LoginViewModel;
      if (userJsonString) {
        //console.log(userJsonString);
        user = JSON.parse(userJsonString);
      }
      else {
        const request = {
          idToken: await auth().currentUser?.getIdToken()
        };
        const loginResponse = await appxios.post<BaseResponseModel<LoginViewModel>>(EndPont.public.login, request);
        if (loginResponse.status == 200) {
          user = loginResponse.data.data;
        }
      }
      setUser(user);
      setAuthorize([user.role.toString()]);
      setAuthorizationBearer(user.accessToken);
      console.log(appxios.defaults.headers.common['Authorization']);
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