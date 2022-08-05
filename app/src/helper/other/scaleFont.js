import {Platform} from 'react-native';
import {s} from 'react-native-size-matters';

export const scaleFont = size => {
  const newSize = Platform.OS == 'ios' ? size : size;
  return s(newSize);
};
