import { mainApi } from "@/app/mainApi";


const productApi = mainApi.injectEndpoints({

    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ _id }) => ({ type: 'Product', id: _id })),
                        { type: 'Product', id: 'LIST' },
                    ]
                    : [{ type: 'Product', id: 'LIST' }],
        }),

        getProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            }),
            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),

        addProduct: builder.mutation({
            query: (q) => ({
                url: '/products',
                body: q.data,
                headers: { Authorization: q.token },
                method: 'POST',
            }),
            invalidatesTags: [{ type: 'Product', id: 'LIST' }]
        }),

        updateProduct: builder.mutation({
            query: (q) => ({
                url: `/products/${q.id}`,
                body: q.data,
                headers: { Authorization: q.token },
                method: 'PATCH'
            }),
            invalidatesTags: (result, error, q) => [
                { type: 'Product', id: q.id },
                { type: 'Product', id: 'LIST' }
            ]
        }),

        removeProduct: builder.mutation({
            query: (q) => ({
                url: `/products/${q.id}`,
                headers: { Authorization: q.token },
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, q) => [
                { type: 'Product', id: q.id },
                { type: 'Product', id: 'LIST' }
            ]
        }),
    })

})


export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation
} = productApi;