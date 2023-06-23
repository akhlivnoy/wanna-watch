import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface IEpisodeStyles {
  container: ViewStyle;
  header: ViewStyle;
  separator: ViewStyle;
  runtime: ViewStyle;
}

export const styles = StyleSheet.create<IEpisodeStyles>({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 8,

    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY[400],
  },
  header: {
    flexDirection: 'row',
    gap: 12,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.PRIMARY[300],
  },
  runtime: {
    flexDirection: 'row',
    gap: 8,
  },
});
