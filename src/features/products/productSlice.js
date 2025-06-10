// features/products/productSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: async ({ url }) => {
    // Используем fetch напрямую, так как ты работаешь с локальными файлами
    // Здесь `url` будет просто `products.json` или `filters.json`
    const res = await fetch(`/data/${url}`);
    const data = await res.json();
    return { data };
  },

  endpoints: (builder) => ({
    getProducts: builder.query({
      // Теперь url содержит только имя файла, так как /data/ уже добавлено в baseQuery
      query: () => ({ url: "products.json" }),
    }),

    getFilters: builder.query({
      // Аналогично для filters.json
      query: () => ({ url: "filters.json" }),
    }),
    getTrendingFavsFilter: builder.query({
      query: () => ({ url: "trendingFavsFilter.json" }),
    }),
  }),
});

export const { 
  useGetProductsQuery, 
  useGetFiltersQuery,
  useGetTrendingFavsFilterQuery,
 } = productApi;
