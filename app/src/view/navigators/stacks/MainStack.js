import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/general';
import HomeBottomTab from '../bottomTabs/HomeBottomTab';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeBottomTab" component={HomeBottomTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
