import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  cookieInfo: false,
  params: {},
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setIsTablet: (state, action) => {
      state.isTablet = action.payload;
    },
    setIsDesktop: (state, action) => {
      state.isDesktop = action.payload;
    },
    setCookieInfo: (state, action) => {
      state.cookieInfo = action.payload;
    },
    setParams: (state, action) => {
      const { key, value } = action.payload;
      state.params = { ...state.params, [key]: value };
    },
  },
});

export const {
  setIsMobile,
  setIsTablet,
  setIsDesktop,
  setCookieInfo,
  setParams,
} = mainSlice.actions;

export const selectIsMobile = (state) => state.main.isMobile;
export const selectIsTablet = (state) => state.main.isTablet;
export const selectIsDesktop = (state) => state.main.isDesktop;
export const selectCookieInfo = (state) => state.main.cookieInfo;

export default mainSlice.reducer;
