import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import AuthStack from './stacks/AuthStack';
import {useUser} from '../../hooks';
import {SplashScreen} from '../screens/general';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState(false);
  const {loggedIn, dispatchUserDataToStore, updateUserData} = useUser();

  React.useEffect(() => {
    dispatchUserDataToStore();
  }, []);

  if (showSplashScreen) return <SplashScreen />;

  return (
    <NavigationContainer>
      {/* Render custom alert and preloader  */}

      {/* Switch depending if the user has login or not */}

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {loggedIn ? null : (
          <>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="Home" component={MainStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
