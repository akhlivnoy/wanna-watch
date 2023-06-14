import { StyleSheet, ViewStyle } from 'react-native';

interface ISearchMoviesTabStyles {
  container: ViewStyle;
  card: ViewStyle;
}

export const styles = StyleSheet.create<ISearchMoviesTabStyles>({
  container: {
    marginRight: 16,
  },
  card: {
    marginBottom: 8,
  },
});
