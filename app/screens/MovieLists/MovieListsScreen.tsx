import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './MovieListsScreen.styles';
import { MovieListsScreenProps } from './MovieListsScreen.types';

export const MovieListsScreen: React.ComponentType<MovieListsScreenProps> = () => (
  <SafeAreaView style={generalStyles.blackFlex}>
    <View style={styles.container}>
      <ExtendedText>MovieLists Screen</ExtendedText>
    </View>
  </SafeAreaView>
);
