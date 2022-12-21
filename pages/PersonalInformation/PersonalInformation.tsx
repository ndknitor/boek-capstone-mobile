import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from '@rneui/themed';
import moment from 'moment';
import React, { useRef, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import editIcon from "../../assets/edit.png";
import { dateFormat } from '../../utils/format';
import usePersonalInformationPage from './PersonalInformation.hook';

function PersonalInformation() {
  const { birth, handleConfirm, isDatePickerVisible, setDatePickerVisibility } = usePersonalInformationPage();
  const nameRef = useRef<TextInput>(null);
  const birthRef = useRef(null);

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.avatarWarp}>
          <View style={styles.avatarRing}>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
        <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
          <Text>Email:</Text>
        </View>
        <View style={{ width: "70%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
          <Text style={{ fontSize: 16 }} >ndkn@gmail.com</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
        <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
          <Text>Họ và tên:</Text>
        </View>
        <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
          <TextInput ref={nameRef} placeholder='Chưa có thông tin' value="Ngô Đình Khôi Nguyên" style={{ textAlign: "right" }} />
        </View>
        <View style={{ width: "10%", height: "100%", alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => nameRef.current?.focus()}>
            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
        <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
          <Text>Địa chỉ:</Text>
        </View>
        <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
          <TextInput ref={nameRef} placeholder='Chưa có thông tin' value="123 From The Dust Univẻcity" style={{ textAlign: "right" }} />
        </View>
        <View style={{ width: "10%", height: "100%", alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => nameRef.current?.focus()}>
            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
        <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
          <Text>Ngày sinh:</Text>
        </View>
        <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
          <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
            <Text style={{ textAlign: "right" }}>{moment(birth).format(dateFormat)}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "10%", height: "100%", alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
        <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
          <Text>Số điện thoại:</Text>
        </View>
        <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
          <TextInput value='0969696969' />
        </View>
        <View style={{ width: "10%", height: "100%", alignItems: "flex-start", justifyContent: "center" }}>
          <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Button buttonStyle={{ marginTop: 80, height: 40, borderRadius: 24, minWidth: 224, minHeight: 56, backgroundColor: "#3730A3" }}>Lưu</Button>
      </View>

      <DateTimePickerModal date={birth} maximumDate={new Date()} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={() => setDatePickerVisibility(false)} />
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#1E293B",
    justifyContent: 'center',
    height: 140
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
  }
});


export default PersonalInformation