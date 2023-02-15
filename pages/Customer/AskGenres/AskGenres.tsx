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
    const hook = useAskGenrePage();

    const mock = [
        "Tình cảm",
        "Kinh dị",
        "Hành động",
        "Nhập vai",
        "Văn học",
        "Trinh thám",
        "Khiêu dâm",
        "Hài hước",
        "Lịch sử",
        "Khoa học",
        "Tiểu thuyết",
        "Triết học",
        "Viễn tưởng",
        "Tâm lý",
        "Châm biếm",
        "Xã hội",
        "Luật pháp",
        "Toán học",
        "Gia Đình",
        "Ảo thuật",
        "Địa lý",
        "Hóa học",
        "Kỹ thuật"
    ];
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ marginBottom: 10 }}>Bạn yêu thích thể loại sách nào ?</Text>
            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}
                style={{ width: "95%", maxHeight: "30%", minHeight: "30%", marginBottom: 30 }}>
                {
                    hook.data.groupsSelect.map(item =>
                        <View style={{ margin: 5 }}>
                            <SelectedChip
                                label={item.name}
                                onPress={() => hook.event.onGroupsSelected(item)}
                                selected={hook.input.selectedGroups.find(g => g == item.id) != undefined} />
                        </View>
                    )
                }
            </ScrollView>
            <Input placeholder="Tìm kiếm thể loại" />
            <Text style={{ color: "red", marginBottom: 20 }}>{hook.searchMessage}</Text>

            <View style={{ flexDirection: "row" }}>
                {
                    props.skiped &&
                    <Button onPress={() => hook.event.onAskGenresSubmit(true)} buttonStyle={{ borderRadius: 12, width: 120, height: 50, backgroundColor: paletteRed }}>
                        Bỏ qua
                    </Button>
                }
                <View style={{ marginLeft: 10, marginRight: 10 }} />
                <StateLoader loading={hook.loading} style={{ width: 120, height: 50 }}>
                    <Button onPress={() =>  hook.event.onAskGenresSubmit(false)} buttonStyle={{ borderRadius: 12, height: "100%", backgroundColor: primaryColor }}>
                        Xác nhận
                    </Button>
                </StateLoader>
            </View>

        </View>
    )
}

export default AskGenres