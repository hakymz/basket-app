import React from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';
export const SplashScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <Image
        source={require('../../../assets/images/background.png')}
        style={{
          // resizeMode: 'contain',
          height: '100%',
          width: '100%',
        }}></Image>
    </View>
  );
};
