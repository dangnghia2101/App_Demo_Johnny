/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'
import codePush from 'react-native-code-push'

LogBox.ignoreAllLogs(true)

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL }

AppRegistry.registerComponent(appName, () => App)
