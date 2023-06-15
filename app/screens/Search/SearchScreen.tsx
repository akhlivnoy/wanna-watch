import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Route, SceneRendererProps } from 'react-native-tab-view';

import { SearchBar, TopTabs } from '#components';
import { useAppDispatch, useAppSelector, useMount } from '#hooks';
import { tmdbSlice } from '#redux/slices';
import { generalStyles } from '#utils/styles';

import { SearchMoviesTab, SearchSeriesTab } from './components';
import { ROUTES, SearchTabType } from './SearchScreen.data';
import { styles } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.types';

export const SearchScreen: React.ComponentType<SearchScreenProps> = () => {
  const {
    topRatedMovies: { movies, nextPage: moviesNextPage, totalPages: moviesTotalPages },
    topRatedSeries: { series, nextPage: seriesNextPage, totalPages: seriesTotalPages },
  } = useAppSelector(state => state.tmdb);

  const dispatch = useAppDispatch();

  useMount(() => {
    dispatch(tmdbSlice.actions.getTopRatedMovies({ page: moviesNextPage }));
    dispatch(tmdbSlice.actions.getTopRatedSeries({ page: seriesNextPage }));
  });

  const onMoviesEndReached = () => {
    if (moviesNextPage <= moviesTotalPages) {
      dispatch(tmdbSlice.actions.getTopRatedMovies({ page: moviesNextPage }));
    }
  };

  const onSeriesEndReached = () => {
    if (seriesNextPage <= seriesTotalPages) {
      dispatch(tmdbSlice.actions.getTopRatedSeries({ page: seriesNextPage }));
    }
  };

  const renderScene = ({ route }: SceneRendererProps & { route: Route }): React.ReactNode => {
    switch (route.key) {
      case SearchTabType.Movies:
        return (
          <SearchMoviesTab
            data={movies}
            onEndReached={onMoviesEndReached}
          />
        );
      case SearchTabType.Series:
        return (
          <SearchSeriesTab
            data={series}
            onEndReached={onSeriesEndReached}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={generalStyles.blackFlex}>
      <View style={styles.container}>
        <SearchBar containerStyle={styles.searchBar} />
        <TopTabs
          renderScene={renderScene}
          routes={ROUTES}
          style={styles.topTabs}
          tabBarStyle={styles.tabBarStyle}
        />
      </View>
    </SafeAreaView>
  );
};
