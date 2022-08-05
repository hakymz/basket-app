import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const GENERAL = {
  statusBarHeight: getStatusBarHeight(),
  platform: Platform.OS,
};

export default GENERAL;
