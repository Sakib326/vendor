// import {
//   BaseQueryFn,
//   createApi,
//   FetchArgs,
//   fetchBaseQuery,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query/react";
// import { onSignOutSuccess, setUser, userInit } from "./auth/auth_slice";
// import { RootState } from "./store";
// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_API_URL,
//   prepareHeaders: async (headers, { getState }) => {
//     const localStorageToken = JSON.parse(localStorage.getItem("auth")!);
//     const token =
//       (getState() as RootState)?.auth?.accessToken ||
//       localStorageToken?.accessToken;
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);
//   if (result.error && result.error.status === 401) {
//     api.dispatch(onSignOutSuccess());
//     api.dispatch(setUser(userInit));
//     window.location.href = "http://www.w3schools.com";
//   }
//   return result;
// };
// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: baseQueryWithReauth,

//   tagTypes: ["blog"],
//   endpoints: () => ({}),
// });
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    // credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
      const localStorageToken = JSON.parse(localStorage.getItem("auth")!);
      const token =
        (getState() as RootState)?.auth?.accessToken ||
        localStorageToken?.accessToken;
      if (token) {
        // headers.set((document.cookie = "key=value"), "domain=example.com"),
        // headers.set("cookie", "domain=example.com"),
        //   headers.set(
        //     "Cookies",
        //     `Authentication=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwczovL2RldmFwaS5iZHdpbm5lcnMuY29tIiwiYXVkaWVuY2UiOiJodHRwOi8vZGV2LmJkd2lubmVycy5jb20iLCJzdWJqZWN0IjoiMTIiLCJrZXlpZCI6InZlbmRvciIsImlzVHdvRkFBdXRoZW50aWNhdGVkIjpmYWxzZSwiaWF0IjoxNjc0Nzk3MTE3LCJleHAiOjE2NzQ4ODM1MTd9.3L94V6lUsd46QYKjlPjcASQUL5s2VVWySzC098aWIcc; Refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwczovL2RldmFwaS5iZHdpbm5lcnMuY29tIiwiYXVkaWVuY2UiOiJodHRwOi8vZGV2LmJkd2lubmVycy5jb20iLCJzdWJqZWN0IjoiMTIiLCJrZXlpZCI6InZlbmRvciIsImp3dGlkIjoiOSIsImlhdCI6MTY3NDc5NzExNywiZXhwIjoxNjc1NDAxOTE3fQ.hecCbfUPaeKUIojzhx80qjRlbbxUTKeop5CQFNlRNPI; ExpiresIn=Sat Jan 28 2023 05:25:17 GMT+0000 (Coordinated Universal Time)`
        //   );
      }
      return headers;
    },
  }),
  tagTypes: ["blog"],
  endpoints: () => ({}),
});
