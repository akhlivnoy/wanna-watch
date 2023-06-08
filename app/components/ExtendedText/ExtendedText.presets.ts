import { StyleSheet, TextStyle } from 'react-native';

import { TEXTS } from '#themes/text';

interface IExtendedTextStyles {
  regular32: TextStyle;
  regular16: TextStyle;
  regular14: TextStyle;
  regular12: TextStyle;
  regular10: TextStyle;

  medium20: TextStyle;
  medium16: TextStyle;
  medium12: TextStyle;

  semibold32: TextStyle;
  semibold24: TextStyle;
  semibold8: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  regular32: TEXTS.REGULAR12,
  regular16: TEXTS.REGULAR16,
  regular14: TEXTS.REGULAR14,
  regular12: TEXTS.REGULAR12,
  regular10: TEXTS.REGULAR10,

  medium20: TEXTS.MEDIUM20,
  medium16: TEXTS.MEDIUM16,
  medium12: TEXTS.MEDIUM12,

  semibold32: TEXTS.SEMIBOLD32,
  semibold24: TEXTS.SEMIBOLD24,
  semibold8: TEXTS.SEMIBOLD8,
});
