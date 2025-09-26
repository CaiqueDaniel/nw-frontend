import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import { accessTokenSlice } from './accessTokenSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [accessTokenSlice.reducerPath]: accessTokenSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
