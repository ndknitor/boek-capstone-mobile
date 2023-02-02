import { Button, Input } from '@rneui/themed'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SelectedChip from '../../../components/SeletedChip/SelectedChip';
import StateLoader from '../../../components/StateLoader/StateLoader';
import useRouter from '../../../libs/hook/useRouter';
import { paletteRed, primaryColor } from '../../../utils/color';
import useAskGenrePage from './AskGenres.hook'
interface AskGenresProps {
    skiped?: boolean;
}
function AskGenres(props: AskGenresProps) {
    const { replace } = useRouter();
    const { searchMessage, onAskGenresSubmit, submitLoader } = useAskGenrePage();
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ marginBottom: 10 }}>Bạn yêu thích thể loại sách nào ?</Text>
            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                style={{ width: "95%", maxHeight: "30%", minHeight: "30%", marginBottom: 30 }}>

                <SelectedChip label="Tình cảm" selected />
                <SelectedChip label="Kinh dị" />
                <SelectedChip label="Hành động" selected />
                <SelectedChip label="Nhập vai" />
                <SelectedChip label="Văn học" />
                <SelectedChip label="Trinh thám" />
                <SelectedChip label="Khiêu dâm" selected />
                <SelectedChip label="Hài hước" />
                <SelectedChip label="Lịch sử" />
                <SelectedChip label="Khoa học" />
                <SelectedChip label="Tiểu thuyết" />
                <SelectedChip label="Triết học" />
                <SelectedChip label="Viễn tưởng" />
                <SelectedChip label="Tâm lý" />
                <SelectedChip label="Châm biếm" />
                <SelectedChip label="Xã hội" />
                <SelectedChip label="Luật pháp" />
                <SelectedChip label="Toán học" />
                <SelectedChip label="Gia Đình" />
                <SelectedChip label="Ảo thuật" />
                <SelectedChip label="Địa lý" />
                <SelectedChip label="Hóa học" />
                <SelectedChip label="Kỹ thuật" />

            </ScrollView>
            <Input placeholder="Tìm kiếm thể loại" />
            <Text style={{ color: "red", marginBottom: 20 }}>{searchMessage}</Text>

            <View style={{ flexDirection: "row" }}>
                {
                    props.skiped &&
                    <Button onPress={() => replace("AskOrganizations")} buttonStyle={{ borderRadius: 12, width: 120, height: 50, backgroundColor: paletteRed }}>
                        Bỏ qua
                    </Button>
                }
                <View style={{ marginLeft: 10, marginRight: 10 }} />
                <StateLoader loading={submitLoader} style={{ width: 120, height: 50 }}>
                    <Button onPress={onAskGenresSubmit} buttonStyle={{ borderRadius: 12, height: "100%", backgroundColor: primaryColor }}>
                        Xác nhận
                    </Button>
                </StateLoader>
            </View>

        </View>
    )
}

export default AskGenres