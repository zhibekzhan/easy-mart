import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../features/products/productSlice'
import authReducer from "../features/auth/authSlice";


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
     auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})