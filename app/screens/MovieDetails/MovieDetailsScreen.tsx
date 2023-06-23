import _ from 'lodash';
import React, { useMemo } from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedText, MainHeader } from '#components';
import { useAppSelector } from '#hooks';
import { apiInstance } from '#services/api';
import { generalStyles } from '#utils/styles';

import { DetailCard, DetailCardType, Genre, IDetailCard } from './components';
import { styles } from './MovieDetailsScreen.styles';
import { MovieDetailsScreenProps } from './MovieDetailsScreen.types';

export const MovieDetailsScreen: React.ComponentType<MovieDetailsScreenProps> = ({ navigation }) => {
  const { movieDetails } = useAppSelector(state => state.tmdb);

  const detailCards: ReadonlyArray<IDetailCard> = useMemo(
    () =>
      movieDetails
        ? [
            {
              value: movieDetails.runtime,
              type: DetailCardType.RunTime,
            },
            {
              value: movieDetails.vote_average,
              type: DetailCardType.Rating,
            },
            {
              value: movieDetails.production_countries[0].iso_3166_1,
              type: DetailCardType.Country,
            },
          ]
        : [],
    [movieDetails],
  );

  const subscribeIcon = useMemo(() => {
    if (movieDetails?.status !== 'Canceled' && movieDetails?.status !== 'Released') {
      return (
        <TouchableOpacity>
          <SVG.BellAdd />
        </TouchableOpacity>
      );
    }

    return null;
  }, [movieDetails?.status]);

  return (
    <SafeAreaView style={generalStyles.blackFlex}>
      <MainHeader
        LeftSvgIcon={SVG.LeftArrow}
        title="Movie details"
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <View style={generalStyles.row}>
          {
            // ? Poster
            movieDetails?.poster_path ? (
              <Image
                source={{ uri: apiInstance.tmdb.getImageUri(movieDetails.poster_path) }}
                style={styles.poster}
              />
            ) : (
              <View style={styles.noImage}>
                <SVG.NoImage
                  height={100}
                  width={100}
                />
              </View>
            )
          }

          <View style={generalStyles.flex}>
            {/* //? Detail cards */}
            <View style={styles.detailCards}>
              {_.map(detailCards, ({ value, type }) => (
                <DetailCard
                  key={type + value}
                  type={type}
                  value={value}
                />
              ))}
            </View>
            {/* //? Genres */}
            <View style={styles.genres}>
              {movieDetails &&
                _.map(movieDetails.genres, genre => (
                  <Genre
                    key={genre.name}
                    name={genre.name}
                  />
                ))}
            </View>
          </View>
        </View>

        {/* //? Title */}
        <ExtendedText preset="semibold24">{movieDetails?.title}</ExtendedText>

        {/* //? Status */}
        <View style={[generalStyles.row, generalStyles.jcSpaceBtw]}>
          <View style={styles.statusContainer}>
            <SVG.Calendar />
            <ExtendedText preset="regular14">{movieDetails?.release_date}</ExtendedText>
            <View style={styles.statusSeparator} />
            <ExtendedText preset="regular14">{movieDetails?.status}</ExtendedText>
          </View>
          {subscribeIcon}
        </View>
      </View>
    </SafeAreaView>
  );
};
