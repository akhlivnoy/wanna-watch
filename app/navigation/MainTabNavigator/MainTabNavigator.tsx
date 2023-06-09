import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { MoviesScreen, SearchScreen, SeriesScreen } from '#screens';

import { TabBar } from './components';
import { DEFAULT_TAB_BAR_OPTIONS, tabOptions } from './MainTabNavigator.options';
import { MainTabParams, MainTabRouteNames } from './MainTabNavigator.types';

const Tab = createBottomTabNavigator<MainTabParams>();
const tabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName={MainTabRouteNames.SearchTab}
    screenOptions={DEFAULT_TAB_BAR_OPTIONS}
    tabBar={tabBar}
  >
    <Tab.Screen
      component={MoviesScreen}
      name={MainTabRouteNames.MoviesTab}
      options={tabOptions.MoviesTab}
    />
    <Tab.Screen
      component={SearchScreen}
      name={MainTabRouteNames.SearchTab}
      options={tabOptions.SearchTab}
    />
    <Tab.Screen
      component={SeriesScreen}
      name={MainTabRouteNames.SeriesTab}
      options={tabOptions.SeriesTab}
    />
  </Tab.Navigator>
);
