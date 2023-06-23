import _ from 'lodash';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { SVG_GENRES } from '#assets/svg';
import { ExtendedText } from '#components';
import { MovieGenreType } from '#models';

import { styles } from './Genre.styles';
import { IGenreProps } from './Genre.types';

export const Genre: React.ComponentType<IGenreProps> = ({ name }) => {
  const Icon = useMemo(() => {
    const genreKey = _(Object.keys(MovieGenreType))
      .map(key => MovieGenreType[key as keyof typeof MovieGenreType] === name && key)
      .filter(item => !!item)
      .first();

    return SVG_GENRES[genreKey as keyof typeof MovieGenreType];
  }, [name]);

  return (
    <View style={styles.container}>
      <Icon
        height={20}
        width={20}
      />
      <ExtendedText preset="regular10">{name}</ExtendedText>
    </View>
  );
};
