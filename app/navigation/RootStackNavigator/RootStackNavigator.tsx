import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';

import { GLOBAL_NAVIGATION_STACK_OPTIONS } from '#constants';
import { MainTabNavigator } from '#navigation';
import { InitialScreen } from '#screens/Initial';
import { navigationRef } from '#services/navigator';
import { COLORS } from '#themes/colors';

import { RootStackParamList, RootStackRouteNames } from './RootStackNavigator.types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <StatusBar
      backgroundColor={COLORS.PRIMARY[600]}
      barStyle="light-content"
    />
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen
        component={InitialScreen}
        name={RootStackRouteNames.Initial}
      />
      <Stack.Screen
        component={MainTabNavigator}
        name={RootStackRouteNames.MainTab}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
