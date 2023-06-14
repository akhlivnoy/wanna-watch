import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { IGenre, IMovie, ISeries } from '#models';
import { GetGenresSuccessAction } from '#redux/types';
import {
  ApiGetTopRatedBody,
  ApiGetTopRatedMoviesSuccessResponse,
  ApiGetTopRatedSeriesSuccessResponse,
} from '#services/api/types';

interface ITmdbState {
  movieGenres: IGenre[];
  seriesGenres: IGenre[];
  topRatedMovies: {
    movies: IMovie[];
    nextPage: number;
  };
  topRatedSeries: {
    series: ISeries[];
    nextPage: number;
  };
}

const INITIAL_STATE: ITmdbState = {
  movieGenres: [],
  seriesGenres: [],
  topRatedMovies: {
    movies: [],
    nextPage: 1,
  },
  topRatedSeries: {
    series: [],
    nextPage: 1,
  },
};

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState: INITIAL_STATE,
  reducers: {
    getGenres(state) {},
    getGenresSuccess(state, { payload: { movie, series } }: GetGenresSuccessAction) {
      state.movieGenres = movie.genres;
      state.seriesGenres = series.genres;
    },
    getGenresError(state, action: PayloadAction<string>) {},

    getTopRatedMovies(state, action: PayloadAction<ApiGetTopRatedBody>) {},
    getTopRatedMoviesSuccess(state, { payload: { results } }: PayloadAction<ApiGetTopRatedMoviesSuccessResponse>) {
      state.topRatedMovies.movies = _.concat(state.topRatedMovies.movies, results);
      state.topRatedMovies.nextPage += 1;
    },
    getTopRatedMoviesError(state, action: PayloadAction<string>) {},

    clearTopRatedMovies(state) {
      state.topRatedMovies = _.cloneDeep(INITIAL_STATE.topRatedMovies);
    },

    getTopRatedSeries(state, action: PayloadAction<ApiGetTopRatedBody>) {},
    getTopRatedSeriesSuccess(state, { payload: { results } }: PayloadAction<ApiGetTopRatedSeriesSuccessResponse>) {
      state.topRatedSeries.series = _.concat(state.topRatedSeries.series, results);
      state.topRatedSeries.nextPage += 1;
    },
    getTopRatedSeriesError(state, action: PayloadAction<string>) {},

    clearTopRatedSeries(state) {
      state.topRatedSeries = _.cloneDeep(INITIAL_STATE.topRatedSeries);
    },
  },
});
