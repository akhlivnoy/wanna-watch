import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';
import { TEXTS } from '#themes/text';

interface ISearchBarStyles {
  container: ViewStyle;
  input: TextStyle;
}

export const styles = StyleSheet.create<ISearchBarStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,

    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY[400],

    backgroundColor: COLORS.PRIMARY[200],
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 12,

    ...TEXTS.REGULAR16,
    color: COLORS.PRIMARY[600],
  },
});
