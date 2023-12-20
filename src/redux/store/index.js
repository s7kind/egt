import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';
import { loadState, saveState } from '@utils';

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  const { main } = store.getState();
  saveState({ main });
});

export const useAppDispatch = () => useDispatch();

export default store;
