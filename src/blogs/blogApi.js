import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://6a1261b878d0434e0d5d2f98.mockapi.io",
  }),

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (query) => ({
        url: "/blogs",
       params:query,
        method: "GET",
      }),
    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useLazyGetBlogsQuery,
  useAddBlogMutation,
} = blogApi;