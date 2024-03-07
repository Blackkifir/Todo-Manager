import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlise';

const store = configureStore({
  reducer: {
    todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
