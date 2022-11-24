import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../styles/Global';

function Unauthorized() {
    return (
        <View style={globalStyles.page}>
            <Text>Unauthorized</Text>
        </View>
    )
}

export default Unauthorized