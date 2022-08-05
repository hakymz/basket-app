import React from 'react';
import {Text as RNText} from 'react-native';
import {s} from 'react-native-size-matters';
import {FONTS, COLORS} from '../../../../conts';

export const Text = ({
  children,
  color = COLORS.black,
  font,
  fontSize,
  lineHeight,
  textAlign,
  style,

  ...props
}) => {
  return (
    <RNText
      style={
        Array.isArray(style)
          ? [
              {
                fontFamily: font || FONTS.regular,
                color,
                fontSize: s(fontSize) || s(14),
                lineHeight,
                textAlign,
              },
              ...style,
            ]
          : {
              fontFamily: font || FONTS.regular,
              color,
              lineHeight: s(18),
              fontSize: s(fontSize) || s(14),
              lineHeight,
              textAlign,
              ...style,
            }
      }
      {...props}>
      {children}
    </RNText>
  );
};
