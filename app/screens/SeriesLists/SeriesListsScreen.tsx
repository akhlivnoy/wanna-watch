import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './SeriesListsScreen.styles';
import { SeriesListsScreenProps } from './SeriesListsScreen.types';

export const SeriesListsScreen: React.ComponentType<SeriesListsScreenProps> = () => (
  <SafeAreaView style={generalStyles.blackFlex}>
    <View style={styles.container}>
      <ExtendedText>SeriesLists Screen</ExtendedText>
    </View>
  </SafeAreaView>
);
