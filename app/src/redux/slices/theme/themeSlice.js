import {createSlice} from '@reduxjs/toolkit';
const initialState = {theme: 'light'};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateTheme} = themeSlice.actions;

export default themeSlice.reducer;
