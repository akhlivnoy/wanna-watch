import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface ICardStyles {
  container: ViewStyle;
  poster: ImageStyle;
  info: ViewStyle;
  genre: ViewStyle;
  ratingContainer: ViewStyle;
  ratingText: ViewStyle;
}

export const styles = StyleSheet.create<ICardStyles>({
  container: {
    flexDirection: 'row',
    padding: 12,

    borderRadius: 8,

    backgroundColor: COLORS.PRIMARY[400],
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 16,

    borderRadius: 4,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  genre: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 12,

    borderRadius: 8,

    backgroundColor: COLORS.PRIMARY[300],
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    marginRight: 8,

    color: COLORS.ACCENT[300],
  },
});
