import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    // prepareHeaders: async (headers, { getState }) => {
    //   const localStorageToken = JSON.parse(localStorage.getItem("auth"))
    //   const token = getState()?.auth?.accessToken || localStorageToken?.accessToken
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`)
    //   }
    //   return headers
    // }
  }),
  tagTypes: ["blog"],
  endpoints: () => ({}),
});
