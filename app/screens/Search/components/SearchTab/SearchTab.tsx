import _ from 'lodash';
import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { Card, CardState } from '#components';
import { useAppSelector } from '#hooks';
import { IGenre, IMovie } from '#models';
import { apiInstance } from '#services/api';

import { styles } from './SearchTab.styles';
import { ISearchTabProps } from './SearchTab.types';

const SearchTabComponent: React.ComponentType<ISearchTabProps> = ({ data, onEndReached }) => {
  const { movieGenres } = useAppSelector(state => state.tmdb);

  const renderMovieItem = ({ item }: { item: IMovie }) => {
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

  return (
    <FlatList
      data={data}
      renderItem={renderMovieItem}
      style={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
    />
  );
};
export const SearchTab = memo(SearchTabComponent);
