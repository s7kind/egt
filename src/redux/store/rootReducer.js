import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from '../slices/main/mainSlices';
import userSlice from '../slices/user/userSlices';

const rootReducer = combineReducers({
  main: mainSlice,
  user: userSlice,
});

export default rootReducer;
