import React from 'react';
import { Image, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedText } from '#components';
import { apiInstance } from '#services/api';
import { generalStyles } from '#utils/styles';

import { styles } from './ActorCard.styles';
import { IActorCardProps } from './ActorCard.types';

export const ActorCard: React.ComponentType<IActorCardProps> = ({ character, characterName, name, profilePath }) => (
  <View style={styles.container}>
    {profilePath ? (
      <Image
        source={{
          uri: apiInstance.tmdb.getImageUri(profilePath),
        }}
        style={styles.profile}
      />
    ) : (
      <View style={styles.noImage}>
        <SVG.NoImage
          height={75}
          width={75}
        />
      </View>
    )}

    <View style={styles.info}>
      <ExtendedText
        ellipsizeMode="clip"
        numberOfLines={1}
        preset="medium12"
      >
        {character}
      </ExtendedText>
      <ExtendedText
        ellipsizeMode="clip"
        numberOfLines={1}
        preset="regular10"
      >
        {characterName}
      </ExtendedText>
      <View style={styles.separator} />
      <ExtendedText
        ellipsizeMode="clip"
        numberOfLines={2}
        preset="regular10"
        style={generalStyles.textCenter}
      >
        {name}
      </ExtendedText>
    </View>
  </View>
);
