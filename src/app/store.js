import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./mainApi";
import { get } from "node:http";

export const store=configureStore({
    reducer:{
        [mainApi.reducerPath]:mainApi.reducer
    } ,
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(mainApi.middleware)      
})