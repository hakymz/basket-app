import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {View, TouchableOpacity} from 'react-native';
import {COLORS, GENERAL} from '../../../conts';
import {Text} from '../../components/general';
import {TabsIcons} from '../../components/general/others/tabIcons';
import {s} from 'react-native-size-matters';
import {HomeScreen} from '../../screens/general';
import {SavedScreen} from '../../screens/general/homeTab/SavedScreen';
import {AccountScreen} from '../../screens/general/homeTab/AccountScreen';
import {CartScreen} from '../../screens/general/homeTab/CartScreen';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: GENERAL.platform == 'ios' ? 30 : 10,
        paddingTop: 10,
        // paddingHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        let isFocused = state.index === index;
        //Force focus on some screen
        if (state.index == 4 && index == 1) {
          isFocused = true;
        }

        const Icon = options?.tabBarIcon;

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate({name: route.name, merge: true})}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {Icon && <Icon size={30} focused={isFocused} />}
            <Text
              style={{
                color: isFocused ? COLORS.primary : COLORS.dark,
                marginTop: 2,
              }}
              fontSize={16}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const HomeBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, size}) => {
            return focused ? (
              <TabsIcons.HomeActive size={size} />
            ) : (
              <TabsIcons.Home size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, size}) => {
            return focused ? (
              <TabsIcons.SavedActive size={size} />
            ) : (
              <TabsIcons.Saved size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, size}) => {
            return focused ? (
              <TabsIcons.AccountActive size={size} />
            ) : (
              <TabsIcons.Account size={size} />
            );
          },
        }}
      />

      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, size}) => {
            return focused ? (
              <TabsIcons.Cart size={size} />
            ) : (
              <TabsIcons.Cart size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTab;
