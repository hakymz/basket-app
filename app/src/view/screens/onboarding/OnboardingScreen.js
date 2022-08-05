import React from 'react';
import {SafeAreaView, View, Image, StatusBar} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../conts';
import {Text} from '../../components/general';
export const OnboardingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <Image
        source={require('../../../assets/images/background.png')}
        style={{
          // resizeMode: 'contain',
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}></Image>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: s(153),
            width: s(153),
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/cart.png')}
            style={{height: 30, width: 42}}
          />
          <Text fontSize={35} font={FONTS.bold} color={COLORS.white}>
            basket
          </Text>
        </View>
        <Text
          fontSize={35}
          font={FONTS.regular}
          color={COLORS.white}
          style={{marginTop: 10}}>
          Start Shopping.
        </Text>
        <Text fontSize={35} font={FONTS.regular} color={COLORS.white}>
          Stay Happy.
        </Text>
        <Text fontSize={35} font={FONTS.regular} color={COLORS.white}>
          Anytime.
        </Text>
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text
          textAlign="center"
          font={FONTS.bold}
          color={COLORS.primary}
          fontSize={25}>
          Basket Online Marketplace
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text fontSize={25} font={FONTS.bold} color={COLORS.primary}>
            Skip
          </Text>
          <Text
            onPress={() => navigation.navigate('OnboardingNextScreen')}
            fontSize={25}
            font={FONTS.bold}
            color={COLORS.primary}>
            Next
          </Text>
        </View>
      </View>
    </View>
  );
};
