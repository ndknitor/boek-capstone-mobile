import React from 'react';
import useFooterComponent from './Footer.hook';
import { StyleSheet, View, Text } from 'react-native';

function Footer() {
  const { showed } = useFooterComponent();
  return (
    <View style={{ backgroundColor: "blue", display: showed ? "flex" : "none" }}>
      <Text style={{ fontSize: 24}}>This is Footer</Text>
    </View>
  )
}


export default Footer