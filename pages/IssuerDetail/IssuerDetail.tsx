import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React, { useEffect } from 'react'
import { ScrollView, View, Image, Text } from 'react-native';
import avatar from "../../assets/avatar.jpg";
import TitleFlatBooks from '../../component/TitleFlatBooks/TitleFlatBooks';
import TitleTabebFlatBooks from '../../component/TitleTabedFlatBooks/TitleTabedFlatBooks';
import PageProps from '../../objects/schemes/PageProps';
import { shade1 } from '../../utils/color';
import { books } from '../../utils/mock';
interface IssuerDetailProps extends PageProps {

}
function IssuerDetail(props: IssuerDetailProps) {
    useEffect(() => {
        props.navigation.setOptions({
            title: "Tên nhà phát hành"
        });
    }, []);
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View
                style={{
                    height: 160,
                    flexDirection: "row"
                }}>
                <View style={{
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{ borderRadius: 999, overflow: "hidden" }}>
                        <Image
                            source={avatar}
                            resizeMode="cover"
                            style={{
                                width: 130,
                                height: 130
                            }} />
                    </View>
                </View>
                <View style={{
                    width: "60%",
                    justifyContent: "center"
                }}>
                    <Text style={{ fontSize: 16, margin: 5 }}>Tên</Text>
                    <Text style={{ fontSize: 16, margin: 5 }}>SDT: </Text>
                    <Text style={{ fontSize: 16, margin: 5 }}>Địa chỉ:</Text>
                    <Text style={{ fontSize: 16, margin: 5 }}>Email:</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10, marginTop: 10 }}>Chính sách</Text>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quia eius accusamus, non perferendis possimus fugit. Ratione veritatis sit fugit sint ipsum asperiores quis voluptatibus corporis, accusantium blanditiis quod perspiciatis!</Text>
                <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10, marginTop: 10 }}>Quà tặng</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eveniet reprehenderit sit impedit architecto ratione numquam! Ad, in obcaecati? Doloremque, quis. Quo doloribus ut voluptatibus provident, amet illum sapiente doloremque?</Text>
                
                <TitleFlatBooks data={books} title="Sách giảm giá" />
                <TitleTabebFlatBooks title="Thể loại 1" data={[
                    {
                        tabLabel: "Thể loại 1",
                        tabData: books
                    },
                    {
                        tabLabel: "Thể loại 1",
                        tabData: books
                    },
                    {
                        tabLabel: "Thể loại 1",
                        tabData: books
                    },
                ]} />
            </View>

        </ScrollView>
    )
}

export default IssuerDetail