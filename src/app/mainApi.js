import { createApi } from '@reduxjs/toolkit/query/react'


const base='http://192.168.101.3:5000'
const baseApi=`${base}/api`

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl:baseApi }),
    endpoints:(builder)=>({})
})