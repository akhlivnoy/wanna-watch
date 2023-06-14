import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { IGenre, IMovie } from '#models';
import { GetGenresSuccessAction } from '#redux/types';
import { ApiGetTopRatedMoviesBody, ApiGetTopRatedMoviesSuccessResponse } from '#services/api/types';

interface ITmdbState {
  movieGenres: IGenre[];
  seriesGenres: IGenre[];
  topRatedMovies: {
    movies: IMovie[];
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

    getTopRatedMovies(state, action: PayloadAction<ApiGetTopRatedMoviesBody>) {},
    getTopRatedMoviesSuccess(state, { payload: { results } }: PayloadAction<ApiGetTopRatedMoviesSuccessResponse>) {
      state.topRatedMovies.movies = _.concat(state.topRatedMovies.movies, results);
      state.topRatedMovies.nextPage += 1;
    },
    getTopRatedMoviesError(state, action: PayloadAction<string>) {},

    clearTopRatedMovies(state) {
      state.topRatedMovies = _.clone(INITIAL_STATE.topRatedMovies);
    },
  },
});
