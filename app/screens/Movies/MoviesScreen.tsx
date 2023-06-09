import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './MoviesScreen.styles';
import { MoviesScreenProps } from './MoviesScreen.types';

export const MoviesScreen: React.ComponentType<MoviesScreenProps> = () => (
  <SafeAreaView style={generalStyles.blackFlex}>
    <View style={styles.container}>
      <ExtendedText>Movies Screen</ExtendedText>
    </View>
  </SafeAreaView>
);
