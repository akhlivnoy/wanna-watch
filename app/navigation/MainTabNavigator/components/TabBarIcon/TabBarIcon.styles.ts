import { StyleSheet, TextStyle } from 'react-native';

interface ITabBarIconStyles {
  title: TextStyle;
}

export const styles = StyleSheet.create<ITabBarIconStyles>({
  title: {
    paddingTop: 4,
  },
});
