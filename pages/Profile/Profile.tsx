import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import TouchCard from '../../component/TouchCard/TouchCard';
import useProfilePage from './Profile.hook';
import avatar from "../../assets/avatar.jpg";
import { Button } from '@rneui/base';
import AuthorizeView from '../../libs/AuthorizeView';
import NonAuthorizeView from '../../libs/NonAuthorizeView';
import GoogleLoginButton from '../../component/GoogleLoginButton/GoogleLoginButton';
import accountWhite from "../../assets/icons/account-circle-white.png";
import useAuth from '../../libs/hook/useAuth';
import { customer, staff } from '../../utils/roles';
import { primaryTint1 } from '../../utils/color';
export interface ProfileProps {
}

function Profile(props: ProfileProps) {
  const hook = useProfilePage(props);
  const { authenticated } = useAuth();
  return (
    // <Authorize>
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: "#1E293B",
        justifyContent: 'center',
        height: 176
      }}>
        <View style={styles.headerOuter}>
          <View style={{
            minWidth: "30%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <View style={{
              borderWidth: 2,
              borderColor: "#064E3B",
              height: 113,
              width: 113,
              borderRadius: 9999,
              overflow: "hidden"
            }}>
              <Image source={authenticated ? avatar : accountWhite} style={{
                width: "100%",
                height: "100%"
              }} resizeMode="cover" />
            </View>
          </View>

          <View style={{
            minWidth: "75%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <View style={{ minWidth: "87%" }}>
              <AuthorizeView>
                <Text style={styles.infoName}>Ngo Dinh Khoi Nguyen</Text>
                <Text style={{ color: "white" }}>ndkn@gmail.com</Text>
                <View style={{ marginTop: 10 }}></View>
                <Text style={{ color: "white", fontWeight: "600" }}>Level : 1</Text>
                <Text style={{ color: "white", fontWeight: "600" }}>Số điểm : 69</Text>
              </AuthorizeView>
              <NonAuthorizeView>
                <Text style={{ color: "white", fontSize: 16, marginBottom: 10 }}>Chào mừng bạn đến với Boek</Text>
                <View style={{ width: "50%" }} >
                  <GoogleLoginButton onSuccess={hook.googleLoginOnSuccess} />
                </View>
              </NonAuthorizeView>
            </View>
          </View>
        </View>
      </View>

      <AuthorizeView roles={[staff]}>

      </AuthorizeView>
      <AuthorizeView roles={[customer]}>
        <TouchCard label="Thông tin cá nhân" onPress={async () => await hook.authorizeNavigate("PersonalInformation")} />
        <TouchCard label="Đơn hàng" onPress={async () => await hook.authorizeNavigate("Orders")} />
        {/* <TouchCard label="Sách của tôi"/> */}
        <TouchCard label="Thể loại sách yêu thích" onPress={async () => await hook.authorizeNavigate("AskGenres")} />
        <TouchCard label="Tổ chức quan tâm" onPress={async () => await hook.authorizeNavigate("Organizations")} />
      </AuthorizeView>
      <NonAuthorizeView>
        <TouchCard label="Thông tin cá nhân" onPress={async () => await hook.authorizeNavigate("PersonalInformation")} />
        <TouchCard label="Đơn hàng" onPress={async () => await hook.authorizeNavigate("Orders")} />
        {/* <TouchCard label="Sách của tôi"/> */}
        <TouchCard label="Thể loại sách yêu thích" onPress={async () => await hook.authorizeNavigate("AskGenres")} />
        <TouchCard label="Tổ chức quan tâm" onPress={async () => await hook.authorizeNavigate("Organizations")} />
      </NonAuthorizeView>
      <AuthorizeView>
        <View style={{ width: "100%", paddingTop: 100, alignItems: "center", justifyContent: "center" }}>
          <Button
            onPress={hook.logout}
            buttonStyle={{
              height: 40,
              borderRadius: 24,
              minWidth: 224,
              minHeight: 56,
              backgroundColor: primaryTint1
            }}>Đăng xuất</Button>
        </View>
      </AuthorizeView>
    </View >
    // </Authorize>
  )
}

const styles = StyleSheet.create({
  headerOuter: {
    minHeight: 96,
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    flexDirection: "row"
  },
  infoName: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 28
  },
  space: {
    minHeight: 80
  }
});
//text-white font-semibold text-lg
export default Profile