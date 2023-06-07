import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { RootNavigator } from './app/navigation/RootStackNavigator';
import { persistor, store } from './app/redux';

const App: React.ComponentType = () => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <RootNavigator />
    </PersistGate>
  </Provider>
);

export default App;
