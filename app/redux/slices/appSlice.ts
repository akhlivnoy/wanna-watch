import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Nullable } from '#types/nullable';

import { ErrorType, LoadingType } from '../types';
import { tmdbSlice } from './tmdbSlice';

export interface IAppState {
  loading: Record<LoadingType, boolean>;
  errors: Record<ErrorType, Nullable<string>>;
}

const INITIAL_STATE: IAppState = {
  loading: {
    isGetGenres: false,
    isGetTopRatedMovies: false,
    isGetTopRatedSeries: false,
    isSearchMovie: false,
    isSearchSeries: false,
  },
  errors: {
    getGenres: null,
    getTopRatedMovies: null,
    getTopRatedSeries: null,
    searchMovie: null,
    searchSeries: null,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setError(state, { payload: { error, errorType } }: PayloadAction<{ errorType: ErrorType; error: string }>) {
      state.errors[errorType] = error;
    },
    resetErrors(state) {
      state.errors = _.cloneDeep(INITIAL_STATE.errors);
    },
  },
  extraReducers: builder => {
    const addCases = (
      [actionRequest, actionSuccess, actionError]: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ActionCreatorWithPayload<any>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ActionCreatorWithPayload<any>,
        ActionCreatorWithPayload<string, string>,
      ],
      loadingType: LoadingType,
      errorType: ErrorType,
    ) => {
      builder.addCase(actionRequest, state => {
        state.loading[loadingType] = true;
        state.errors[errorType] = null;
      });
      builder.addCase(actionSuccess, state => {
        state.loading[loadingType] = false;
      });
      builder.addCase(actionError, (state, action) => {
        state.loading[loadingType] = false;
        state.errors[errorType] = action.payload;
      });
    };

    // Get genres
    addCases(
      [tmdbSlice.actions.getGenres, tmdbSlice.actions.getGenresSuccess, tmdbSlice.actions.getGenresError],
      LoadingType.isGetGenres,
      ErrorType.getGenres,
    );

    // Get top rated movies
    addCases(
      [
        tmdbSlice.actions.getTopRatedMovies,
        tmdbSlice.actions.getTopRatedMoviesSuccess,
        tmdbSlice.actions.getTopRatedMoviesError,
      ],
      LoadingType.isGetTopRatedMovies,
      ErrorType.getTopRatedMovies,
    );

    // Get top rated series
    addCases(
      [
        tmdbSlice.actions.getTopRatedSeries,
        tmdbSlice.actions.getTopRatedSeriesSuccess,
        tmdbSlice.actions.getTopRatedSeriesError,
      ],
      LoadingType.isGetTopRatedSeries,
      ErrorType.getTopRatedSeries,
    );

    // Search movie
    addCases(
      [tmdbSlice.actions.searchMovie, tmdbSlice.actions.searchMovieSuccess, tmdbSlice.actions.searchMovieError],
      LoadingType.isSearchMovie,
      ErrorType.searchMovie,
    );

    // Search series
    addCases(
      [tmdbSlice.actions.searchSeries, tmdbSlice.actions.searchSeriesSuccess, tmdbSlice.actions.searchSeriesError],
      LoadingType.isSearchSeries,
      ErrorType.searchSeries,
    );
  },
});
