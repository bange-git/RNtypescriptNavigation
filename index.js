/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
//import App from './AppTabNavigator';
import App from './AppDrawerNavigator';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
