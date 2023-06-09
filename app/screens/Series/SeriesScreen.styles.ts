import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface ISeriesScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ISeriesScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[500],
  },
});
