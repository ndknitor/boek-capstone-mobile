import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import globalStyles from '../styles/Global'

function Forbidden() {
  return (
    <View style={globalStyles.page}>
        <Text>Forbidden</Text>
    </View>
  )
}

export default Forbidden