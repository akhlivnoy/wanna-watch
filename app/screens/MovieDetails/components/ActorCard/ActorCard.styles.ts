import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface IActorCardStyles {
  container: ViewStyle;
  profile: ImageStyle;
  noImage: ViewStyle;
  info: ViewStyle;
  separator: ViewStyle;
}

export const styles = StyleSheet.create<IActorCardStyles>({
  container: {
    width: 100,
    gap: 4,

    borderRadius: 8,
    overflow: 'hidden',
  },
  profile: {
    width: 100,
    height: 150,
  },
  noImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 150,

    backgroundColor: COLORS.PRIMARY[300],
  },
  info: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',

    backgroundColor: COLORS.PRIMARY[400],
  },
  separator: {
    alignSelf: 'stretch',
    height: 1,
    marginVertical: 2,

    backgroundColor: COLORS.PRIMARY[200],
  },
});
