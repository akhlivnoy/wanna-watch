import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import { SVG } from '#assets/svg';
import { MainHeader } from '#components';
import { useAppSelector } from '#hooks';
import { apiInstance } from '#services/api';
import { generalStyles } from '#utils/styles';

import { styles } from './MovieDetailsScreen.styles';
import { MovieDetailsScreenProps } from './MovieDetailsScreen.types';

export const MovieDetailsScreen: React.ComponentType<MovieDetailsScreenProps> = ({ navigation }) => {
  const { movieDetails } = useAppSelector(state => state.tmdb);
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
        </View>
      </View>
    </SafeAreaView>
  );
};
