import _ from 'lodash';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedText } from '#components';
import { COLORS } from '#themes/colors';
import { generalStyles } from '#utils/styles';

import { styles } from './Card.styles';
import { ICardProps } from './Card.types';

const StarStrokeIcon = SVG.StarStroke;

export const Card: React.ComponentType<ICardProps> = ({ onPress, posterUri, title, genres, date, rating }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    {/* //? Poster */}
    <Image
      source={{ uri: posterUri }}
      style={styles.poster}
    />

    <View style={styles.info}>
      <ExtendedText preset="regular16">{title}</ExtendedText>
      {/* //? Genres */}
      <View style={generalStyles.row}>
        {_.map(genres, genre => (
          <View
            key={genre.id}
            style={styles.genre}
          >
            <ExtendedText
              preset="regular10"
              style={generalStyles.darkPrimaryColor}
            >
              {genre.name}
            </ExtendedText>
          </View>
        ))}
      </View>

      <View style={[generalStyles.row, generalStyles.jcSpaceBtw]}>
        {/* //? Date */}
        <ExtendedText preset="regular14">{date}</ExtendedText>

        {/* //? Rating */}
        <View style={styles.ratingContainer}>
          <ExtendedText
            preset="regular14"
            style={styles.ratingText}
          >
            {rating} / 10
          </ExtendedText>

          <StarStrokeIcon
            color={COLORS.ACCENT[300]}
            height={20}
            width={20}
          />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
