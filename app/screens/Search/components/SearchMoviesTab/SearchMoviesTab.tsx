import _ from 'lodash';
import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { Card, CardState } from '#components';
import { useAppDispatch, useAppSelector, useSpecificKeyExtractor } from '#hooks';
import { IMovie, IMovieGenre } from '#models';
import { tmdbSlice } from '#redux/slices';
import { apiInstance } from '#services/api';

import { styles } from './SearchMoviesTab.styles';
import { ISearchMoviesTabProps } from './SearchMoviesTab.types';

const SearchMoviesTabComponent: React.ComponentType<ISearchMoviesTabProps> = ({ data, onEndReached }) => {
  const { movieGenres } = useAppSelector(state => state.tmdb);
  const dispatch = useAppDispatch();

  const renderItem = ({ item }: { item: IMovie }) => {
    const genres: IMovieGenre[] = _.filter(movieGenres, genre => _.includes(item.genre_ids, genre.id)).slice(0, 3);

    const onPress = () => {
      dispatch(tmdbSlice.actions.getMovieDetails(item.id));
    };

    return (
      <Card
        date={item.release_date}
        genres={genres}
        posterUri={item.poster_path && apiInstance.tmdb.getImageUri(item.poster_path)}
        rating={item.vote_average}
        state={CardState.NotAdded}
        style={styles.card}
        title={item.title}
        onPress={onPress}
      />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={useSpecificKeyExtractor<IMovie>('movie', 'id')}
      renderItem={renderItem}
      style={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
    />
  );
};
export const SearchMoviesTab = memo(SearchMoviesTabComponent);
