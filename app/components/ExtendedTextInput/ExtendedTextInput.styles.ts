import { StyleSheet, TextStyle } from 'react-native';

interface IExtendedTextInputStyles {
  label: TextStyle;
  input: TextStyle;
  error: TextStyle;
}

export const styles = StyleSheet.create<IExtendedTextInputStyles>({
  label: {},
  input: {
    borderBottomWidth: 1,
  },
  error: {},
});
