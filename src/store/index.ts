import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
   reducer: {
      auth: authReducer,
      testimonials: testimonialsReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
   devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
