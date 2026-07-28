import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const base = 'https://mern-d0p9.onrender.com'
export const base='http://192.168.101.4:5000'
const baseApi = `${base}/api`

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({})
})