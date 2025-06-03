import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: async () => {
    const res = await fetch('/data/products.json')
    const data = await res.json()
    return { data }
  },
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '',
    }),
  }),
})

export const { useGetProductsQuery } = productApi
