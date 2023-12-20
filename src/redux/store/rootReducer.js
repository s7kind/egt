import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from '../slices/main/mainSlices';

const rootReducer = combineReducers({
  main: mainSlice,
});

export default rootReducer;
