import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface IMovieDetailsScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IMovieDetailsScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,

    backgroundColor: COLORS.PRIMARY[500],
  },
});
