import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '#themes/colors';

interface ISearchScreenStyles {
  container: ViewStyle;
  searchBar: ViewStyle;
  topTabs: ViewStyle;
  tabBarStyle: ViewStyle;
}

export const styles = StyleSheet.create<ISearchScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,

    backgroundColor: COLORS.PRIMARY[500],
  },
  searchBar: {
    marginRight: 16,
  },
  topTabs: {
    marginTop: 16,
  },
  tabBarStyle: {
    marginBottom: 16,
    marginRight: 16,
  },
});
