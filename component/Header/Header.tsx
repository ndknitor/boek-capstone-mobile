import React from 'react'
import backArrow from '../../assets/arrow-left-white.png';
import useHeaderComponent from './Header.hook';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

function Header() {
  const { showed } = useHeaderComponent();
  return (
    <View style={{ display: showed ? "flex" : "none" }}>
      <View>
        <TouchableOpacity >
          <Image source={backArrow} />
        </TouchableOpacity>
        <Text>This is header</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

});

export default Header