import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { onSignOutSuccess, setUser, userInit } from "./auth/auth_slice";
import { RootState } from "./store";
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: async (headers, { getState }) => {
    const localStorageToken = JSON.parse(localStorage.getItem("auth")!);
    const token =
      (getState() as RootState)?.auth?.accessToken ||
      localStorageToken?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(onSignOutSuccess());
    api.dispatch(setUser(userInit));
    window.location.href = "http://www.w3schools.com";
  }
  return result;
};
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,

  tagTypes: ["blog"],
  endpoints: () => ({}),
});
