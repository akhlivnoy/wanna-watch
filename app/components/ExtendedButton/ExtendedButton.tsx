import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import presets, { additionalStyles } from './ExtendedButton.presets';
import { IExtendedButtonProps } from './ExtendedButton.types';

export const ExtendedButton: React.ComponentType<IExtendedButtonProps> = ({
  title,
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
      <ExtendedText
        preset="default"
        style={titleStyles}
      >
        {title}
      </ExtendedText>
    </TouchableOpacity>
  );
};
