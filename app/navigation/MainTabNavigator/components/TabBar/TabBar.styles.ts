import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface ITabBarStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ITabBarStyles>({
  container: {
    elevation: 0,
    backgroundColor: COLORS.PRIMARY[600],
  },
});
