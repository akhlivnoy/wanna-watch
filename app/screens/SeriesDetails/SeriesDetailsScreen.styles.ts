import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface ISeriesDetailsScreenStyles {
  container: ViewStyle;
  poster: ImageStyle;
  noImage: ViewStyle;
  detailCards: ViewStyle;
  genres: ViewStyle;
  statusContainer: ViewStyle;
  verticalSeparator: ViewStyle;
  horizontalSeparator: ViewStyle;
  actors: ViewStyle;
}

export const styles = StyleSheet.create<ISeriesDetailsScreenStyles>({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    rowGap: 16,

    backgroundColor: COLORS.PRIMARY[500],
  },
  poster: {
    width: 170,
    height: 250,
    marginRight: 16,

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
  detailCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  genres: {
    gap: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  verticalSeparator: {
    width: 2,
    backgroundColor: COLORS.PRIMARY[300],
  },
  horizontalSeparator: {
    height: 2,
    backgroundColor: COLORS.PRIMARY[300],
  },
  actors: {
    columnGap: 16,
  },
});
