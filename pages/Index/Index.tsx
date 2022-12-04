import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import useRouter from '../../libs/hook/useRouter';
import useIndexPage from './Index.hook';


function Index() {
  const {navigate} = useRouter();
  useIndexPage();
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigate("Profile")}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default Index