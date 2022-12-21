import Geolocation from 'react-native-geolocation-service'
import { Keyboard, PermissionsAndroid } from 'react-native';
import { useAsyncEffect } from 'use-async-effect';
import useBoolean from "../../libs/hook/useBoolean";
import Toast from "react-native-toast-message";
import { useEffect, useState } from 'react';

export default function useLoginPage() {
    const [checkPosition, togglCheckPosition] = useBoolean(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [searchMessage, setSearchMessage] = useState("Không tìm thấy tổ chức bạn đang tìm kiếm");

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const onGetLocationSuccess = (position: Geolocation.GeoPosition) => {
        Toast.show(
            {
                type: "error",
                text1: "Thông báo",
                text2: "Lấy vị trí thành công",

            }
        );
    }
    const onGetLocationFailure = (error: Geolocation.GeoError) => {
        if (error.code == 1) {
            Toast.show(
                {
                    type: "error",
                    text1: "Lỗi",
                    text2: "Quyền truy cập vị trí bị từ chối",

                }
            );
        }
    }

    useAsyncEffect(async () => {
        if (!checkPosition) {
            return;
        }
        const options: PositionOptions = {
            enableHighAccuracy: true,
            maximumAge: 1 * 60 * 60 * 1000,
            timeout: 20000
        };
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        if (granted !== "granted") {
            togglCheckPosition();
        }
        Geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationFailure, options);
    }, [checkPosition]);

    return { checkPosition, togglCheckPosition , isKeyboardVisible, searchMessage };
}