import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { CreaditCard, History, Home, Setting } from "@screens/Main";

import React, { FC } from "react";
import { BottomBar } from "./components";
import { TeacherParamList } from "./types";
import { routes } from "./utils";

const Main = createStackNavigator<TeacherParamList>();
const BottomTabs = createBottomTabNavigator();

const BottomTabsTeacherNavigation: FC<{}> = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName={routes.home}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomBar {...props} type={0} />}
    >
      <BottomTabs.Screen key={routes.home} name="MOMO" component={Home} />
      <BottomTabs.Screen
        key={routes.history}
        name="PROMOTE"
        component={History}
      />
      <BottomTabs.Screen
        key={routes.phoneBook}
        name="HISTORY"
        component={History}
      />
      <BottomTabs.Screen
        key={routes.setting}
        name="SETTING"
        component={Setting}
      />
    </BottomTabs.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <Main.Navigator
      initialRouteName={routes.main}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Main.Screen name={routes.main} component={BottomTabsTeacherNavigation} />

      <Main.Screen name={routes.creditCard} component={CreaditCard} />
    </Main.Navigator>
  );
};
