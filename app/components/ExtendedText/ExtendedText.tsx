import React from 'react';
import { Text as ReactNativeText, TextStyle } from 'react-native';

import { COLORS } from '#themes/colors';

import presets from './ExtendedText.presets';
import { IExtendedTextProps } from './ExtendedText.types';

const defaultColor: TextStyle = {
  color: COLORS.PRIMARY[600],
};

export const ExtendedText: React.ComponentType<IExtendedTextProps> = ({ style, preset = 'regular16', ...rest }) => {
  const styles = [defaultColor, presets[preset], style];

  return (
    <ReactNativeText
      {...rest}
      style={styles}
    />
  );
};
