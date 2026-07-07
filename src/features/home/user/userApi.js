import { mainApi } from "@/app/mainApi";


const userApi = mainApi.injectEndpoints({   

    endpoints:(builder) => ({ 



 getProfile: builder.query({
      query: (q) => ({
        url: '/users/profile',
        headers :{ Authorization:q},
        method: 'GET'
      })
    }),








     })     
}
)

export const {useGetProfileQuery}=userApi;