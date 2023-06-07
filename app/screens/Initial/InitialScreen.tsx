import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { ExtendedText } from '#components';
import { RootStackRouteNames } from '#navigation/RootStackNavigator';
import { StaticNavigator } from '#services/navigator';

import { styles } from './InitialScreen.styles';
import { InitialScreenProps } from './InitialScreen.types';

export const InitialScreen = ({ navigation }: InitialScreenProps) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => StaticNavigator.navigateTo(RootStackRouteNames.HomeStack), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <ExtendedText preset="title">Loading simulation...</ExtendedText>
    </SafeAreaView>
  );
};
