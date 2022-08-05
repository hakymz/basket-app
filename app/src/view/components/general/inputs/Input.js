import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../conts';
import {Text} from '..';
import {s} from 'react-native-size-matters';
import {Icons} from '..';
import {useTheme} from '../../../../hooks';

export const Input = React.forwardRef(
  (
    {
      error = null,
      type = 'default',
      name,
      style,
      inputStyle,
      onFocus = () => {},
      onBlur = () => {},
      centerText,
      editable = true,
      password,
      light,
      big,
      value,
      icon,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(password ?? false);

    return (
      <View
        style={{
          width: '100%',
          marginBottom: 20,
          alignItems: centerText ? 'center' : 'baseline',
        }}>
        <View
          style={[
            styles.inputContainer,
            {
              alignItems: 'center',
              borderColor: COLORS.primary,
              borderBottomWidth: 1,
              justifyContent: 'space-between',
              flex: 1,
              ...style,
            },
          ]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}>
            {icon}
          </View>

          <TextInput
            secureTextEntry={showPassword}
            onFocus={() => {
              onFocus();
              setFocused(true);
            }}
            onBlur={() => {
              onBlur();
              setFocused(false);
            }}
            placeholderTextColor={COLORS.dark}
            style={{
              ...styles.input,
              color: inputStyle?.color,
              textAlign: centerText ? 'center' : 'left',
              flex: 1,
              lineHeight: 26,
              ...inputStyle,
            }}
            ref={ref}
            editable={editable}
            value={value?.trimStart?.() ?? ''}
            {...props}
          />
          {password && (
            <Icons.Eye
              style={{width: 30}}
              onPress={() => setShowPassword(!showPassword)}
            />
          )}
        </View>
        {error && (
          <Text
            style={{
              marginTop: 15,
              color: 'red',
              textAlign: 'center',
              width: '100%',
              paddingHorizontal: 10,
            }}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    height: s(45),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    color: COLORS.dark,
    fontFamily: FONTS.semiBold,
    fontSize: s(20),
    width: '100%',
  },
});
