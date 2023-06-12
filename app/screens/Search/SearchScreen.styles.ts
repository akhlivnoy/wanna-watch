import { StyleSheet, ViewStyle } from 'react-native';

interface ISearchScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ISearchScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
