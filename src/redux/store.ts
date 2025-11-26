import { configureStore } from "@reduxjs/toolkit";
import { jobDashboardApiSlice } from "../features/JobDashboard/api/service";


export const store = configureStore({
    reducer:{
        [jobDashboardApiSlice.reducerPath]:jobDashboardApiSlice.reducer,
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(jobDashboardApiSlice.middleware)  
    }
)