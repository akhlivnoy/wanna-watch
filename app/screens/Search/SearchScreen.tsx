import _ from 'lodash';
import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import { Card, CardState } from '#components';
import { useAppDispatch, useAppSelector, useMount } from '#hooks';
import { IGenre, IMovie } from '#models';
import { tmdbSlice } from '#redux/slices';
import { apiInstance } from '#services/api';
import { generalStyles } from '#utils/styles';

import { styles } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.types';

export const SearchScreen: React.ComponentType<SearchScreenProps> = () => {
  const {
    movieGenres,
    topRatedMovies: { movies, nextPage },
  } = useAppSelector(state => state.tmdb);

  const dispatch = useAppDispatch();

  useMount(() => {
    dispatch(tmdbSlice.actions.getTopRatedMovies({ page: nextPage }));
  });

  const renderItem = ({ item }: { item: IMovie }) => {
    const genres: IGenre[] = _.filter(movieGenres, genre => _.includes(item.genre_ids, genre.id)).slice(0, 3);

    return (
      <Card
        date={item.release_date}
        genres={genres}
        posterUri={apiInstance.tmdb.getImageUri(item.poster_path)}
        rating={item.vote_average}
        state={CardState.NotAdded}
        style={styles.card}
        title={item.title}
      />
    );
  };

  const onEndReached = () => {
    dispatch(tmdbSlice.actions.getTopRatedMovies({ page: nextPage }));
  };

  return (
    <SafeAreaView style={generalStyles.blackFlex}>
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
        />
      </View>
    </SafeAreaView>
  );
};
