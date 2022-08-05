import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  data: null,
  appHasBeenOpened: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAppHasBeenOpened: (state, action) => {
      state.appHasBeenOpened = action.payload;
    },
    updateLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    updateUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateUser,
  updateLoggedIn,
  updateSessionOut,
  updateAppHasBeenOpened,
  updateShowStepsPopup,
} = userSlice.actions;

export default userSlice.reducer;
