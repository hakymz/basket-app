import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  visible: false,
  message: 'Loading...',
  type: 'loading',
  button: null,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    updatePreloader: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const {updatePreloader} = loaderSlice.actions;

export default loaderSlice.reducer;
