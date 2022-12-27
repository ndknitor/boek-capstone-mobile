import { useState } from "react";
import TouchID, { AuthenticateConfig } from "react-native-touch-id";
import useAsyncEffect from "use-async-effect";
import { sleep } from "../../utils/Redirect";

export default function useIndexPage() {
    const [loading, setLoading] = useState(true);

    useAsyncEffect(async () => {
        await sleep(1000);
        setLoading(false);
        // const optionalConfigObject: AuthenticateConfig = {
        //     title: 'Yêu cầu xác thực', // Android
        //     imageColor: '#e00606', // Android
        //     imageErrorColor: '#ff0000', // Android
        //     sensorDescription: 'Chạm cảm biến vân tay', // Android
        //     sensorErrorDescription: 'Lỗi', // Android
        //     cancelText: 'Hủy', // Android
        //     fallbackLabel: 'Hiện mã pin', // iOS (if empty, then label is hidden)
        //     unifiedErrors: false, // use unified error messages (default false)
        //     passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
        // };
        // if (await TouchID.isSupported()) {
        //     try {
        //         const result = await TouchID.authenticate('Để chắc chắn bạn là chủ sở hữu của thiết bị này', optionalConfigObject);
        //         console.log(result);
        //     } catch (error) {

        //     }
        // }
        //console.log(await TouchID.isSupported());
    }, []);
    return { loading };
}