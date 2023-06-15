import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { SVG } from '#assets/svg';
import { useAppDispatch, useMount } from '#hooks';
import { tmdbSlice } from '#redux/slices';

import { styles } from './InitialScreen.styles';
import { InitialScreenProps } from './InitialScreen.types';

export const InitialScreen: React.ComponentType<InitialScreenProps> = () => {
  const dispatch = useAppDispatch();

  useMount(() => {
    dispatch(tmdbSlice.actions.getGenres());
    dispatch(tmdbSlice.actions.clearTopRatedMovies());
    dispatch(tmdbSlice.actions.clearTopRatedSeries());
    dispatch(tmdbSlice.actions.clearSearchMovie());
    dispatch(tmdbSlice.actions.clearSearchSeries());
  });

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <SVG.LogoWithDescription
          height={233}
          width={280}
        />
      </View>
    </SafeAreaView>
  );
};
