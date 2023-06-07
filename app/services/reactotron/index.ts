/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  // IP variable for real device support
  const HOST_IP = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

  // Host & port to sync reactotron between real devices
  Reactotron.configure({ host: HOST_IP, port: 9090 })
    .useReactNative()
    .setAsyncStorageHandler?.(AsyncStorage)
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  // Decorate console.log to attach all logs to reactotron
  const nativeConsoleLog = console.log;
  console.log = (...args) => {
    nativeConsoleLog(...args);
    Reactotron.log?.(...args);
  };
}

export const ConfiguredReactotron = Reactotron ?? {};
