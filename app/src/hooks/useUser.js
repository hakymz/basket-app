import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  updateUser,
  updateAppHasBeenOpened,
  updateLoggedIn,
  updateTheme,
  updateShowStepsPopup,
} from '../redux/slices';

export const useUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    loggedIn: false,
    data: {},
    appHasBeenOpened: false,
  });
  const {data, appHasBeenOpened, loggedIn, sessionOut, showStepsPopup} =
    useSelector(state => state.userData);

  //get the user data from AsyncStorage
  const getUserData = async () => {
    try {
      const savedUserData = await AsyncStorage.getItem('userData');

      if (savedUserData) {
        const data = await JSON.parse(savedUserData);
        return data;
      } else {
        return state;
      }
    } catch (error) {
      return state;
    }
  };

  const logoutUser = async () => {
    const userData = await getUserData();
    await updateUserData({
      loggedIn: false,
      data: {...userData.data},
    });
  };

  //dispatch data when user  open the app
  const dispatchUserDataToStore = async () => {
    const data = await getUserData();
    await updateUserData(data);
  };

  //Update user data, save data passed to the user device
  const updateUserData = async (data, sessionOut) => {
    const userData = await getUserData();
    const defaultData = {
      appHasBeenOpened: userData?.appHasBeenOpened ?? false,
      loggedIn: userData?.loggedIn,
      data: userData?.data,
      showStepsPopup: userData?.showStepsPopup ?? true,
      ...data,
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(defaultData));
      setState(data);

      //dispatch to store
      dispatch(updateUser(data.data ?? defaultData.data));
      dispatch(
        updateAppHasBeenOpened(
          data.appHasBeenOpened ?? defaultData?.appHasBeenOpened,
        ),
      );
      dispatch(updateLoggedIn(data.loggedIn ?? defaultData?.loggedIn));
      dispatch(
        updateShowStepsPopup(
          data.showStepsPopup ?? defaultData?.showStepsPopup,
        ),
      );

      dispatch(updateTheme(data.theme ?? defaultData?.theme));
    } catch (error) {}
  };

  return {
    data,
    loggedIn,
    sessionOut,
    appHasBeenOpened,
    showStepsPopup,
    logoutUser,
    dispatchUserDataToStore,
    updateUserData,
    getUserData,
  };
};
