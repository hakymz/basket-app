import React from 'react';
import {TouchableOpacity} from 'react-native';

export const Svg = ({
  file,
  color,
  onPress,
  size,
  style,
  strokeColor,
  ...props
}) => {
  const File = file;
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={{...style}}
      {...props}>
      <File
        {...(style?.height && style.width && {height: '100%', width: '100%'})}
      />
    </TouchableOpacity>
  );
};
