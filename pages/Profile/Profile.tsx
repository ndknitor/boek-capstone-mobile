import { Button, Switch } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TouchCard from '../../component/TouchCard/TouchCard';
import useRouter from '../../libs/hook/useRouter';
import { primaryColor } from '../../utils/color';

function Profile() {
  const { navigate } = useRouter();
  return (
    // <Authorize>
    <View>

      <View style={styles.headerContainer}>
        <View style={styles.headerOuter}>
          <View style={styles.avatarWarp}>
            <View style={styles.avatarRing}>

            </View>
          </View>

          <View style={styles.infoWarp}>
            <View style={styles.infoInner}>
              <Text style={styles.infoName}>Ngo Dinh Khoi Nguyen</Text>
              <Text style={{ color: "white" }}>ndkn@gmail.com</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.body}>


        <TouchCard label="Thông tin cá nhân" onPress={() => navigate("PersonalInformation")} />
        <TouchCard label="Thể loại yêu thích" />
        <TouchCard label="Tổ chức quan tâm" />

        <TouchableOpacity
          style={{
            minHeight: 50,
            borderBottomWidth: 2,
            borderBottomColor: "#CBD5EB",
            width: "100%",
            paddingTop: 12,
            paddingBottom: 12,
            flex: 1,
            flexDirection: "row"
          }}>
          <View style={{ width: "75%", paddingLeft: 12 }}>
            <Text>Khóa sinh trắc học</Text>
          </View>
          <View style={{ minWidth: "25%", paddingLeft: 12, flex: 1, alignItems: "flex-end" }}>
            <Switch />
          </View>
        </TouchableOpacity>


        <Button buttonStyle={{ marginTop: 80, height: 40, borderRadius: 24, minWidth: 224, minHeight: 56, backgroundColor: primaryColor }}>Đăng xuất</Button>

      </View>
    </View>
    // </Authorize>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#1E293B",
    justifyContent: 'center',
    height: 176
  },
  headerOuter: {
    minHeight: 96,
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    flexDirection: "row"
  },
  avatarWarp: {
    minWidth: "25%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  avatarRing: {
    borderWidth: 2,
    borderColor: "#064E3B",
    height: 96,
    width: 96,
    borderRadius: 9999
  },
  infoWarp: {
    minWidth: "75%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  infoInner: {
    minWidth: "87%"
  },
  infoName: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 28
  },
  body: {
    alignItems: "center"
  },
  space: {
    minHeight: 80
  }
});
//text-white font-semibold text-lg
export default Profile