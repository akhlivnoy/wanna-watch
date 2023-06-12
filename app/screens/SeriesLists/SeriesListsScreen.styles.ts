import { StyleSheet, ViewStyle } from 'react-native';

interface ISeriesListsScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ISeriesListsScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
