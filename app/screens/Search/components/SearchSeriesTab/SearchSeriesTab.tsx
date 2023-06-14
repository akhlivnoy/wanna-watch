import _ from 'lodash';
import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { Card, CardState } from '#components';
import { useAppSelector } from '#hooks';
import { IGenre, ISeries } from '#models';
import { apiInstance } from '#services/api';

import { styles } from './SearchSeriesTab.styles';
import { ISearchSeriesTabProps } from './SearchSeriesTab.types';

const SearchSeriesTabComponent: React.ComponentType<ISearchSeriesTabProps> = ({ data, onEndReached }) => {
  const { seriesGenres } = useAppSelector(state => state.tmdb);

  const renderItem = ({ item }: { item: ISeries }) => {
    const genres: IGenre[] = _.filter(seriesGenres, genre => _.includes(item.genre_ids, genre.id)).slice(0, 3);

    return (
      <Card
        date={item.first_air_date}
        genres={genres}
        posterUri={apiInstance.tmdb.getImageUri(item.poster_path)}
        rating={item.vote_average}
        state={CardState.NotAdded}
        style={styles.card}
        title={item.name}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
    />
  );
};
export const SearchSeriesTab = memo(SearchSeriesTabComponent);
