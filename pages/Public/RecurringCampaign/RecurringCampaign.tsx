import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import moment from 'moment';
import React from 'react'
import { FlatList, View, Text, ScrollView, Image } from 'react-native'
import LabeledImage from '../../../components/LabeledImage/LabeledImage';
import { paletteGray, primaryTint1 } from '../../../utils/color';
import { dateFormat, dateTimeFormat } from '../../../utils/format';
import useRecurringCampaignPage from './RecurringCampaign.hook'

function RecurringCampaign(props: StackScreenProps<ParamListBase>) {
  const hook = useRecurringCampaignPage(props);
  return (
    <ScrollView style={{ padding: 10 }}>
      {/* <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 3, marginTop: 10 }}>Tổ chức</Text> */}
      {
        hook.data.campaign?.organizations?.map(organization =>
          <View style={{
            borderTopWidth: 1,
            //borderRadius: 12,
            borderColor: primaryTint1,
            marginBottom: 10
          }}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5
            }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 999,
                  overflow: "hidden",
                }}>
                <Image source={{ uri: organization.imageUrl }} style={{ width: 50, height: 50 }} resizeMode="cover" />
              </View>
              <View style={{ paddingLeft: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>{organization.name}</Text>
              </View>
            </View>
            {
              organization.schedules?.map(schedule =>
                <View style={{
                  marginTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: paletteGray,
                  padding: 5
                }}>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}><Text style={{fontWeight : "600"}}>Địa điểm: </Text>{schedule.address}</Text>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}><Text style={{fontWeight : "600"}}>Thời gian diễn ra: </Text>{moment(schedule.startDate).format(dateTimeFormat)}</Text>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}><Text style={{fontWeight : "600"}}>Trạng thái: </Text> {schedule.statusName}</Text>
                </View>
              )
            }
          </View>
        )
      }
    </ScrollView>
  )
}

export default RecurringCampaign