import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner'
import React from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import logo from "../../assets/logo.png";
import { paletteGray } from '../../utils/color';
import useQrCameraFrameComponent from './QrCameraFrame.hook';
export interface QrCameraFrameProps {
    onBarCodeScanned: BarCodeScannedCallback;
    onCameraPermissionError?: Function;
    scanQr: boolean;
}
function QrCameraFrame(props: QrCameraFrameProps) {
    const { cameraPermission } = useQrCameraFrameComponent(props);
    return (
        <View style={{ 
            flex: 1,
            overflow : "hidden",
            alignItems: props.scanQr ? "stretch" : "center",
            justifyContent: "center",
            borderRadius: 30,
            backgroundColor: paletteGray }}>
            {
                cameraPermission &&
                    props.scanQr ?
                    <BarCodeScanner
                        onBarCodeScanned={props.onBarCodeScanned}
                        style={{ height: Dimensions.get("screen").height }} />
                    :
                    <Image source={logo} style={{ width: "90%" }} resizeMode={'contain'} />

            }
        </View>
    )
}

export default QrCameraFrame