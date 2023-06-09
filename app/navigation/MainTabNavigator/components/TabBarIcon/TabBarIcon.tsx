import React, { useMemo } from 'react';
import { TextStyle, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './TabBarIcon.styles';
import { ITabBarIconProps } from './TabBarIcon.types';

export const TabBarIcon: React.ComponentType<ITabBarIconProps> = ({
  focused,
  title,
  icon,
  activeColor,
  inactiveColor,
}) => {
  const Icon = useMemo(() => SVG[icon], [icon]);

  const titleColor: TextStyle = {
    color: focused ? activeColor : inactiveColor,
  };

  return (
    <View style={generalStyles.aiCenter}>
      <Icon color={focused ? activeColor : inactiveColor} />
      <ExtendedText
        preset="regular14"
        style={[styles.title, titleColor]}
      >
        {title}
      </ExtendedText>
    </View>
  );
};
