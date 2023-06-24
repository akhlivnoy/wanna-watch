import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';
import { TEXTS } from '#themes/text';

interface ISelectSeasonStyles {
  container: ViewStyle;
  dropdown: ViewStyle;
  dropdownContainer: ViewStyle;
  itemTextStyle: TextStyle;
  selectedTextStyle: TextStyle;
}

export const styles = StyleSheet.create<ISelectSeasonStyles>({
  container: {
    width: 125,
  },
  dropdown: {
    paddingHorizontal: 8,
    paddingVertical: 2.5,

    borderRadius: 8,
    backgroundColor: COLORS.ACCENT[300],
  },
  dropdownContainer: {
    width: 200,
    maxHeight: '30%',

    backgroundColor: COLORS.ACCENT[200],
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemTextStyle: {
    ...TEXTS.REGULAR16,
    color: COLORS.PRIMARY[600],
  },
  selectedTextStyle: {
    marginLeft: 8,

    color: COLORS.PRIMARY[600],
  },
});
