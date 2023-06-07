import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import presets from './ExtendedText.presets';
import { IExtendedTextProps } from './ExtendedText.types';

export const ExtendedText: React.ComponentType<IExtendedTextProps> = ({ style, preset = 'default', ...rest }) => {
  const styles = [presets[preset], style];

  return (
    <ReactNativeText
      {...rest}
      style={styles}
    />
  );
};
