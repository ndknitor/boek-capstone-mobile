import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TouchCard from '../../component/TouchCard/TouchCard';

function Profile() {
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
              <Text style={{ color: "white" }}>ditmemay@gmail.com</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.body}>

        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />
        <TouchCard label="Thông tin" />

        <View style={styles.space} />

        <View style={{
          height : 40,
          borderRadius: 24, minWidth: 224, minHeight: 56, backgroundColor: "#3730A3",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.47,
          shadowRadius: 8.65,
          elevation: 10
        }}>
          <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", minHeight: 56 }} >
            <Text style={{ fontSize: 18, lineHeight: 28, color: "white" }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>

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
    minWidth: "75%"
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