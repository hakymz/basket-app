import {createSlice} from '@reduxjs/toolkit';
const initialState = {visible: false, title: '', message: ''};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    updateAlert: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const {updateAlert} = alertSlice.actions;

export default alertSlice.reducer;
