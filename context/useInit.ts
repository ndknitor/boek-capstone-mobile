import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import useAsyncEffect from "use-async-effect";
import useAppContext from "./Context";

export default function useInit() {
  const { setGeoPosition, geoPosition } = useAppContext();
  useAsyncEffect(async () => {
    if (geoPosition) {
      console.log(AsyncStorage.getItem("hello"));
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setGeoPosition(location);
      console.log(location);
    }
  }, []);
}