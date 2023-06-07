import { StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '#themes/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface IExtendedTextStyles {
  default: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  default: BASE,

  title: {
    ...BASE,
    fontSize: 24,
    fontWeight: 'bold',
  },

  secondary: {
    ...BASE,
    fontSize: 11,
  },
});
