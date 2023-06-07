import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../themes/colors';

type GeneralStyles = {
  flex: ViewStyle;
  whFlex: ViewStyle;

  jcCenter: ViewStyle;
  jcEnd: ViewStyle;
  jcSpaceBtw: ViewStyle;

  aiCenter: ViewStyle;
  aiEnd: ViewStyle;

  centered: ViewStyle;

  row: ViewStyle;
};

export const generalStyles = StyleSheet.create<GeneralStyles>({
  flex: {
    flex: 1,
  },
  whFlex: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  jcCenter: {
    justifyContent: 'center',
  },
  jcEnd: {
    justifyContent: 'flex-end',
  },
  jcSpaceBtw: {
    justifyContent: 'space-between',
  },

  aiCenter: {
    alignItems: 'center',
  },
  aiEnd: {
    alignItems: 'flex-end',
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
  },
});
