import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';
import { TEXTS } from '#themes/text';

interface ITopTabsStyles {
  contentContainerStyle: ViewStyle;
  indicatorContainerStyle: ViewStyle;
  indicatorStyle: ViewStyle;
  labelStyle: TextStyle;
  tabStyle: ViewStyle;
}

export const styles = StyleSheet.create<ITopTabsStyles>({
  contentContainerStyle: {
    marginBottom: 2,
    backgroundColor: COLORS.PRIMARY[300],
  },
  indicatorContainerStyle: {
    backgroundColor: COLORS.PRIMARY[500],
  },
  indicatorStyle: {
    backgroundColor: COLORS.ACCENT[300],
  },
  labelStyle: {
    ...TEXTS.SEMIBOLD16,
    textTransform: 'none',
  },
  tabStyle: {
    backgroundColor: COLORS.PRIMARY[600],
  },
});
