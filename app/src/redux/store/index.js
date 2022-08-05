import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slices/users/userSlice';
export default store = configureStore({
  reducer: {
    userData: userReducer,
  },
});
