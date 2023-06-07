import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITextInputPasswordToggleStyles {
  container: ViewStyle;

  input: TextStyle;

  iconContainer: ViewStyle;
  icon: ViewStyle;
}

export const styles = StyleSheet.create<ITextInputPasswordToggleStyles>({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },

  input: {
    flex: 1,
    borderBottomWidth: 0,
  },

  iconContainer: {},
  icon: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
  },
});
