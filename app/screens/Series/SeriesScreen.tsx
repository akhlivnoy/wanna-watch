import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './SeriesScreen.styles';
import { SeriesScreenProps } from './SeriesScreen.types';

export const SeriesScreen: React.ComponentType<SeriesScreenProps> = () => (
  <SafeAreaView style={generalStyles.blackFlex}>
    <View style={styles.container}>
      <ExtendedText>Series Screen</ExtendedText>
    </View>
  </SafeAreaView>
);
