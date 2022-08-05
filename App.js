import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './app/src/view/navigators/RootNavigator';
import {Provider} from 'react-redux';
import store from './app/src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
