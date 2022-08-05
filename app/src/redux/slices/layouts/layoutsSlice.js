import {createSlice} from '@reduxjs/toolkit';
import {COLORS} from '../../../conts';
const initialState = {
  statusbarBackgroundColor: COLORS.black,
  statusbarStyle: 'light-content',
};

export const layoutsSlice = createSlice({
  name: 'layouts',
  initialState,
  reducers: {
    upateStatusbarBackgroundColor: (state, action) => {
      state.statusbarBackgroundColor = action.payload;
    },
    upateStatusbarStyle: (state, action) => {
      state.statusbarStyle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {upateStatusbarBackgroundColor, upateStatusbarStyle} =
  layoutsSlice.actions;

export default layoutsSlice.reducer;
