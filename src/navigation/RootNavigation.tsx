import { useAppSelector } from '@hooks'
import { NavigationContainer } from '@react-navigation/native'
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack'
import { getStatusLogin, useLazyGetUserInfoQuery } from '@reduxs'
import { Login } from '@screens/auth'
import React, { useEffect } from 'react'
import { navigationRef } from './NavigationServices'
import { MainNavigation } from './MainNavigation'
import { routes } from './utils'

const Auth = createStackNavigator()

export const RootNavigation = () => {
    const enableLogin = useAppSelector(getStatusLogin)

    return (
        <NavigationContainer ref={navigationRef}>
            {enableLogin ? (
                <Auth.Navigator
                    initialRouteName={routes.login}
                    detachInactiveScreens={true}
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
                    }}
                >
                    <Auth.Screen name={routes.login} component={Login} />
                </Auth.Navigator>
            ) : (
                <>
                    <MainNavigation />
                </>
            )}
        </NavigationContainer>
    )
}
