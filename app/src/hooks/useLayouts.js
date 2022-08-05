import React from 'react';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {s} from 'react-native-size-matters';
import {GENERAL} from '../conts';

export const useLayouts = () => {
  const {height, width} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const minHeight = Math.floor(
    height - s(GENERAL.statusBarHeight + insets.bottom + GENERAL.headerHeight),
  );

  return {
    minHeight,
    height,
    width,
  };
};
