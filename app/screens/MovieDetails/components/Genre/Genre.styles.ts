import { StyleSheet, ViewStyle } from 'react-native';

interface IGenreStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IGenreStyles>({
  container: {
    flex: 1,
  },
});
