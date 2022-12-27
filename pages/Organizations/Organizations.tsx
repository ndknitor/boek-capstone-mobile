import { Icon, Text } from '@rneui/base';
import React, { useEffect, useState } from 'react'
import { ScrollView, View, Image } from 'react-native'
import { primaryColor, shade1 } from '../../utils/color';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import useOrganizationsPage from './Organizations.hook';
import trackChange from "../../assets/icons/track-changes-white.png";
import corporateFlare from "../../assets/icons/corporate-fare-white.png";
import OrganizationView from '../../component/OrganizationView/OrganizationView';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
function Organizations() {
    const { index, setIndex, searchValue, onSearchValueTextChange } = useOrganizationsPage();
    const [routes] = useState([
        { key: "0", title: 'Tổ chức' },
        { key: "1", title: 'Đã theo dõi' }
    ]);
    const getTabBarIcon = (props: any) => {
        const { route } = props
        if (route.key == 0) {
            return <Image source={corporateFlare} style={{ width: 20, height: 20 }} />
        }
        if (route.key == 1) {
            return <Image source={trackChange} style={{ width: 20, height: 20 }} />
        }
    }
    useEffect(() => {

    }, []);

    return (
        <>
            <HeaderSearchBar value={searchValue} onChangeText={onSearchValueTextChange} />
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
    return (
        <ScrollView>
            <OrganizationView />
            <OrganizationView tracked />
            <OrganizationView />
            <OrganizationView />
            <OrganizationView />
            <OrganizationView />
            <OrganizationView />
            <OrganizationView />
        </ScrollView>
    )
}
function TrackedOrganizations() {
    return (
        <ScrollView>
            <OrganizationView tracked />
            <OrganizationView tracked />
            <OrganizationView tracked />
            <OrganizationView tracked />
            <OrganizationView tracked />
        </ScrollView>
    );
}

export default Organizations