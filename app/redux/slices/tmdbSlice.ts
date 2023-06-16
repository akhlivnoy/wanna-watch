import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { IGenre, IMovie, IMovieDetails, ISeries } from '#models';
import { GetGenresSuccessAction } from '#redux/types';
import {
  ApiGetMoviesSuccessResponse,
  ApiGetSeriesSuccessResponse,
  ApiGetTopRatedBody,
  ApiSearchBody,
} from '#services/api/types';
import { Nullable } from '#types/nullable';

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
  searchedMovie: {
    movies: IMovie[];
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  searchedSeries: {
    series: ISeries[];
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  movieDetails: Nullable<IMovieDetails>;
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
  searchedMovie: {
    movies: [],
    currentPage: 0,
    nextPage: 1,
    totalPages: 1,
  },
  searchedSeries: {
    series: [],
    currentPage: 0,
    nextPage: 1,
    totalPages: 1,
  },
  movieDetails: null,
};

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState: INITIAL_STATE,
  reducers: {
    //* Genres
    getGenres(state) {},
    getGenresSuccess(state, { payload: { movie, series } }: GetGenresSuccessAction) {
      state.movieGenres = movie.genres;
      state.seriesGenres = series.genres;
    },
    getGenresError(state, action: PayloadAction<string>) {},

    //* Top rated movies
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

    //* Top rated series
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

    //* Searched movie
    searchMovie(state, action: PayloadAction<ApiSearchBody>) {
      state.searchedMovie = _.cloneDeep(INITIAL_STATE.searchedMovie);
    },
    loadSearchedMovie(state, action: PayloadAction<ApiSearchBody>) {},
    searchMovieSuccess(state, { payload: { page, results, total_pages } }: PayloadAction<ApiGetMoviesSuccessResponse>) {
      state.searchedMovie.movies = _.concat(state.searchedMovie.movies, results);
      state.searchedMovie.currentPage = page;
      state.searchedMovie.nextPage += 1;
      state.searchedMovie.totalPages = total_pages;
    },
    searchMovieError(state, action: PayloadAction<string>) {},

    clearSearchMovie(state) {
      state.searchedMovie = _.cloneDeep(INITIAL_STATE.searchedMovie);
    },

    //* Searched series
    searchSeries(state, action: PayloadAction<ApiSearchBody>) {
      state.searchedSeries = _.cloneDeep(INITIAL_STATE.searchedSeries);
    },
    loadSearchedSeries(state, action: PayloadAction<ApiSearchBody>) {},
    searchSeriesSuccess(
      state,
      { payload: { page, results, total_pages } }: PayloadAction<ApiGetSeriesSuccessResponse>,
    ) {
      state.searchedSeries.series = _.concat(state.searchedSeries.series, results);
      state.searchedSeries.currentPage = page;
      state.searchedSeries.nextPage += 1;
      state.searchedSeries.totalPages = total_pages;
    },
    searchSeriesError(state, action: PayloadAction<string>) {},

    clearSearchSeries(state) {
      state.searchedSeries = _.cloneDeep(INITIAL_STATE.searchedSeries);
    },

    getMovieDetails(state, action: PayloadAction<number>) {},
    getMovieDetailsSuccess(state, { payload }: PayloadAction<IMovieDetails>) {
      state.movieDetails = payload;
    },
    getMovieDetailsError(state, action: PayloadAction<string>) {},
  },
});
