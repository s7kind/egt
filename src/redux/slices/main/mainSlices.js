import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cookieInfo: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCookieInfo: (state, action) => {
      state.cookieInfo = action.payload;
    },
  },
});

export const {
  setCookieInfo,
} = mainSlice.actions;

export const selectCookieInfo = (state) => state.main.cookieInfo;

export default mainSlice.reducer;
