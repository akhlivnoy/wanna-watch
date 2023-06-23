import _ from 'lodash';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { SVG_GENRES } from '#assets/svg';
import { ExtendedText } from '#components';
import { SeriesGenreType } from '#models';

import { styles } from './Genre.styles';
import { IGenreProps } from './Genre.types';

export const Genre: React.ComponentType<IGenreProps> = ({ name }) => {
  const Icon = useMemo(() => {
    const genreKey = _(Object.keys(SeriesGenreType))
      .map(key => SeriesGenreType[key as keyof typeof SeriesGenreType] === name && key)
      .filter(item => !!item)
      .first();

    return SVG_GENRES[genreKey as keyof typeof SeriesGenreType];
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
