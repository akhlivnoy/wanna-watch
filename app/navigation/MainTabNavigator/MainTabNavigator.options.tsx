import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';

import { COLORS } from '#themes/colors';
import { TabNavigatorOptions } from '#types/tabNavigatorOptions';

import { TabBarIcon } from './components';
import { styles } from './MainTabNavigator.options.styles';

export const DEFAULT_TAB_BAR_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBar,
};

export const tabOptions: TabNavigatorOptions = {
  MoviesTab: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        activeColor={COLORS.ACCENT[300]}
        focused={focused}
        icon="Movies"
        inactiveColor={COLORS.PRIMARY[100]}
        title="Movies"
      />
    ),
  },
  SearchTab: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        activeColor={COLORS.ACCENT[300]}
        focused={focused}
        icon="Search"
        inactiveColor={COLORS.PRIMARY[100]}
        title="Search"
      />
    ),
  },
  SeriesTab: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        activeColor={COLORS.ACCENT[300]}
        focused={focused}
        icon="Series"
        inactiveColor={COLORS.PRIMARY[100]}
        title="TV series"
      />
    ),
  },
};
