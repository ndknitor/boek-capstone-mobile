import React from 'react'
import { ScrollView, TouchableOpacity, View, Image } from 'react-native'
import { Text } from '@react-native-material/core'
import PageLoader from '../../../components/PageLoader/PageLoader'
import StickyHeaderSearchBar from '../../../components/StickyHeaderSearchBar/StickyHeaderSearchBar'
import { primaryTint1 } from '../../../utils/color'
import Shadow from '../../../components/Shadow/Shadow'
import range from '../../../libs/functions/range'
import Paging from '../../../components/Paging/Paging'
import { Button } from '@rneui/base'
import StaffCampaignExpandView from '../../../components/StaffCampaignExpandView/StaffCampaignExpandView'
import { MobileCampaignStaffsViewModel } from '../../../objects/viewmodels/CampaignStaff/MobileCampaignStaffsViewModel'
import useRouter from '../../../libs/hook/useRouter'

function CreateChooseCampaignOrder() {
    const { push } = useRouter();
    return (
        <>
            <PageLoader loading={false} />
            <ScrollView
                style={{
                    backgroundColor: "white"
                }}
                stickyHeaderHiddenOnScroll
                stickyHeaderIndices={[0]}>
                <StickyHeaderSearchBar />
                <View style={{ padding: 20 }}>
                    {
                        range(0, 10).map(item =>
                            <StaffCampaignExpandView campaign={{} as MobileCampaignStaffsViewModel} />
                        )
                    }
                    <Paging maxPage={100} currentPage={1} />
                </View>
            </ScrollView>
            <View>
                <Button
                    onPress={() => push("CreateChooseHaveAccountOrder")}
                    buttonStyle={{
                        backgroundColor: primaryTint1,
                        //height: "10%"
                    }}>Tiếp theo</Button>
            </View>
        </>
    )
}

export default CreateChooseCampaignOrder