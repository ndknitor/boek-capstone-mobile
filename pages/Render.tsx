import React from 'react'
import { View, Text } from 'react-native'
import Authorize from '../libs/Authorize'
import globalStyles from '../styles/Global'

function Render() {
    return (
        <Authorize roles={["User"]}>
            <View style={globalStyles.page}>
                <Text>Render</Text>
            </View>
        </Authorize>
    )
}

export default Render