import React, { PropsWithChildren } from 'react'
import { Dimensions, View } from 'react-native'
interface DrawerProps extends PropsWithChildren {

}
function DrawerProvider(props: PropsWithChildren) {
    return (
        <>
            {props.children}
        </>
    );
}
function Drawer(props: DrawerProps) {
    return (
        <View style={{
            //borderWidth: 1,
            position: "absolute",
            backgroundColor: "red",
            height: Dimensions.get("screen").height,
            width: Dimensions.get("screen").width * 60 / 100,
            zIndex: 1
        }}>
            {props.children}
        </View>
    )
}

export default Drawer