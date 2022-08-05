import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useUser} from '../../../hooks';
import {OnboardingNextScreen, OnboardingScreen} from '../../screens/onboarding';
import {SignInScreen} from '../../screens/auth';

const Stack = createStackNavigator();
const AuthStack = () => {
  const {appHasBeenOpened} = useUser();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!appHasBeenOpened && (
        <>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen
            name="OnboardingNextScreen"
            component={OnboardingNextScreen}
          />
        </>
      )}
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
