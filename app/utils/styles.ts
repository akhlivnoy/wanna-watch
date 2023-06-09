import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../themes/colors';

type GeneralStyles = {
  flex: ViewStyle;
  blackFlex: ViewStyle;

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
  blackFlex: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[600],
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
