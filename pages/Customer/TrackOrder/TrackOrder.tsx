import { color } from '@rneui/base'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import VerticalSlider from '../../../components/VerticalSlider/VerticalSlider'
import { paletteGray, paletteGrayShade2, paletteGrayShade4, paletteGreen, paletteGreenBold, palettePink, paletteRed } from '../../../utils/color'

function TrackOrder() {
  return (
    <ScrollView style={{ padding: 10 }}>

      <View style={{
        flexDirection: "row"
      }}>
        <View style={{
          //borderWidth: 1,
          height: 100,
          width: "20%"
        }}>
          <VerticalSlider
            upSideDown
            disabled
            thumbTintColor={paletteRed}
            maximumValue={100}
            minimumValue={0}
            value={30}
            thumbStyle={{
              width: 15,
              height: 15
            }}
            trackStyle={{
              height: 2
            }}
            maximumTrackTintColor={paletteGray}
            minimumTrackTintColor={paletteGray}
            style={{
              width: 100
            }}
          />
        </View>
        <View style={{
          //borderWidth: 1,
          width: "80%",
          justifyContent: "center",
          rowGap: 10
        }}>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Hủy</Text>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Ngày hủy</Text>
        </View>
      </View>

      <View style={{
        flexDirection: "row"
      }}>
        <View style={{
          //borderWidth: 1,
          height: 100,
          width: "20%"
        }}>
          <VerticalSlider
            upSideDown
            disabled
            thumbTintColor={paletteGreenBold}
            maximumValue={100}
            minimumValue={0}
            value={30}
            thumbStyle={{
              width: 15,
              height: 15
            }}
            trackStyle={{
              height: 2
            }}
            maximumTrackTintColor={paletteGray}
            minimumTrackTintColor={paletteGray}
            style={{
              width: 100
            }}
          />
        </View>
        <View style={{
          //borderWidth: 1,
          width: "80%",
          justifyContent: "center",
          rowGap: 10
        }}>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Đã nhận</Text>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Ngày đã nhận</Text>
        </View>
      </View>

      <View style={{
        flexDirection: "row"
      }}>
        <View style={{
          //borderWidth: 1,
          height: 100,
          width: "20%"
        }}>
          <VerticalSlider
            upSideDown
            disabled
            thumbTintColor={paletteGreenBold}
            maximumValue={100}
            minimumValue={0}
            value={30}
            thumbStyle={{
              width: 15,
              height: 15
            }}
            trackStyle={{
              height: 2
            }}
            maximumTrackTintColor={paletteGray}
            minimumTrackTintColor={paletteGray}
            style={{
              width: 100
            }}
          />
        </View>
        <View style={{
          //borderWidth: 1,
          width: "80%",
          justifyContent: "center",
          rowGap: 10
        }}>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Đã nhận</Text>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Ngày đã nhận</Text>
        </View>
      </View>

      <View style={{
        flexDirection: "row"
      }}>
        <View style={{
          //borderWidth: 1,
          height: 100,
          width: "20%"
        }}>
          <VerticalSlider
            upSideDown
            disabled
            thumbTintColor={paletteGreenBold}
            maximumValue={100}
            minimumValue={0}
            value={30}
            thumbStyle={{
              width: 15,
              height: 15
            }}
            trackStyle={{
              height: 2
            }}
            maximumTrackTintColor={paletteGray}
            minimumTrackTintColor={paletteGray}
            style={{
              width: 100
            }}
          />
        </View>
        <View style={{
          //borderWidth: 1,
          width: "80%",
          justifyContent: "center",
          rowGap: 10
        }}>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Đã nhận</Text>
          <Text style={{ fontSize: 16, color: paletteGrayShade4 }}>Ngày đã nhận</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Ghi chú:</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ab distinctio facere officia illo omnis nam? Dicta aspernatur perspiciatis harum ipsam itaque officia cumque animi, odit ipsum inventore, unde molestiae!</Text>
      </View>
    </ScrollView>
  )
}

export default TrackOrder