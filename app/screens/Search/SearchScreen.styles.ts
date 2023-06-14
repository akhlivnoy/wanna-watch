import { StyleSheet, ViewStyle } from 'react-native';

interface ISearchScreenStyles {
  container: ViewStyle;
  card: ViewStyle;
}

export const styles = StyleSheet.create<ISearchScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 8,
  },
});
