import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Route, SceneRendererProps } from 'react-native-tab-view';

import { SearchBar, TopTabs } from '#components';
import { useAppDispatch, useAppSelector, useMount } from '#hooks';
import { IMovie, ISeries } from '#models';
import { tmdbSlice } from '#redux/slices';
import { generalStyles } from '#utils/styles';

import { SearchMoviesTab, SearchSeriesTab } from './components';
import { ROUTES, SearchTabType } from './SearchScreen.data';
import { styles } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.types';

export const SearchScreen: React.ComponentType<SearchScreenProps> = () => {
  //* States
  const [searchBarValue, setSearchBarValue] = useState('');
  const [moviesData, setMoviesData] = useState<IMovie[]>([]);
  const [seriesData, setSeriesData] = useState<ISeries[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  //* Redux
  const { topRatedMovies, topRatedSeries, searchedMovie, searchedSeries } = useAppSelector(state => state.tmdb);

  const dispatch = useAppDispatch();

  //* Functions

  const getTopRatedMovies = useCallback(() => {
    if (topRatedMovies.nextPage <= topRatedMovies.totalPages) {
      dispatch(tmdbSlice.actions.getTopRatedMovies({ page: topRatedMovies.nextPage }));
    }
  }, [dispatch, topRatedMovies.nextPage, topRatedMovies.totalPages]);

  const getTopRatedSeries = useCallback(() => {
    if (topRatedSeries.nextPage <= topRatedSeries.totalPages) {
      dispatch(tmdbSlice.actions.getTopRatedSeries({ page: topRatedSeries.nextPage }));
    }
  }, [dispatch, topRatedSeries.nextPage, topRatedSeries.totalPages]);

  const searchMovie = useCallback(() => {
    if (searchBarValue !== '') {
      dispatch(tmdbSlice.actions.searchMovie({ query: searchBarValue }));
      setIsSearch(true);
    }
  }, [dispatch, searchBarValue]);

  const searchSeries = useCallback(() => {
    if (searchBarValue !== '') {
      dispatch(tmdbSlice.actions.searchSeries({ query: searchBarValue }));
      setIsSearch(true);
    }
  }, [dispatch, searchBarValue]);

  const onMoviesEndReached = useCallback(() => {
    if (isSearch) {
      if (searchedMovie.nextPage <= searchedMovie.totalPages) {
        dispatch(tmdbSlice.actions.loadSearchedMovie({ query: searchBarValue, page: searchedMovie.nextPage }));
      }
      return;
    }

    getTopRatedMovies();
  }, [dispatch, getTopRatedMovies, isSearch, searchBarValue, searchedMovie.nextPage, searchedMovie.totalPages]);

  const onSeriesEndReached = useCallback(() => {
    if (isSearch) {
      if (searchedSeries.nextPage <= searchedSeries.totalPages) {
        dispatch(tmdbSlice.actions.loadSearchedSeries({ query: searchBarValue, page: searchedSeries.nextPage }));
      }
      return;
    }

    getTopRatedSeries();
  }, [dispatch, getTopRatedSeries, isSearch, searchBarValue, searchedSeries.nextPage, searchedSeries.totalPages]);

  const onBlur = useCallback(() => {
    if (searchBarValue === '') {
      setIsSearch(false);
      setMoviesData(topRatedMovies.movies);
      setSeriesData(topRatedSeries.series);
    }
  }, [searchBarValue, topRatedMovies.movies, topRatedSeries.series]);

  const onSearchSubmit = useCallback(() => {
    searchMovie();
    searchSeries();
  }, [searchMovie, searchSeries]);

  //* Render Tabs
  const renderScene = ({ route }: SceneRendererProps & { route: Route }): React.ReactNode => {
    switch (route.key) {
      case SearchTabType.Movies:
        return (
          <SearchMoviesTab
            data={moviesData}
            onEndReached={onMoviesEndReached}
          />
        );
      case SearchTabType.Series:
        return (
          <SearchSeriesTab
            data={seriesData}
            onEndReached={onSeriesEndReached}
          />
        );
      default:
        return null;
    }
  };

  //* Effects

  useMount(() => {
    getTopRatedMovies();
    getTopRatedSeries();
  });

  useEffect(() => {
    if (isSearch) {
      setMoviesData(searchedMovie.movies);
    } else {
      setMoviesData(topRatedMovies.movies);
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovie.movies, topRatedMovies.movies]);

  useEffect(() => {
    if (isSearch) {
      setSeriesData(searchedSeries.series);
    } else {
      setSeriesData(topRatedSeries.series);
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedSeries.series, topRatedSeries.series]);

  return (
    <SafeAreaView style={generalStyles.blackFlex}>
      <View style={styles.container}>
        <SearchBar
          containerStyle={styles.searchBar}
          onBlur={onBlur}
          onChangeText={setSearchBarValue}
          onIconPress={onSearchSubmit}
          onSubmitEditing={onSearchSubmit}
        />
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
