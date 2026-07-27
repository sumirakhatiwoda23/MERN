import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const base = 'https://mern-d0p9.onrender.com/'
const baseApi = `${base}/api`

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({})
})