import { StyleSheet, ViewStyle } from 'react-native';

interface ISearchSeriesTabStyles {
  container: ViewStyle;
  card: ViewStyle;
}

export const styles = StyleSheet.create<ISearchSeriesTabStyles>({
  container: {
    marginRight: 16,
  },
  card: {
    marginBottom: 8,
  },
});
