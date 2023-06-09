import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.types';

export const SearchScreen: React.ComponentType<SearchScreenProps> = () => (
  <SafeAreaView style={generalStyles.blackFlex}>
    <View style={styles.container}>
      <ExtendedText>Search Screen</ExtendedText>
    </View>
  </SafeAreaView>
);
