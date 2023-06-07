import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { DEFAULT_STACK_OPTIONS } from '#constants';
import { HomeScreen, ReanimatedScreen } from '#screens';

import { HomeStackParamList, HomeStackRouteNames } from './HomeStackNavigator.types';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      component={HomeScreen}
      name={HomeStackRouteNames.Home}
    />
    <Stack.Screen
      component={ReanimatedScreen}
      name={HomeStackRouteNames.Reanimated}
    />
  </Stack.Navigator>
);
