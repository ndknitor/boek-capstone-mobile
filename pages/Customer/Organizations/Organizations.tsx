import { ScrollView, Image } from 'react-native'
import trackChange from "../../../assets/icons/track-changes-white.png";
import corporateFlare from "../../../assets/icons/corporate-fare-white.png";
import { useTrackedOrganizationsPage, useUnTrackedOrganizationsPage } from './Organizations.hook';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryColor, primaryTint1 } from '../../../utils/color';
import OrganizationView from '../../../components/OrganizationView/OrganizationView';
import Paging from '../../../components/Paging/Paging';
import PageLoader from '../../../components/PageLoader/PageLoader';
import StickyHeaderSearchBar from '../../../components/StickyHeaderSearchBar/StickyHeaderSearchBar';

const Tab = createBottomTabNavigator();

function Organizations() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarInactiveBackgroundColor: primaryColor,
            tabBarActiveBackgroundColor: primaryTint1,
            tabBarStyle: {
                height: 60
            },
            headerShown: false,
            tabBarLabelStyle:
            {
                fontSize: 13,
                color: "white",
                marginBottom: "6%"
            }
        }}>
            <Tab.Screen options={{
                tabBarLabel: "Tổ chức",
                tabBarIcon: () => <Image source={corporateFlare} style={{ height: 20 }} resizeMode="contain" />
            }}
                name="UnTrackedOrganizations"
                component={UnTrackedOrganizations}></Tab.Screen>
            <Tab.Screen
                options={{
                    tabBarLabel: "Đã theo dõi",
                    tabBarIcon: () => <Image source={trackChange} style={{ height: 20 }} resizeMode="contain" />
                }}
                name="TrackedOrganizations"
                component={TrackedOrganizations}></Tab.Screen>
        </Tab.Navigator>
    )
}
function UnTrackedOrganizations() {
    const hook = useUnTrackedOrganizationsPage();
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView
                ref={hook.ref.scrollViewRef}
                stickyHeaderHiddenOnScroll
                stickyHeaderIndices={[0]}>
                <StickyHeaderSearchBar
                    onSubmit={() => hook.event.getOrganization(1)}
                    onChangeText={hook.input.search.set}
                    value={hook.input.search.value} />
                {
                    hook.data.organizations.map((item, index) =>
                        <OrganizationView
                            loading={hook.buttonsLoading[index]}
                            onTrackPress={() => hook.event.onToggleTrackPress(item, index)}
                            organization={item}
                            tracked={hook.input.trackedOrganizationIds.find(o => o == item.id) != undefined} />
                    )
                }
                <Paging currentPage={hook.paging.currentPage} maxPage={hook.paging.maxPage} onPageNavigation={hook.paging.onPageNavigation} />
            </ScrollView>
        </>
    )
}
function TrackedOrganizations() {
    const hook = useTrackedOrganizationsPage();
    return (
        <>
            <PageLoader loading={hook.loading} />
            <ScrollView>
                {
                    hook.data.organizations.map((item, index) =>
                        <OrganizationView
                            onTrackPress={() => hook.event.onTrackPress(item, index)}
                            tracked={hook.input.trackedOrganizationIds.find(o => o == item.id) != undefined}
                            loading={hook.buttonsLoading[index]}
                            organization={item} />
                    )
                }
            </ScrollView>
        </>

    );
}

export default Organizations