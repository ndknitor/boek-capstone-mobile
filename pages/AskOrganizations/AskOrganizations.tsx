import { Button, Input } from '@rneui/base'
import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import SelectedChip from '../../component/SeletedChip/SelectedChip'
import StateLoader from '../../component/StateLoader/StateLoader'
import useRouter from '../../libs/hook/useRouter'
import { paletteRed, primaryColor } from '../../utils/color'
import useAskOrganizationsPage from './AskOrganizations.hook'

function AskOrganizations() {
    const { replace } = useRouter();
    const { searchMessage, onAskOrganizationsSubmit, submitLoader } = useAskOrganizationsPage();


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ marginBottom: 10 }}>Bạn muốn theo dõi hội sách từ tổ chức nào ?</Text>
            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                style={{ width: "95%", maxHeight: "30%", minHeight: "30%", marginBottom: 30 }}>

                <SelectedChip label="FPT" selected />
                <SelectedChip label="Viettel" />
                <SelectedChip label="VNPT" />
                <SelectedChip label="Vinaporn" />
                <SelectedChip label="Kim Đồng" />
                <SelectedChip label="Lều báo" />
                <SelectedChip label="FPT" selected />
                <SelectedChip label="Viettel" />
                <SelectedChip label="VNPT" />
                <SelectedChip label="Vinaporn" />
                <SelectedChip label="Kim Đồng" />
                <SelectedChip label="Lều báo" />
                <SelectedChip label="FPT" selected />
                <SelectedChip label="Viettel" />
                <SelectedChip label="VNPT" />
                <SelectedChip label="Vinaporn" />
                <SelectedChip label="Kim Đồng" />
                <SelectedChip label="Lều báo" />

            </ScrollView>
            <Input placeholder="Tìm kiếm tổ chức" />
            <Text style={{ color: "red", marginBottom: 20 }}>{searchMessage}</Text>

            <View style={{ flexDirection: "row" }}>
                <Button onPress={() => replace("Index")} buttonStyle={{ borderRadius: 12, width: 120, height: 50, backgroundColor: paletteRed }}>
                    Bỏ qua
                </Button>
                <View style={{ marginLeft: 10, marginRight: 10 }} />
                <StateLoader loading={submitLoader} style={{ width: 120, height: 50 }}>
                    <Button onPress={onAskOrganizationsSubmit} buttonStyle={{ borderRadius: 12, width: 120, height: 50, backgroundColor: primaryColor }}>
                        Xác nhận
                    </Button>
                </StateLoader>
            </View>

        </View>
    )
}

export default AskOrganizations