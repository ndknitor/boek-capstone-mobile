import React, { useEffect, useRef, useState } from 'react'
import { Animated, TouchableOpacity, View, Image } from 'react-native';
import { Text } from '@react-native-material/core'
import { paletteGrayShade3, paletteGreenShade1, primaryTint1 } from '../../utils/color';
import expandMoreWhite from "../../assets/icons/expand-more-white.png"
import expandLessWhite from "../../assets/icons/expand-less-white.png"
import { Button, CheckBox } from '@rneui/base';
import { CampaignViewModel } from '../../objects/viewmodels/Campaigns/CampaignViewModel';
import { MobileCampaignStaffsViewModel } from '../../objects/viewmodels/CampaignStaff/MobileCampaignStaffsViewModel';
interface StaffCampaignExpandView {
    campaign: MobileCampaignStaffsViewModel;
}
function StaffCampaignExpandView(props: StaffCampaignExpandView) {
    const [isExpanded, setIsExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        Animated.timing(animation, {
            toValue: isExpanded ? 300 : 120,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isExpanded]);
    return (
        <Animated.View
            style={{
                //borderWidth: 1,
                height: animation,
                marginBottom: 15,
            }}>
            <TouchableOpacity
                style={{
                    height: "100%",
                    padding: 15,
                    //borderWidth: 1,
                    borderRadius: 8,
                    //flexDirection: "row",
                    backgroundColor: "white",
                    //height: "100%",

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    elevation: 24
                }}>
                <View style={{
                    flexDirection: "row",
                    height: 80,
                    //borderWidth: 1,
                }}>
                    <View style={{
                        width: "70%",
                        rowGap: 5
                    }}>
                        <Text>Tên hội sách</Text>
                        <Text style={{ fontSize: 14, color: paletteGrayShade3 }}>Ngày</Text>
                        <Text style={{ fontSize: 14, color: paletteGrayShade3 }}>Địa chỉ</Text>
                    </View>
                    <View style={{
                        width: "30%",
                        //height: "100%"
                    }}>
                        <View
                            style={{
                                //borderWidth: 1,
                                height: "50%"
                            }}>
                            <View style={{
                                borderRadius: 3,
                                backgroundColor: paletteGreenShade1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{ color: "white", padding: 5 }}>Trạng thái</Text>
                            </View>
                        </View>
                        <View style={{
                            //borderWidth: 1,
                            height: "50%",
                            alignItems: "flex-end",
                            justifyContent: "flex-end"
                        }}>
                            <Button
                                onPress={handleExpand}
                                buttonStyle={{
                                    //borderWidth: 1,
                                    backgroundColor: primaryTint1,
                                    borderRadius: 999,
                                    width: 25,
                                    height: 25,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Image source={isExpanded ? expandLessWhite : expandMoreWhite} style={{ height: "150%", width: "150%" }} />
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={{
                    display: isExpanded ? "flex" : "none",
                    width: "100%"
                }}>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <CheckBox
                            title={
                                <View style={{
                                    rowGap: 5,
                                    marginLeft: 10
                                }}>
                                    <Text>Địa chỉ</Text>
                                    <Text>Thời gian diễn ra</Text>
                                </View>
                            }
                            checked//={!hook.input.gender.value}
                            checkedIcon="dot-circle-o"
                            //onPress={() => hook.input.gender.set(false)}
                            uncheckedIcon="circle-o"
                            size={17}
                            containerStyle={{ backgroundColor: "transparent" }}
                        />
                    </View>

                    <View style={{
                        flexDirection: "row"
                    }}>
                        <CheckBox
                            title={
                                <View style={{
                                    rowGap: 5,
                                    marginLeft: 10
                                }}>
                                    <Text>Địa chỉ</Text>
                                    <Text>Thời gian diễn ra</Text>
                                </View>
                            }
                            checked//={!hook.input.gender.value}
                            checkedIcon="dot-circle-o"
                            //onPress={() => hook.input.gender.set(false)}
                            uncheckedIcon="circle-o"
                            size={17}
                            containerStyle={{ backgroundColor: "transparent" }}
                        />
                    </View>

                </View>

            </TouchableOpacity>
        </Animated.View>
    )
}

export default StaffCampaignExpandView