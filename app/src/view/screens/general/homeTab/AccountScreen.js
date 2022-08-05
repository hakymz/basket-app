import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../../conts';
import {Icons, Text} from '../../../components/general';

const list = [
  {name: 'Notification', icon: <Icons.Bell />, onPress: () => {}},
  {name: 'Edit profile', icon: <Icons.Edit />, onPress: () => {}},
  {name: 'Wishlist', icon: <Icons.Star />, onPress: () => {}},
  {name: 'Order history', icon: <Icons.Order />, onPress: () => {}},
  {name: 'Track order', icon: <Icons.Location />, onPress: () => {}},
  {name: 'Payment option', icon: <Icons.Payment />, onPress: () => {}},
  {name: 'Settings', icon: <Icons.Settings />, onPress: () => {}},
  {name: 'Log out', icon: <Icons.Logout />, onPress: () => {}},
];

const List = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginBottom: 20,
        width: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {item?.icon}
      <Text
        fontSize={20}
        font={FONTS.semiBold}
        color={COLORS.dark}
        style={{flex: 1, marginLeft: 30}}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};
export const AccountScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.dark} barStyle="light-content" />
      <View
        style={{
          height: s(70),
          backgroundColor: COLORS.dark,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: s(48),
            width: s(48),
            backgroundColor: COLORS.primary,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../assets/images/cart.png')}
            style={{height: 32, width: 32}}
          />
        </View>
        <View
          style={{
            height: s(40),
            backgroundColor: COLORS.white,
            borderRadius: 8,
            flex: 1,
            marginHorizontal: 20,
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Icons.Search style={{height: 20}} />
          <TextInput
            style={{
              flex: 1,
              fontFamily: FONTS.semiBold,
              color: 'rgba(17, 45, 66, 0.69)',
              fontSize: 18,
              textAlign: 'center',
            }}
            placeholder="Search in basket"
          />
        </View>
        <Icons.Menu />
      </View>
      <ScrollView>
        <View style={{height: s(200)}}>
          <Image
            style={{height: s(200), width: '100%', position: 'absolute'}}
            source={require('../../../../assets/images/angleBg.png')}
          />
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../../assets/images/photo.png')}
              style={{height: s(75), width: s(75)}}
            />
            <View style={{marginLeft: 20}}>
              <Text fontSize={24} font={FONTS.semiBold} color={COLORS.dark}>
                Daniel Obi
              </Text>
              <Text fontSize={16} font={FONTS.regular} color={COLORS.dark}>
                danielobi@gmail.com
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            top: -80,
            marginHorizontal: 20,
            borderRadius: 12,
            alignItems: 'center',
            paddingTop: 50,
          }}>
          {list?.map(item => (
            <List item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
