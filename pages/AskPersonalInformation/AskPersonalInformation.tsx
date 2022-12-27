import { Button, CheckBox } from '@rneui/base'
import moment from 'moment';
import React, { useRef } from 'react'
import { TextInput, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import editIcon from "../../assets/icons//edit.png";
import { dateFormat } from '../../utils/format';
import useAskPersonalInformationPage from './AskPersonalInformation.hook';


function AskPersonalInformation() {
    const { birth, handleConfirm, isDatePickerVisible, setDatePickerVisibility, gender, setGender } = useAskPersonalInformationPage();
    const nameRef = useRef<TextInput>(null);

    return (
        <View style={{ height: "100%", justifyContent: "center" }}>
            <View>
                <View style={{ alignItems: "center", marginBottom: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>Hãy nhập thông tin cá nhân của bạn</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 60 }}>
                    <View style={styles.label}>
                        <Text>Họ và tên: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "flex-start", paddingRight: 20 }}>
                        <TextInput ref={nameRef} placeholder='Chưa có thông tin' value="Ngô Đình Khôi Nguyên" style={{ textAlign: "right" }} />
                        <Text style={{ color: "red" }}>{""}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={() => nameRef.current?.focus()}>
                            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 60 }}>
                    <View style={styles.label}>
                        <Text>Địa chỉ: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
                        <TextInput ref={nameRef} placeholder='Chưa có thông tin' value="123 From The Dust Univẻcity" />
                        <Text style={{ color: "red" }}>{ }</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={() => nameRef.current?.focus()}>
                            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 60 }}>
                    <View style={styles.label}>
                        <Text>Ngày sinh: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
                        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                            <Text style={{ textAlign: "right" }}>{moment(birth).format(dateFormat)}</Text>
                            <Text style={{ color: "red" }}>{ }</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                            <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 60 }}>
                    <View style={styles.label}>
                        <Text>Giới tính: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "70%", height: "100%", alignItems: "flex-start", justifyContent: "flex-end", flexDirection: "row" }}>
                        <CheckBox
                            title="Nữ"
                            checked={!gender}
                            center
                            checkedIcon="dot-circle-o"
                            onPress={() => setGender(false)}
                            uncheckedIcon="circle-o"
                            containerStyle={{ backgroundColor: "transparent" }} />
                        <CheckBox
                            title="Nam"
                            checked={gender}
                            center
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            onPress={() => setGender(true)}
                            containerStyle={{ backgroundColor: "transparent" }} />
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", height: 60 }}>
                    <View style={styles.label}>
                        <Text>Số điện thoại: <Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={{ width: "60%", height: "100%", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
                        <TextInput value='0969696969' />
                        <Text style={{ color: "red" }}>{ }</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={editIcon} style={{ maxHeight: 25, maxWidth: 25 }} />
                    </View>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Button buttonStyle={{ marginTop: 80, height: 40, borderRadius: 24, minWidth: 224, minHeight: 56, backgroundColor: "#3730A3" }}>Xác nhận</Button>
                </View>
            </View>

            <DateTimePickerModal date={birth} maximumDate={new Date()} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={() => setDatePickerVisibility(false)} />
        </View>
    )
}
const styles = StyleSheet.create({
    label: {
        width: "30%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingTop: 5
    },
    imageContainer: {
        width: "10%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    }
});

export default AskPersonalInformation