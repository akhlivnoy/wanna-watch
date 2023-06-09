import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface IMoviesScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IMoviesScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[500],
  },
});
