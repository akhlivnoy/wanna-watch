import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

const BASE: ViewStyle = {
  backgroundColor: COLORS.BLACK,
  padding: 16,
};

interface IExtendedButtonStyles {
  default: ViewStyle;
}

interface IExtendedButtonAdditionalStyles {
  defaultTitle: TextStyle;
}

export type ExtendedButtonPresets = keyof IExtendedButtonStyles;

export const additionalStyles = StyleSheet.create<IExtendedButtonAdditionalStyles>({
  defaultTitle: { color: COLORS.WHITE },
});

export default StyleSheet.create<IExtendedButtonStyles>({
  default: BASE,
});
