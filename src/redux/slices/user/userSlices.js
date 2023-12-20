import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = userSlice.actions;

export const selectCurrency = (state) => state.user.currency;

export default userSlice.reducer;
