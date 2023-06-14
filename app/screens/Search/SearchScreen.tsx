import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Route, SceneRendererProps } from 'react-native-tab-view';

import { SearchBar, TopTabs } from '#components';
import { useAppDispatch, useAppSelector, useMount } from '#hooks';
import { tmdbSlice } from '#redux/slices';
import { generalStyles } from '#utils/styles';

import { SearchTab } from './components';
import { ROUTES, SearchTabType } from './SearchScreen.data';
import { styles } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.types';

export const SearchScreen: React.ComponentType<SearchScreenProps> = () => {
  const {
    topRatedMovies: { movies, nextPage },
  } = useAppSelector(state => state.tmdb);

  const dispatch = useAppDispatch();

  useMount(() => {
    dispatch(tmdbSlice.actions.getTopRatedMovies({ page: nextPage }));
  });

  const onEndReached = () => {
    dispatch(tmdbSlice.actions.getTopRatedMovies({ page: nextPage }));
  };

  const renderScene = ({ route }: SceneRendererProps & { route: Route }): React.ReactNode => {
    switch (route.key) {
      case SearchTabType.Movies:
        return (
          <SearchTab
            data={movies}
            type={SearchTabType.Movies}
            onEndReached={onEndReached}
          />
        );
      case SearchTabType.Series:
        return (
          <SearchTab
            data={movies}
            type={SearchTabType.Movies}
            onEndReached={onEndReached}
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
