import { movieApi } from "@/movies/movieApi";

import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer:{
  
    [movieApi.reducerPath]:movieApi.reducer




  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
     movieApi.middleware
    ]),
})