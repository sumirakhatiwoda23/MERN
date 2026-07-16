import { mainApi } from "@/app/mainApi";


const productApi = mainApi.injectEndpoints({   

    endpoints:(builder) => ({ 



getProducts:builder.query({
    query:()=>({
        url:'/products',
        method:'GET'
    })
}),
addProduct:builder.mutation({
    query:(q)=>({
        url:'/products',
        body:q.data,
        headers:{Authorization:q.token},
         method:'POST',
    }),
    invalidatesTags:['Product']
}),

removeProduct:builder.mutation({
    query:(q)=>({
        url:`/products/${q.id}`,
        headers:{Authorization:q.token},
        method:'DELETE',
    }),
    invalidatesTags:['Product']
    }),
})

     })     


export const {useGetProductsQuery, useAddProductMutation , useRemoveProductMutation}=productApi;