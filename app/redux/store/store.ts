import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { ConfiguredReactotron } from '#services/reactotron';

import { rootSaga } from '../sagas';
import { appSlice, tmdbSlice } from '../slices';

export const rootReducer = combineReducers({
  app: appSlice.reducer,
  tmdb: tmdbSlice.reducer,
});

const PERSIST_CONFIG: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);

// Connect saga output to reactotron if debug
let sagaMiddleware: ReturnType<typeof createSagaMiddleware>;
if (__DEV__) {
  const sagaMonitor = ConfiguredReactotron.createSagaMonitor?.();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
} else {
  sagaMiddleware = createSagaMiddleware();
}

const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware)];

if (__DEV__) {
  const reactotronEnhancer = ConfiguredReactotron.createEnhancer?.() as StoreEnhancer | undefined;
  if (reactotronEnhancer) {
    enhancers.push(reactotronEnhancer);
  }
}

export const store = configureStore({
  reducer: persistedReducer,
  enhancers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Unсomment this line and re-launch the app to clear persisted cache
// persistor.purge();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
