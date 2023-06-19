import { StyleSheet, ViewStyle } from 'react-native';

interface IMainHeaderStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,

    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
});
