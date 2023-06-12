import { StyleSheet, ViewStyle } from 'react-native';

interface IMovieListsScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IMovieListsScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
