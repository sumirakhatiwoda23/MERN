import { translateApi } from "@/translate/translateApi";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer:{
  
    [translateApi.reducerPath]:translateApi.reducer




  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      translateApi.middleware
    ]),
})