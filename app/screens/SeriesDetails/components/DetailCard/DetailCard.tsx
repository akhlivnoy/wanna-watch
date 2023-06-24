import React, { useMemo } from 'react';
import { Image, View } from 'react-native';

import { FLAGS } from '#assets';
import { SVG } from '#assets/svg';
import { ExtendedText } from '#components';
import { COLORS } from '#themes/colors';
import { generalStyles } from '#utils/styles';

import { styles } from './DetailCard.styles';
import { DetailCardType, IDetailCard } from './DetailCard.types';

export const DetailCard: React.ComponentType<IDetailCard> = ({ value, type }) => {
  const icon = useMemo(() => {
    switch (type) {
      case DetailCardType.Seasons:
        return (
          <SVG.Clock
            height={20}
            width={20}
          />
        );
      case DetailCardType.Rating:
        return (
          <SVG.StarStroke
            color={COLORS.ACCENT[300]}
            height={20}
            width={20}
          />
        );
      case DetailCardType.Country: {
        return <Image source={FLAGS[value as keyof typeof FLAGS]} />;
      }
      default:
        return null;
    }
  }, [type, value]);

  const title = useMemo(() => {
    switch (type) {
      case DetailCardType.Seasons: {
        if (typeof value === 'number') {
          return `${value} season${value > 1 ? 's' : ''}`;
        }
        return '0hr 0min';
      }
      case DetailCardType.Rating: {
        if (typeof value === 'number') {
          return `${value.toFixed(1)}/10`;
        }
        return '0/10';
      }
      case DetailCardType.Country: {
        return value;
      }
      default:
        return null;
    }
  }, [type, value]);

  return (
    <View style={styles.container}>
      {icon}
      <ExtendedText
        preset="semibold8"
        style={[styles.title, type === DetailCardType.Rating && generalStyles.accentColor]}
      >
        {title}
      </ExtendedText>
    </View>
  );
};
