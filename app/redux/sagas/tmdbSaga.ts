import { PayloadAction } from '@reduxjs/toolkit';
import { isUndefined } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';

import { RootStackRouteNames } from '#navigation';
import { tmdbSlice } from '#redux/slices';
import { apiInstance } from '#services/api';
import { ApiGetGenresResponse, ApiGetTopRatedMoviesBody, ApiGetTopRatedMoviesResponse } from '#services/api/types';
import { StaticNavigator } from '#services/navigator';

function* getGenresWorker() {
  const movieResponse: ApiGetGenresResponse = yield call(apiInstance.tmdb.getMovieGenres);
  const seriesResponse: ApiGetGenresResponse = yield call(apiInstance.tmdb.getSeriesGenres);

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

function* getTopRatedMoviesWorker({ payload: { page } }: PayloadAction<ApiGetTopRatedMoviesBody>) {
  const body: ApiGetTopRatedMoviesBody = {
    page,
  };
  const response: ApiGetTopRatedMoviesResponse = yield call(apiInstance.tmdb.getTopRatedMovies, body);
  if (!isUndefined(response.data)) {
    if (response.ok) {
      yield put(tmdbSlice.actions.getTopRatedMoviesSuccess(response.data));
    } else {
      yield put(tmdbSlice.actions.getTopRatedMoviesError(response.data.status_message));
    }
  }
}

export function* tmdbSaga() {
  yield takeLatest(tmdbSlice.actions.getGenres, getGenresWorker);
  yield takeLatest(tmdbSlice.actions.getTopRatedMovies, getTopRatedMoviesWorker);
}
