/**
 * @format
 */

import {AppRegistry} from 'react-native';
import  DeviceInformation from './src/features';
import {name as appName} from './app.json';
if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
AppRegistry.registerComponent(appName, () => DeviceInformation);
