import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface IMovieDetailsScreenStyles {
  container: ViewStyle;
  poster: ImageStyle;
  noImage: ViewStyle;
}

export const styles = StyleSheet.create<IMovieDetailsScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,

    backgroundColor: COLORS.PRIMARY[500],
  },
  poster: {
    width: 170,
    height: 250,

    borderRadius: 8,
  },
  noImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 250,
    marginRight: 16,

    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY[300],
  },
});
