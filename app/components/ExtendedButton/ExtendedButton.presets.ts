import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

const BASE: ViewStyle = {
  backgroundColor: COLORS.ACCENT[300],
  paddingLeft: 8,
  paddingRight: 16,
  paddingVertical: 8,

  borderRadius: 8,
};

interface IExtendedButtonStyles {
  default: ViewStyle;
}

interface IExtendedButtonAdditionalStyles {
  defaultTitle: TextStyle;
}

export type ExtendedButtonPresets = keyof IExtendedButtonStyles;

export const additionalStyles = StyleSheet.create<IExtendedButtonAdditionalStyles>({
  defaultTitle: { color: COLORS.PRIMARY[600] },
});

export default StyleSheet.create<IExtendedButtonStyles>({
  default: {
    ...BASE,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 8,
  },
});
