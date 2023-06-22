import React from 'react';
import { View } from 'react-native';

import { ExtendedText } from '#components';

import { styles } from './Genre.styles';
import { IGenreProps } from './Genre.types';

export const Genre: React.ComponentType<IGenreProps> = ({ name }) => (
  <View style={styles.container}>
    <ExtendedText>{name}</ExtendedText>
  </View>
);
