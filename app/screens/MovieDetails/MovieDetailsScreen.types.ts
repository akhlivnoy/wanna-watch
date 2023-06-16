import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamList, HomeStackRouteNames } from '#navigation/HomeStackNavigator';

export type MovieDetailsScreenProps = NativeStackScreenProps<HomeStackParamList, HomeStackRouteNames.MovieDetails>;
