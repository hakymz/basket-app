import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../conts';
import {Text} from '../general/text';
export const Button = ({
  type = 'primary',
  style,
  onPress,
  title = null,
  textColor,
  children,
  rightIcon = null,
}) => {
  const backgroundColor = {
    primary: COLORS.primary,
    dark: COLORS.dark,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        height: s(48),
        backgroundColor: backgroundColor[type],
        borderRadius: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        ...style,
      }}>
      {title ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: textColor || COLORS.white,
              fontFamily: FONTS.medium,
              fontSize: s(20),
              flex: 1,
              textAlign: 'center',
            }}>
            {title}
          </Text>
          {rightIcon}
        </View>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
