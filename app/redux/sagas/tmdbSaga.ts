import { PayloadAction } from '@reduxjs/toolkit';
import { isUndefined } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HomeStackRouteNames, RootStackRouteNames } from '#navigation';
import { tmdbSlice } from '#redux/slices';
import { apiInstance } from '#services/api';
import {
  ApiGetMovieDetailsResponse,
  ApiGetMovieGenresResponse,
  ApiGetMoviesResponse,
  ApiGetSeriesDetailsResponse,
  ApiGetSeriesGenresResponse,
  ApiGetSeriesResponse,
  ApiGetSeriesSeasonDetailsBody,
  ApiGetSeriesSeasonDetailsResponse,
  ApiGetTopRatedBody,
  ApiSearchBody,
} from '#services/api/types';
import { StaticNavigator } from '#services/navigator';

function* getGenresWorker() {
  const movieResponse: ApiGetMovieGenresResponse = yield call(apiInstance.tmdb.getMovieGenres);
  const seriesResponse: ApiGetSeriesGenresResponse = yield call(apiInstance.tmdb.getSeriesGenres);

  if (!isUndefined(movieResponse.data) && !isUndefined(seriesResponse.data)) {
    if (movieResponse.ok && seriesResponse.ok) {
      yield put(
        tmdbSlice.actions.getGenresSuccess({
          movie: movieResponse.data,
          series: seriesResponse.data,
        }),
      );
    }

    if (!movieResponse.ok) {
      yield put(tmdbSlice.actions.getGenresError(movieResponse.data.status_message));
    }

    if (!seriesResponse.ok) {
      yield put(tmdbSlice.actions.getGenresError(seriesResponse.data.status_message));
    }

    StaticNavigator.navigateTo(RootStackRouteNames.MainTab);
  }
}

function* getTopRatedMoviesWorker({ payload: body }: PayloadAction<ApiGetTopRatedBody>) {
  const response: ApiGetMoviesResponse = yield call(apiInstance.tmdb.getTopRatedMovies, body);
  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.getTopRatedMoviesSuccess(response.data));
    } else {
      yield put(tmdbSlice.actions.getTopRatedMoviesError(response.data.status_message));
    }
  }
}

function* getTopRatedSeriesWorker({ payload: body }: PayloadAction<ApiGetTopRatedBody>) {
  const response: ApiGetSeriesResponse = yield call(apiInstance.tmdb.getTopRatedSeries, body);
  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.getTopRatedSeriesSuccess(response.data));
    } else {
      yield put(tmdbSlice.actions.getTopRatedSeriesError(response.data.status_message));
    }
  }
}

function* searchMovieWorker({ payload: body }: PayloadAction<ApiSearchBody>) {
  const response: ApiGetMoviesResponse = yield call(apiInstance.tmdb.searchMovie, body);

  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.searchMovieSuccess(response.data));
    } else {
      yield put(tmdbSlice.actions.searchMovieError(response.data.status_message));
    }
  }
}

function* searchSeriesWorker({ payload: body }: PayloadAction<ApiSearchBody>) {
  const response: ApiGetSeriesResponse = yield call(apiInstance.tmdb.searchSeries, body);

  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.searchSeriesSuccess(response.data));
    } else {
      yield put(tmdbSlice.actions.searchSeriesError(response.data.status_message));
    }
  }
}

function* getMovieDetailsWorker({ payload }: PayloadAction<number>) {
  const response: ApiGetMovieDetailsResponse = yield call(apiInstance.tmdb.getMovieDetails, payload);

  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.getMovieDetailsSuccess(response.data));
      StaticNavigator.navigateTo(HomeStackRouteNames.MovieDetails);
    } else {
      yield put(tmdbSlice.actions.getMovieDetailsError(response.data.status_message));
    }
  }
}

function* getSeriesDetailsWorker({ payload: seriesId }: PayloadAction<number>) {
  const response: ApiGetSeriesDetailsResponse = yield call(apiInstance.tmdb.getSeriesDetails, seriesId);

  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.getSeriesDetailsSuccess(response.data));
      StaticNavigator.navigateTo(HomeStackRouteNames.SeriesDetails);
    } else {
      yield put(tmdbSlice.actions.getSeriesDetailsError(response.data.status_message));
    }
  }
}

function* getSeriesSeasonDetailsWorker({ payload: body }: PayloadAction<ApiGetSeriesSeasonDetailsBody>) {
  const response: ApiGetSeriesSeasonDetailsResponse = yield call(apiInstance.tmdb.getSeriesSeasonDetails, body);

  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.getSeriesSeasonDetailsSuccess(response.data));
    } else {
      yield put(tmdbSlice.actions.getSeriesSeasonDetailsError(response.data.status_message));
    }
  }
}

export function* tmdbSaga() {
  yield takeLatest(tmdbSlice.actions.getGenres, getGenresWorker);
  yield takeLatest(tmdbSlice.actions.getTopRatedMovies, getTopRatedMoviesWorker);
  yield takeLatest(tmdbSlice.actions.getTopRatedSeries, getTopRatedSeriesWorker);

  yield takeLatest(tmdbSlice.actions.searchMovie, searchMovieWorker);
  yield takeLatest(tmdbSlice.actions.loadSearchedMovie, searchMovieWorker);

  yield takeLatest(tmdbSlice.actions.searchSeries, searchSeriesWorker);
  yield takeLatest(tmdbSlice.actions.loadSearchedSeries, searchSeriesWorker);

  yield takeLatest(tmdbSlice.actions.getMovieDetails, getMovieDetailsWorker);
  yield takeLatest(tmdbSlice.actions.getSeriesDetails, getSeriesDetailsWorker);
  yield takeLatest(tmdbSlice.actions.getSeriesSeasonDetails, getSeriesSeasonDetailsWorker);
}
