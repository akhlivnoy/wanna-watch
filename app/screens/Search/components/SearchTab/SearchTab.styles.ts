import { StyleSheet, ViewStyle } from 'react-native';

interface IMoviesSearchStyles {
  container: ViewStyle;
  card: ViewStyle;
}

export const styles = StyleSheet.create<IMoviesSearchStyles>({
  container: {
    marginRight: 16,
  },
  card: {
    marginBottom: 8,
  },
});
