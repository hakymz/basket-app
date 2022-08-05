import {createSlice} from '@reduxjs/toolkit';
const initialState = {};

export const contextDataSlice = createSlice({
  name: 'contextData',
  initialState,
  reducers: {
    updateContextData: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const {updateContextData} = contextDataSlice.actions;

export default contextDataSlice.reducer;
