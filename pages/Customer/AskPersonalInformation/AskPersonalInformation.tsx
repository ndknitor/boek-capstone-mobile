import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, CheckBox } from '@rneui/base'
import React from 'react'
import { TextInput, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import DateTimePickerInput from '../../../component/DateTimePickerInput/DateTimePickerInput';
import { getMessage } from '../../../utils/Validators';
import editIcon from "../../../assets/icons/edit.png";
import useAskPersonalInformationPage from './AskPersonalInformation.hook';
import SelectDropdown from 'react-native-select-dropdown';
import { GeoLocate } from '../../../objects/enums/GeoLocate';
import { paletteGrayShade5 } from '../../../utils/color';

function AskPersonalInformation(props: StackScreenProps<ParamListBase>) {
    const hook = useAskPersonalInformationPage(props);

    return (
        <View style={{ height: "100%", justifyContent: "center" }}>
            <View>
                <View style={{ alignItems: "center", marginBottom: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>Hãy nhập thông tin cá nhân của bạn</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                    <View style={styles.label}>
                        <Text>Họ và tên: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput ref={hook.ref.fullNameInputRef}
                            placeholder='Chưa có thông tin'
                            value={hook.input.fullName.value}
                            onChangeText={hook.input.fullName.set}
                            style={{ textAlign: "right" }} />
                        <Text style={styles.validationMessage}>{getMessage(hook.validator, "name")}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={() => hook.ref.fullNameInputRef.current?.focus()}>
                            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                    <View style={styles.label}>
                        <Text>Giới tính: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "70%", height: "100%", alignItems: "flex-start", justifyContent: "flex-end", flexDirection: "row" }}>
                        <CheckBox
                            checked={!hook.input.gender.value}
                            onPress={() => hook.input.gender.set(false)}
                            title="Nữ"
                            center
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            containerStyle={{ backgroundColor: "transparent" }} />
                        <CheckBox
                            checked={hook.input.gender.value}
                            onPress={() => hook.input.gender.set(true)}
                            title="Nam"
                            center
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            containerStyle={{ backgroundColor: "transparent" }} />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: "row", maxWidth: "100%", minHeight: 70 }}>
                    <View style={{ width: "30%", height: "60%", alignItems: "flex-start", justifyContent: "center", paddingLeft: 10 }}>
                        <Text>Địa chỉ: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
                    <View style={{ alignItems: "flex-end" }}>
                            <SelectDropdown
                                ref={hook.ref.addressInputRef}
                                defaultValueByIndex={Object.values(GeoLocate).filter(l => typeof (l) == "string").indexOf(hook.input.address.value)}
                                renderDropdownIcon={() => <></>}
                                buttonStyle={{ width: "100%", justifyContent: "flex-end" }}
                                buttonTextStyle={{ fontSize: 14, textAlign: "right", color: hook.input.address.value !== "" ? "black" : paletteGrayShade5 }}
                                defaultButtonText="Chọn địa điểm"
                                onChangeSearchInputText={() => { console.log("Hello") }}
                                data={Object.values(GeoLocate).filter(l => typeof (l) == "string")}
                                onSelect={(selectedItem, index) => {
                                    hook.input.address.set(selectedItem);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View>
                        <Text style={{ color: "red" }}>{getMessage(hook.validator, "address")}</Text>
                    </View>
                    <View style={{ width: "10%", height: "80%", alignItems: "flex-start", justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => hook.ref.addressInputRef.current?.openDropdown()}>
                            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                    <View style={styles.label}>
                        <Text>Ngày sinh: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "70%", height: "100%", alignItems: "flex-end", justifyContent: "center" }}>
                        <View style={{ height: "60%" }}>
                            <DateTimePickerInput
                                value={hook.input.birth.value}
                                onConfirm={hook.input.birth.set}
                                maximumDate={new Date()}
                                icon={() => <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />}
                                hideReset />
                        </View>
                        <View style={{ height: "40%", paddingRight: "20%" }}>
                            <Text style={styles.validationMessage} >{getMessage(hook.validator, "dob")}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                    <View style={styles.label}>
                        <Text>Số điện thoại: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{
                                textAlign: "right"
                            }}
                            ref={hook.ref.phoneInputRef}
                            value={hook.input.phone.value}
                            onChangeText={hook.input.phone.set}
                            placeholder="Chưa có thông tin"
                            keyboardType="numeric" />
                        <Text style={styles.validationMessage}>{getMessage(hook.validator, "phone")}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={() => hook.ref.phoneInputRef.current?.focus()}>
                            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Button onPress={hook.onSubmit} buttonStyle={{ marginTop: 80, height: 40, borderRadius: 24, minWidth: 224, minHeight: 56, backgroundColor: "#3730A3" }}>Xác nhận</Button>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    label: {
        //borderWidth: 1,
        width: "30%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingTop: 5
    },
    inputContainer: {
        //borderWidth: 1,
        width: "60%",
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        paddingRight: 20
    },
    imageContainer: {
        //borderWidth: 1,
        width: "100%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    validationMessage:
    {
        color: "red"
    }
});

export default AskPersonalInformation