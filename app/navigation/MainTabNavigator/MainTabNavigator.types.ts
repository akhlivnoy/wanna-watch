import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeStackParamList } from '#navigation/HomeStackNavigator';

export enum MainTabRouteNames {
  MoviesTab = 'MoviesTab',
  SearchTab = 'SearchTab',
  SeriesTab = 'SeriesTab',
}

export type MainTabParams = Record<MainTabRouteNames, NavigatorScreenParams<HomeStackParamList> | undefined>;
