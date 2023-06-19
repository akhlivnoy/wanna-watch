import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedText } from '#components';
import { HIT_SLOP } from '#constants';

import { styles } from './MainHeader.styles';
import { IMainHeaderProps } from './MainHeader.types';

const MainHeaderComponent: React.ComponentType<IMainHeaderProps> = ({
  title,
  isLogo,
  LeftSvgIcon,
  RightSvgIcon,
  onLeftIconPress,
  onRightIconPress,
}) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      {LeftSvgIcon && (
        <TouchableOpacity
          hitSlop={HIT_SLOP}
          onPress={onLeftIconPress}
        >
          <LeftSvgIcon />
        </TouchableOpacity>
      )}
    </View>

    {isLogo ? <SVG.LogoName /> : <ExtendedText preset="medium20">{title}</ExtendedText>}

    <View style={styles.iconContainer}>
      {RightSvgIcon && (
        <TouchableOpacity
          hitSlop={HIT_SLOP}
          onPress={onRightIconPress}
        >
          <RightSvgIcon />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export const MainHeader = memo(MainHeaderComponent);
