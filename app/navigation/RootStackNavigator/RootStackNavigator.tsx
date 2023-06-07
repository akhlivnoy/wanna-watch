import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { GLOBAL_NAVIGATION_STACK_OPTIONS } from '#constants';
import { InitialScreen } from '#screens/Initial';
import { navigationRef } from '#services/navigator';

import { HomeStackNavigator } from '../HomeStackNavigator';
import { RootStackParamList, RootStackRouteNames } from './RootStackNavigator.types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen
        component={InitialScreen}
        name={RootStackRouteNames.Initial}
      />
      <Stack.Screen
        component={HomeStackNavigator}
        name={RootStackRouteNames.HomeStack}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
