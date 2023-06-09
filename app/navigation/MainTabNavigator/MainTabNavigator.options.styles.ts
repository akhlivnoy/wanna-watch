import { StyleSheet, ViewStyle } from 'react-native';

import { IS_IOS } from '#constants';
import { COLORS } from '#themes/colors';

interface IMainTabNavigatorStyles {
  tabBar: ViewStyle;
}

export const styles = StyleSheet.create<IMainTabNavigatorStyles>({
  tabBar: {
    marginTop: IS_IOS ? 0 : 10,
    marginBottom: 20,
    paddingBottom: 0,

    borderTopWidth: 0,

    backgroundColor: COLORS.PRIMARY[600],
  },
});
