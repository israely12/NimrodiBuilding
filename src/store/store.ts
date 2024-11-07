import { configureStore } from '@reduxjs/toolkit';
import floorReducer from './floorreducer';
import roleReducer from './rolereducer';

export const store = configureStore({
  reducer: {
    floors: floorReducer,
    role: roleReducer
   
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;