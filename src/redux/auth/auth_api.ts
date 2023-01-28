import Cookies from "js-cookie";
import { apiSlice } from "../api_slice";

import {
  onSignInSuccess,
  onSignOutSuccess,
  setUser,
  userInit,
} from "./auth_slice";
export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (data) => ({
        url: "vendor/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
            })
          );

          dispatch(
            onSignInSuccess({
              accessToken: JSON.parse(localStorage.getItem("auth")!)
                .accessToken,
              signedIn: true,
            })
          );
          if (result.data.user) {
            dispatch(
              setUser(
                result.data.user || {
                  avatar: "",
                  userName: "Anonymous",
                  email: "",
                }
              )
            );
          }
        } catch (error) {}
      },
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: "vendor/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    signUpVerificaton: build.query({
      query: (data) => ({
        url: `vendor/auth/activate-account?token=${data}`,
      }),
    }),
    getProfile: build.query({
      query: (data) => ({
        url: `/vendor/profile`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "profileInfo",
            JSON.stringify({
              profileInfo: result.data,
            })
          );
          if (result.data) {
            dispatch(
              setUser(
                result.data || {
                  avatar: "",
                  userName: "Anonymous",
                  email: "",
                }
              )
            );
          }
        } catch (error) {}
      },
    }),

    signOut: build.mutation({
      query: () => ({
        url: "/vendor/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          localStorage.removeItem("auth");
          dispatch(onSignOutSuccess());
          dispatch(setUser(userInit));
          window.location.href = "http://www.w3schools.com";
        } catch (error) {}
      },
    }),
    forgotPass: build.mutation({
      query: (data) => ({
        url: "vendor/auth/forgot-password",
        method: "PUT",
        body: data,
      }),
    }),
    forgotPassChange: build.mutation({
      query: (data) => ({
        url: "vendor/auth/reset-password",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetProfileQuery,
  useSignOutMutation,
  useForgotPassChangeMutation,
  useForgotPassMutation,
  useLazySignUpVerificatonQuery,
} = authApi;
