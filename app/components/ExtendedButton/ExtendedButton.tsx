import React from 'react';
import { TouchableOpacity } from 'react-native';

import { COLORS } from '#themes/colors';

import { ExtendedText } from '../ExtendedText';
import presets, { additionalStyles } from './ExtendedButton.presets';
import { IExtendedButtonProps } from './ExtendedButton.types';

export const ExtendedButton: React.ComponentType<IExtendedButtonProps> = ({
  title,
  icon: Icon,
  titleStyle,
  style,
  preset = 'default',
  ...rest
}) => {
  const styles = [presets[preset], style];
  const titleStyles = [additionalStyles.defaultTitle, titleStyle];

  return (
    <TouchableOpacity
      {...rest}
      style={styles}
    >
      {Icon && <Icon color={COLORS.ACCENT[500]} />}
      <ExtendedText style={titleStyles}>{title}</ExtendedText>
    </TouchableOpacity>
  );
};
