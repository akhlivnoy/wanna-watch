import _ from 'lodash';
import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { Card, CardState } from '#components';
import { useAppDispatch, useAppSelector, useSpecificKeyExtractor } from '#hooks';
import { ISeries, ISeriesGenre } from '#models';
import { tmdbSlice } from '#redux/slices';
import { apiInstance } from '#services/api';

import { styles } from './SearchSeriesTab.styles';
import { ISearchSeriesTabProps } from './SearchSeriesTab.types';

const SearchSeriesTabComponent: React.ComponentType<ISearchSeriesTabProps> = ({ data, onEndReached }) => {
  const { seriesGenres } = useAppSelector(state => state.tmdb);
  const dispatch = useAppDispatch();

  const renderItem = ({ item }: { item: ISeries }) => {
    const genres: ISeriesGenre[] = _.filter(seriesGenres, genre => _.includes(item.genre_ids, genre.id)).slice(0, 3);

    const onPress = () => {
      dispatch(tmdbSlice.actions.getSeriesDetails(item.id));
    };

    return (
      <Card
        date={item.first_air_date}
        genres={genres}
        posterUri={item.poster_path && apiInstance.tmdb.getImageUri(item.poster_path)}
        rating={item.vote_average}
        state={CardState.NotAdded}
        style={styles.card}
        title={item.name}
        onPress={onPress}
      />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={useSpecificKeyExtractor<ISeries>('series', 'id')}
      renderItem={renderItem}
      style={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
    />
  );
};
export const SearchSeriesTab = memo(SearchSeriesTabComponent);
