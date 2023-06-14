import { all } from 'redux-saga/effects';

import { tmdbSaga } from './tmdbSaga';

export function* rootSaga() {
  yield all([tmdbSaga()]);
}
