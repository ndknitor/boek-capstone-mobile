import { useState } from 'react'
import { ScrollView, Image } from 'react-native'
import { primaryColor } from '../../utils/color';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import trackChange from "../../assets/icons/track-changes-white.png";
import corporateFlare from "../../assets/icons/corporate-fare-white.png";
import OrganizationView from '../../component/OrganizationView/OrganizationView';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Paging from '../../component/Paging/Paging';
import { useTrackedOrganizationsPage, useUnTrackedOrganizationsPage } from './Organizations.hook';
function Organizations() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "0", title: 'Tổ chức' },
        { key: "1", title: 'Đã theo dõi' }
    ]);
    const getTabBarIcon = (props: any) => {
        const { route } = props
        if (route.key == 0) {
            return <Image source={corporateFlare} style={{ height: 20 }} resizeMode="contain" />
        }
        if (route.key == 1) {
            return <Image source={trackChange} style={{ height: 20 }} resizeMode="contain" />
        }
    }

    return (
        <>
            <TabView
                tabBarPosition='bottom'
                renderTabBar={(props) =>
                    <TabBar
                        {...props}
                        indicatorContainerStyle={{ backgroundColor: primaryColor }}
                        indicatorStyle={{ backgroundColor: "white" }}
                        inactiveColor={"white"}
                        activeColor={"white"}
                        labelStyle={{ fontSize: 10 }}
                        renderIcon={(e) => getTabBarIcon(e)}
                    />}
                navigationState={{ index, routes }}
                renderScene={
                    SceneMap({
                        0: UnTrackedOrganizations,
                        1: TrackedOrganizations,
                    })
                }
                onIndexChange={setIndex} />
        </>
    )
}
function UnTrackedOrganizations() {
    const hook = useUnTrackedOrganizationsPage();
    return (
        <>
            <HeaderSearchBar value={hook.organizationSearchValue} onChangeText={hook.onOrganizationSearchTextChange} />
            <ScrollView>
                <OrganizationView />
                <OrganizationView tracked />
                <OrganizationView />
                <OrganizationView />
                <OrganizationView />
                <OrganizationView />
                <OrganizationView />
                <OrganizationView />
                <Paging currentPage={hook.currentPage} maxPage={hook.maxPage} onPageNavigation={hook.onPageNavigation} />
            </ScrollView>
        </>
    )
}
function TrackedOrganizations() {
    const hook = useTrackedOrganizationsPage();
    return (
        <>
            <HeaderSearchBar value={hook.organizationSearchValue} onChangeText={hook.onOrganizationSearchTextChange} />
            <ScrollView>
                <OrganizationView tracked />
                <OrganizationView tracked />
                <OrganizationView tracked />
                <OrganizationView tracked />
                <OrganizationView tracked />
                <Paging currentPage={hook.currentPage} maxPage={hook.maxPage} onPageNavigation={hook.onPageNavigation} />
            </ScrollView>
        </>

    );
}

export default Organizations