import React from 'react';
import useFooterComponent from './Footer.hook';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import useRouter from '../../libs/hook/useRouter';

function Footer() {
  const { showed } = useFooterComponent();
  const { navigate } = useRouter();
  return (
    <View style={{ display: showed ? "flex" : "none" , flexDirection : "row"}}  >

    </View>
  )
}


export default Footer