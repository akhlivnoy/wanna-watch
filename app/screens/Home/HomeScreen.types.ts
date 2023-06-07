import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamList, HomeStackRouteNames } from '#navigation/HomeStackNavigator';

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, HomeStackRouteNames.Home>;
