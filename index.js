// Note: If you skip this step,
// your app may crash in production even if it works fine in development.
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
