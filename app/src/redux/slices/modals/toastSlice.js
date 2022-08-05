import {createSlice} from '@reduxjs/toolkit';
const initialState = {visible: false, type: '', message: ''};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    updateToast: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const {updateToast} = toastSlice.actions;

export default toastSlice.reducer;
