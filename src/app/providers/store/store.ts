import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../../features/Products/model/slice.ts';
import authReducer from '../../../features/Login/model/slice.ts';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
