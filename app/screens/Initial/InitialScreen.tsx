import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import { SVG } from '#assets/svg';
import { RootStackRouteNames } from '#navigation';
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
      <View>
        <SVG.LogoWithDescription
          height={233}
          width={280}
        />
      </View>
    </SafeAreaView>
  );
};
