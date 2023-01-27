import { Button, CheckBox } from '@rneui/themed';
import moment from 'moment';
import React, { useRef } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import editIcon from "../../../assets/icons/edit.png";
import avatar from "../../../assets/avatar.jpg";
import usePersonalInformationPage from './PersonalInformation.hook';
import DateTimePickerInput from "../../../component/DateTimePickerInput/DateTimePickerInput";
import AuthorizeView from "../../../libs/AuthorizeView";
import { Role } from "../../../objects/enums/Role";
import { getMessage } from '../../../utils/Validators';
import PageLoader from '../../../component/PageLoader/PageLoader';
import SelectDropdown from 'react-native-select-dropdown';
import { GeoLocate } from '../../../objects/enums/GeoLocate';
import { paletteGrayShade5 } from '../../../utils/color';

function PersonalInformation() {
  const hook = usePersonalInformationPage();

  return (
    <>
      <PageLoader loading={hook.loading} />
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.avatarWarp}>
            <View style={styles.avatarRing}>
              <Image source={avatar} style={{ width: "100%", height: "100%" }} resizeMode="cover" />

            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
          <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
            <Text>Email:</Text>
          </View>
          <View style={{ width: "70%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
            <Text >{hook.data.email}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
          <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
            <Text>Họ và tên:</Text>
          </View>
          <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
            <TextInput
              ref={hook.ref.inputNameRef}
              placeholder='Chưa có thông tin'
              value={hook.input.name.value}
              onChangeText={hook.input.name.set}
              style={{ textAlign: "right" }} />
            <Text style={{ color: "red" }}>{getMessage(hook.validator, "name")}</Text>
          </View>
          <View style={{ width: "10%", height: "80%", alignItems: "flex-start", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => hook.ref.inputNameRef.current?.focus()}>
              <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
            </TouchableOpacity>
          </View>
        </View>

        <AuthorizeView roles={[Role.customer.toString()]}>
          <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
            <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
              <Text>Giới tính:</Text>
            </View>
            <View style={{ width: "70%", height: "100%", alignItems: "flex-end", justifyContent: "flex-end", flexDirection: "row" }}>
              <CheckBox
                title="Nữ"
                checked={!hook.input.gender.value}
                center
                checkedIcon="dot-circle-o"
                onPress={() => hook.input.gender.set(false)}
                uncheckedIcon="circle-o"
                containerStyle={{ backgroundColor: "transparent" }} />
              <CheckBox
                title="Nam"
                checked={hook.input.gender.value}
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={() => hook.input.gender.set(true)}
                containerStyle={{ backgroundColor: "transparent" }} />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
            <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
              <Text>Ngày sinh:</Text>
            </View>
            <View style={{ width: "70%", height: "100%" }}>
              <DateTimePickerInput
                value={hook.input.birth.value}
                onConfirm={hook.input.birth.set}
                maximumDate={new Date()}
                icon={() => <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />}
                hideReset />
              <Text style={{ color: "red" }}>{getMessage(hook.validator, "dob")}</Text>
            </View>
          </View>
        </AuthorizeView>

        <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
          <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
            <Text>Địa chỉ:</Text>
          </View>
          <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
            <View style={{ alignItems: "flex-end" }}>
              <SelectDropdown
                ref={hook.ref.inputAddressRef}
                renderDropdownIcon={() => <></>}
                buttonStyle={{ width: "100%", justifyContent: "flex-end" }}
                buttonTextStyle={{
                  fontSize: 14,
                  textAlign: "right",
                  color: hook.input.address.value === "" ? "black" : paletteGrayShade5
                }}
                defaultButtonText="Chọn địa điểm"
                onChangeSearchInputText={() => { console.log("Hello") }}
                data={Object.values(GeoLocate).filter(l => typeof (l) == "string")}
                onSelect={(selectedItem, index) => {
                  hook.input.address.set(selectedItem as string);
                  console.log(hook.input.address.value);
                  
                  
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
            </View>
            <Text style={{ color: "red" }}>{getMessage(hook.validator, "address")}</Text>
          </View>
          <View style={{ width: "10%", height: "80%", alignItems: "flex-start", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => hook.ref.inputAddressRef.current?.openDropdown()}>
              <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 60 }}>
          <View style={{ width: "30%", height: "100%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
            <Text>Số điện thoại:</Text>
          </View>
          <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
            <TextInput
              placeholder="Chưa có thông tin"
              ref={hook.ref.inputPhoneRef}
              keyboardType="numeric"
              value={hook.input.phone.value}
              onChangeText={hook.input.phone.set}
              style={{ textAlign: "right" }} />
            <Text style={{ color: "red" }}>{getMessage(hook.validator, "phone")}</Text>
          </View>
          <View style={{ width: "10%", height: "80%", alignItems: "flex-start", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => hook.ref.inputPhoneRef.current?.focus()}>
              <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
            </TouchableOpacity>
          </View>
        </View>
        {
          hook.buttonShowed &&
          <View style={{ alignItems: "center" }}>
            <Button onPress={hook.event.onSubmit} buttonStyle={{ marginTop: 80, height: 40, borderRadius: 24, minWidth: 224, minHeight: 56, backgroundColor: "#3730A3" }}>Lưu thay đổi</Button>
          </View>
        }
      </View>
    </>

  )
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#1E293B",
    justifyContent: 'center',
    height: 180
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
    height: 126,
    width: 126,
    borderRadius: 9999,
    overflow: "hidden"
  }
});


export default PersonalInformation