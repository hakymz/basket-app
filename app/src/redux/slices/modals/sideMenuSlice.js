import {createSlice} from '@reduxjs/toolkit';
const initialState = {visible: false, button: false};

export const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    updateMenu: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const {updateMenu} = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
