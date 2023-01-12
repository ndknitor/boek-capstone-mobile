import { useState } from 'react'
import { ScrollView, Image } from 'react-native'
import { primaryColor, primaryTint1 } from '../../utils/color';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import trackChange from "../../assets/icons/track-changes-white.png";
import corporateFlare from "../../assets/icons/corporate-fare-white.png";
import OrganizationView from '../../component/OrganizationView/OrganizationView';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Paging from '../../component/Paging/Paging';
import { useTrackedOrganizationsPage, useUnTrackedOrganizationsPage } from './Organizations.hook';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
            {/* <TabView
                swipeEnabled={false}
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
                onIndexChange={setIndex} /> */}
        </Tab.Navigator>
    )
}
function UnTrackedOrganizations() {
    const hook = useUnTrackedOrganizationsPage();
    return (
        <>
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