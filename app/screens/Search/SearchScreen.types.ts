import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamList, HomeStackRouteNames } from '#navigation/HomeStackNavigator';

export type SearchScreenProps = NativeStackScreenProps<HomeStackParamList, HomeStackRouteNames.Search>;
