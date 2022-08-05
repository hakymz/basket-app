import React from 'react';
import {SafeAreaView, View, Image, StatusBar, ScrollView} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../conts';
import {Button} from '../../components/buttons';
import {Icons, Text} from '../../components/general';
export const OnboardingNextScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.dark}}>
      <StatusBar hidden={false} backgroundColor={COLORS.dark} />
      <ScrollView>
        <View style={{padding: 20, alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{height: s(48)}}
          />
          <Text
            textAlign="center"
            fontSize={28}
            color={COLORS.white}
            font={FONTS.regular}
            style={{marginTop: 20}}>
            Welcolme
          </Text>
          <Text
            textAlign="center"
            fontSize={40}
            color={COLORS.white}
            font={FONTS.bold}
            style={{marginTop: 10}}>
            basket online store
          </Text>

          <Text
            textAlign="center"
            fontSize={22}
            color={COLORS.white}
            font={FONTS.regular}
            style={{marginTop: 10}}>
            basket is the no1 online store for both new and used products.
          </Text>

          <Image
            source={require('../../../assets/images/illus.png')}
            style={{height: s(340), width: s(340)}}
          />

          <Button
            onPress={() => navigation.navigate('SignInScreen')}
            style={{width: 280, marginTop: 20}}
            title="GET STARTED"
            rightIcon={<Icons.Arrow />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
