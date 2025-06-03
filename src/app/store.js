import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../features/products/productSlice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
// This code sets up a Redux store using Redux Toolkit, integrating the product API slice.