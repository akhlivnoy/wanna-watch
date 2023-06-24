import { StyleSheet, ViewStyle } from 'react-native';

interface IGenreStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IGenreStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
