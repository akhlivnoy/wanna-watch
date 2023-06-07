import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

type ReanimatedScreenStyles = {
  title: TextStyle;
  scrollContainer: ViewStyle;
  scrollContentContainer: ViewStyle;
  pointContainer: ViewStyle;
  pointText: TextStyle;
};

export const styles = StyleSheet.create<ReanimatedScreenStyles>({
  title: {
    marginHorizontal: 20,
  },

  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContentContainer: {
    paddingTop: 12,
    paddingBottom: 50,
  },

  pointContainer: {
    backgroundColor: COLORS.BORDER,
    marginVertical: 10,
  },
  pointText: {
    fontSize: 20,
  },
});
