import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HomeStackNavigator, HomeStackRouteNames } from '#navigation';
import {} from '#screens';

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
      component={HomeStackNavigator}
      initialParams={{
        screen: HomeStackRouteNames.MovieLists,
      }}
      name={MainTabRouteNames.MoviesTab}
      options={tabOptions.MoviesTab}
    />
    <Tab.Screen
      component={HomeStackNavigator}
      initialParams={{
        screen: HomeStackRouteNames.Search,
      }}
      name={MainTabRouteNames.SearchTab}
      options={tabOptions.SearchTab}
    />
    <Tab.Screen
      component={HomeStackNavigator}
      initialParams={{
        screen: HomeStackRouteNames.SeriesLists,
      }}
      name={MainTabRouteNames.SeriesTab}
      options={tabOptions.SeriesTab}
    />
  </Tab.Navigator>
);
