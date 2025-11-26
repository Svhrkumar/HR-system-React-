import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobDashboardApiSlice = createApi({
    reducerPath: "jobDashboardApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4545/dashboard",
    }),
    endpoints:(builder) => {
        return{
            getDashboardData:builder.query({
                query: () => "/summary",
            }),
            getCondidateOrch:builder.query({
                query: () => "/candidatesOrch",
            })

        }
    }
})

export const { useGetDashboardDataQuery,useGetCondidateOrchQuery } = jobDashboardApiSlice;
