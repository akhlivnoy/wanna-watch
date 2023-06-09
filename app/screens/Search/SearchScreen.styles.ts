import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface ISearchScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ISearchScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[500],
  },
});
