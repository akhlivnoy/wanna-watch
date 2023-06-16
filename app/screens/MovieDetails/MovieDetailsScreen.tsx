import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { generalStyles } from '#utils/styles';

import { styles } from './MovieDetailsScreen.styles';
import { MovieDetailsScreenProps } from './MovieDetailsScreen.types';

export const MovieDetailsScreen: React.ComponentType<MovieDetailsScreenProps> = () => (
  <SafeAreaView style={generalStyles.blackFlex}>
    <View style={styles.container} />
  </SafeAreaView>
);
