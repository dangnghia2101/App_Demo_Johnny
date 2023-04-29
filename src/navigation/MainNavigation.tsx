import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack'
import {
    ContactInfor,
    CreaditCard,
    History as HistoryTeacher,
    Home as HomeTeacher,
    Phonebook,
    Setting as SettingTeacher,
} from '@screens/Main'

import React, { FC } from 'react'
import { BottomBar } from './components'
import { TeacherParamList } from './types'
import { routes } from './utils'

const Main = createStackNavigator<TeacherParamList>()
const BottomTabs = createBottomTabNavigator()

const BottomTabsTeacherNavigation: FC<{}> = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName={routes.homeTeacher}
            detachInactiveScreens={true}
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <BottomBar {...props} type={0} />}
        >
            <BottomTabs.Screen
                key={routes.homeTeacher}
                name="MOMO"
                component={HomeTeacher}
            />
            <BottomTabs.Screen
                key={routes.historyTeacher}
                name="PROMOTE"
                component={HistoryTeacher}
            />
            <BottomTabs.Screen
                key={routes.phoneBookTeacher}
                name="HISTORY"
                component={HistoryTeacher}
            />
            <BottomTabs.Screen
                key={routes.settingTeacher}
                name="SETTING"
                component={SettingTeacher}
            />
        </BottomTabs.Navigator>
    )
}

export const MainNavigation = () => {
    return (
        <Main.Navigator
            initialRouteName={routes.teacher}
            detachInactiveScreens={true}
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Main.Screen
                name={routes.teacher}
                component={BottomTabsTeacherNavigation}
            />

            <Main.Screen name={routes.creditCard} component={CreaditCard} />
        </Main.Navigator>
    )
}
