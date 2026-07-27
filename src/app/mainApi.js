import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const base = 'http://192.168.101.7:5000'
const baseApi = `${base}/api`

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({})
})