import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedButton, ExtendedText, MainHeader } from '#components';
import { useAppSelector } from '#hooks';
import { ICredit } from '#models';
import { apiInstance } from '#services/api';
import { generalStyles } from '#utils/styles';

import { ActorCard, DetailCard, DetailCardType, Genre, IDetailCard, IDropDownItem, SelectSeason } from './components';
import { styles } from './SeriesDetailsScreen.styles';
import { SeriesDetailsScreenProps } from './SeriesDetailsScreen.types';

export const SeriesDetailsScreen: React.ComponentType<SeriesDetailsScreenProps> = ({ navigation }) => {
  const [dropDownData, setDropDownData] = useState<IDropDownItem[]>([]);

  const { seriesDetails, seriesSeasonDetails } = useAppSelector(state => state.tmdb);

  const detailCards: ReadonlyArray<IDetailCard> = useMemo(
    () =>
      seriesDetails
        ? [
            {
              value: seriesDetails.number_of_seasons,
              type: DetailCardType.Seasons,
            },
            {
              value: seriesDetails.vote_average,
              type: DetailCardType.Rating,
            },
            {
              value: seriesDetails.production_countries[0].iso_3166_1,
              type: DetailCardType.Country,
            },
          ]
        : [],
    [seriesDetails],
  );

  const subscribeIcon = useMemo(() => {
    if (seriesDetails?.status !== 'Canceled' && seriesDetails?.status !== 'Ended') {
      return (
        <TouchableOpacity>
          <SVG.BellAdd />
        </TouchableOpacity>
      );
    }

    return null;
  }, [seriesDetails?.status]);

  useEffect(() => {
    setDropDownData(
      _.map(
        seriesDetails?.seasons,
        (season): IDropDownItem => ({
          label: season.name,
          value: season.season_number,
        }),
      ),
    );
  }, [seriesDetails?.seasons]);

  const renderItem = ({ item }: { item: ICredit }) => {
    const [characterName, character] = item.character.split(' / ');
    return (
      <ActorCard
        character={character}
        characterName={characterName}
        name={item.name}
        profilePath={item.profile_path}
      />
    );
  };

  return (
    <SafeAreaView style={generalStyles.blackFlex}>
      <MainHeader
        LeftSvgIcon={SVG.LeftArrow}
        title="Movie details"
        onLeftIconPress={navigation.goBack}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={generalStyles.row}>
            {
              // ? Poster
              seriesDetails?.poster_path ? (
                <Image
                  source={{ uri: apiInstance.tmdb.getImageUri(seriesDetails.poster_path) }}
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
                {seriesDetails &&
                  _.map(seriesDetails.genres, genre => (
                    <Genre
                      key={genre.name}
                      name={genre.name}
                    />
                  ))}
              </View>
            </View>
          </View>

          {/* //? Title */}
          <ExtendedText preset="semibold24">{seriesDetails?.name}</ExtendedText>

          {/* //? Status */}
          <View style={[generalStyles.row, generalStyles.jcSpaceBtw]}>
            <View style={styles.statusContainer}>
              <SVG.Calendar />
              <ExtendedText preset="regular14">
                {seriesDetails?.first_air_date} — {seriesDetails?.last_air_date}
              </ExtendedText>
              <View style={styles.verticalSeparator} />
              <ExtendedText preset="regular14">{seriesDetails?.status}</ExtendedText>
            </View>
            {subscribeIcon}
          </View>

          <ExtendedText preset="regular12">{seriesDetails?.overview}</ExtendedText>

          <View style={[generalStyles.row, generalStyles.jcSpaceBtw]}>
            <ExtendedButton
              icon={SVG.PlusCircle}
              title="To Watch"
            />

            <SelectSeason data={dropDownData} />
          </View>

          <View style={styles.horizontalSeparator} />

          {/* //? Actors */}
          <ExtendedText preset="medium20">Actors</ExtendedText>
          <FlatList
            horizontal
            contentContainerStyle={styles.actors}
            data={seriesSeasonDetails?.credits.cast}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
