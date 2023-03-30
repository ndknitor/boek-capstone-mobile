import React from 'react'
import { TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { Text, TextInput } from '@react-native-material/core'
import Shadow from '../../../components/Shadow/Shadow'
import { useCreateChooseHaveAccountOrderPage } from './CreateChooseHaveAccountOrder.hook'
import { StackScreenProps } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { paletteGray, primaryColor, primaryTint1 } from '../../../utils/color'
import personBlack from "../../../assets/icons/person-black.png";
import personWhite from "../../../assets/icons/person-white.png";
import helpBlack from "../../../assets/icons/help-black.png";
import helpWhite from "../../../assets/icons/help-white.png";
import { Button } from '@rneui/base'
import useRouter from '../../../libs/hook/useRouter'

function CreateChooseHaveAccountOrder(props: StackScreenProps<ParamListBase>) {
    const { push } = useRouter();
    const hook = useCreateChooseHaveAccountOrderPage(props);
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white"
        }}>
            <View style={{
                //borderWidth: 1,
                height: "15%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text variant='h5' style={{ textAlign: "center" }}>Khách hàng đã có tài khoản chưa?</Text>
            </View>
            <View style={{
                //borderWidth: 1,
                height: "30%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 60
            }}>
                <View>
                    <Shadow style={{
                        backgroundColor: hook.input.haveAccount.value ? primaryColor : "white",
                        width: 120,
                        height: 120,
                        borderRadius: 24,
                    }}>
                        <TouchableOpacity
                            onPress={() => hook.input.haveAccount.set(true)}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%"
                            }}>
                            <Image source={!hook.input.haveAccount.value ? personBlack : personWhite
                            } style={{
                                width: "50%",
                                height: "50%"
                            }} />
                        </TouchableOpacity>
                    </Shadow>
                    <View style={{
                        alignItems: "center",
                        marginTop: "10%"
                    }}>
                        <Text style={{ fontSize: 18 }}>Có</Text>
                    </View>
                </View>

                <View>
                    <Shadow style={{
                        backgroundColor: hook.input.haveAccount == undefined || hook.input.haveAccount.value == false ? primaryColor : "white",
                        width: 120,
                        height: 120,
                        borderRadius: 24,

                    }}>
                        <TouchableOpacity
                            onPress={() => hook.input.haveAccount.set(false)}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%"
                            }}>
                            <Image source={hook.input.haveAccount == undefined || hook.input.haveAccount.value == false ? helpWhite : helpBlack} style={{
                                width: "50%",
                                height: "50%"
                            }} />
                        </TouchableOpacity>

                    </Shadow>
                    <View style={{
                        alignItems: "center",
                        marginTop: "10%"
                    }}>
                        <Text style={{ fontSize: 18 }}>Chưa</Text>
                    </View>
                </View>

            </View>
            <View style={{
                //borderWidth: 1,
                height: "45%"
            }}>
                <ScrollView
                    contentContainerStyle={{
                        rowGap: 20,
                        alignItems: "center"
                    }}
                    style={{
                        display: hook.input.haveAccount.value == false ? "flex" : "none",
                        padding: 10,
                    }}>
                    <View style={{ width: "90%" }}>
                        <Text style={{ fontSize: 16 }}>Họ và tên <Text style={{ color: "red" }}>*</Text></Text>
                        <TextInput
                            placeholder='Nguyễn Văn A'
                            inputContainerStyle={{ backgroundColor: "transparent" }} />
                    </View>
                    <View style={{ width: "90%" }}>
                        <Text style={{ fontSize: 16 }}>SĐT <Text style={{ color: "red" }}>*</Text></Text>
                        <TextInput
                            placeholder='0908xxxxxx'
                            inputContainerStyle={{ backgroundColor: "transparent" }} />
                    </View>
                    <View style={{ width: "90%" }}>
                        <Text style={{ fontSize: 16 }}>Email <Text style={{ color: "red" }}>*</Text></Text>
                        <TextInput
                            placeholder='nguyenvana123@gmail.com'
                            inputContainerStyle={{ backgroundColor: "transparent" }} />
                    </View>
                </ScrollView>
            </View>
            <View style={{
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                paddingLeft: "30%",
                paddingRight: "30%"
            }}>
                <Button
                    onPress={hook.event.skip}
                    buttonStyle={{ backgroundColor: paletteGray, width: 160 }}>
                    Bỏ qua
                </Button>
                <View style={{ width: "20%" }} />
                <Button
                    disabled={hook.input.haveAccount.value == undefined}
                    onPress={hook.event.next}
                    title="Tiếp theo"
                    buttonStyle={{ backgroundColor: primaryTint1, width: 160 }} />
            </View>
        </View>
    )
}

export default CreateChooseHaveAccountOrder