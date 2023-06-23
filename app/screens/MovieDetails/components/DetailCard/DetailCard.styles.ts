import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface IDetailCardStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IDetailCardStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,

    borderWidth: 3,
    borderColor: COLORS.PRIMARY[300],
    borderRadius: 8,
  },
  title: {
    marginTop: 4,
  },
});
