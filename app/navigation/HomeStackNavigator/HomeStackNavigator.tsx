import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { DEFAULT_STACK_OPTIONS } from '#constants';
import { MovieDetailsScreen, MovieListsScreen, SearchScreen, SeriesDetailsScreen, SeriesListsScreen } from '#screens';

import { HomeStackParamList, HomeStackRouteNames } from './HomeStackNavigator.types';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      component={MovieListsScreen}
      name={HomeStackRouteNames.MovieLists}
    />
    <Stack.Screen
      component={SearchScreen}
      name={HomeStackRouteNames.Search}
    />
    <Stack.Screen
      component={SeriesListsScreen}
      name={HomeStackRouteNames.SeriesLists}
    />
    <Stack.Screen
      component={MovieDetailsScreen}
      name={HomeStackRouteNames.MovieDetails}
    />
    <Stack.Screen
      component={SeriesDetailsScreen}
      name={HomeStackRouteNames.SeriesDetails}
    />
  </Stack.Navigator>
);
