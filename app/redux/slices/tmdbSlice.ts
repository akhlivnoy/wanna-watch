import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { IGenre, IMovie, ISeries } from '#models';
import { GetGenresSuccessAction } from '#redux/types';
import {
  ApiGetMoviesSuccessResponse,
  ApiGetSeriesSuccessResponse,
  ApiGetTopRatedBody,
  ApiSearchBody,
} from '#services/api/types';

interface ITmdbState {
  movieGenres: IGenre[];
  seriesGenres: IGenre[];
  topRatedMovies: {
    movies: IMovie[];
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  topRatedSeries: {
    series: ISeries[];
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  searchMovie: {
    movies: IMovie[];
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  searchSeries: {
    series: ISeries[];
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
}

const INITIAL_STATE: ITmdbState = {
  movieGenres: [],
  seriesGenres: [],
  topRatedMovies: {
    movies: [],
    currentPage: 0,
    nextPage: 1,
    totalPages: 1,
  },
  topRatedSeries: {
    series: [],
    currentPage: 0,
    nextPage: 1,
    totalPages: 1,
  },
  searchMovie: {
    movies: [],
    currentPage: 0,
    nextPage: 1,
    totalPages: 1,
  },
  searchSeries: {
    series: [],
    currentPage: 0,
    nextPage: 1,
    totalPages: 1,
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
    getTopRatedMoviesSuccess(
      state,
      { payload: { page, results, total_pages } }: PayloadAction<ApiGetMoviesSuccessResponse>,
    ) {
      state.topRatedMovies.movies = _.concat(state.topRatedMovies.movies, results);
      state.topRatedMovies.currentPage = page;
      state.topRatedMovies.nextPage += 1;
      state.topRatedMovies.totalPages = total_pages;
    },
    getTopRatedMoviesError(state, action: PayloadAction<string>) {},

    clearTopRatedMovies(state) {
      state.topRatedMovies = _.cloneDeep(INITIAL_STATE.topRatedMovies);
    },

    getTopRatedSeries(state, action: PayloadAction<ApiGetTopRatedBody>) {},
    getTopRatedSeriesSuccess(
      state,
      { payload: { page, results, total_pages } }: PayloadAction<ApiGetSeriesSuccessResponse>,
    ) {
      state.topRatedSeries.series = _.concat(state.topRatedSeries.series, results);
      state.topRatedSeries.currentPage = page;
      state.topRatedSeries.nextPage += 1;
      state.topRatedSeries.totalPages = total_pages;
    },
    getTopRatedSeriesError(state, action: PayloadAction<string>) {},

    clearTopRatedSeries(state) {
      state.topRatedSeries = _.cloneDeep(INITIAL_STATE.topRatedSeries);
    },

    searchMovie(state, action: PayloadAction<ApiSearchBody>) {},
    searchMovieSuccess(state, { payload: { page, results, total_pages } }: PayloadAction<ApiGetMoviesSuccessResponse>) {
      state.searchMovie.movies = _.concat(state.searchMovie.movies, results);
      state.searchMovie.currentPage = page;
      state.searchMovie.nextPage += 1;
      state.searchMovie.totalPages = total_pages;
    },
    searchMovieError(state, action: PayloadAction<string>) {},

    clearSearchMovie(state) {
      state.searchMovie = _.cloneDeep(INITIAL_STATE.searchMovie);
    },

    searchSeries(state, action: PayloadAction<ApiSearchBody>) {},
    searchSeriesSuccess(
      state,
      { payload: { page, results, total_pages } }: PayloadAction<ApiGetSeriesSuccessResponse>,
    ) {
      state.searchSeries.series = _.concat(state.searchSeries.series, results);
      state.searchSeries.currentPage = page;
      state.searchSeries.nextPage += 1;
      state.searchSeries.totalPages = total_pages;
    },
    searchSeriesError(state, action: PayloadAction<string>) {},

    clearSearchSeries(state) {
      state.searchSeries = _.cloneDeep(INITIAL_STATE.searchSeries);
    },
  },
});
