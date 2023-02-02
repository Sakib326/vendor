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
          let formattedProfile;
          const result = await queryFulfilled.then((res: any) => {
            formattedProfile = {
              skipHashPassword:
                res?.data?.skipHashPassword !== null &&
                res?.data?.skipHashPassword
                  ? res?.data?.skipHashPassword
                  : false,
              id: res?.data?.id !== null && res?.data?.id ? res?.data?.id : 0,
              createdUserType:
                res?.data?.createdUserType !== null &&
                res?.data?.createdUserType
                  ? res?.data?.createdUserType
                  : "",
              createdBy:
                res?.data?.createdBy !== null && res?.data?.createdBy
                  ? res?.data?.createdBy
                  : "",
              updatedUserType:
                res?.data?.updatedUserType !== null &&
                res?.data?.updatedUserType
                  ? res?.data?.updatedUserType
                  : "",
              createdAt:
                res?.data?.createdAt !== null && res?.data?.createdAt
                  ? res?.data?.createdAt
                  : new Date(),
              updatedAt:
                res?.data?.updatedAt !== null && res?.data?.updatedAt
                  ? res?.data?.updatedAt
                  : new Date(),
              deletedAt:
                res?.data?.deletedAt !== null && res?.data?.deletedAt
                  ? res?.data?.deletedAt
                  : "",
              email:
                res?.data?.email !== null && res?.data?.email
                  ? res?.data?.email
                  : "",
              username:
                res?.data?.username !== null && res?.data?.username
                  ? res?.data?.username
                  : "",
              businessName:
                res?.data?.businessName !== null && res?.data?.businessName
                  ? res?.data?.businessName
                  : "",
              mobile:
                res?.data?.mobile !== null && res?.data?.mobile
                  ? res?.data?.mobile
                  : "",
              businessEmail:
                res?.data?.businessEmail !== null && res?.data?.businessEmail
                  ? res?.data?.businessEmail
                  : "",
              website:
                res?.data?.website !== null && res?.data?.website
                  ? res?.data?.website
                  : "",
              overview:
                res?.data?.overview !== null && res?.data?.overview
                  ? res?.data?.overview
                  : "",
              province:
                res?.data?.province !== null && res?.data?.province
                  ? res?.data?.province
                  : "",
              city:
                res?.data?.city !== null && res?.data?.city
                  ? res?.data?.city
                  : "",
              area:
                res?.data?.area !== null && res?.data?.area
                  ? res?.data?.area
                  : "",
              landmark:
                res?.data?.landmark !== null && res?.data?.landmark
                  ? res?.data?.landmark
                  : "",
              gMapLink:
                res?.data?.gMapLink !== null && res?.data?.gMapLink
                  ? res?.data?.gMapLink
                  : "",

              logo:
                res?.data?.logo !== null && res?.data?.logo
                  ? res?.data?.logo
                  : "",
              banner:
                res?.data?.banner !== null && res?.data?.banner
                  ? res?.data?.banner
                  : "",
              status:
                res?.data?.status !== null && res?.data?.status
                  ? res?.data?.status
                  : "",
              token:
                res?.data?.token !== null && res?.data?.token
                  ? res?.data?.token
                  : "",
              tokenValidityDate:
                res?.data?.tokenValidityDate !== null &&
                res?.data?.tokenValidityDate
                  ? res?.data?.tokenValidityDate
                  : "",
              salt:
                res?.data?.salt !== null && res?.data?.salt
                  ? res?.data?.salt
                  : "",
              twoFAThrottleTime:
                res?.data?.twoFAThrottleTime !== null &&
                res?.data?.twoFAThrottleTime
                  ? res?.data?.twoFAThrottleTime
                  : "",
              isTwoFAEnabled:
                res?.data?.isTwoFAEnabled !== null && res?.data?.isTwoFAEnabled
                  ? res?.data?.isTwoFAEnabled
                  : "",
              roleId:
                res?.data?.roleId !== null && res?.data?.roleId
                  ? res?.data?.roleId
                  : undefined,
            };
            const socialLinks = [];
            if (res?.data?.socialLinks?.length > 0) {
              res?.data?.socialLinks?.map((e: any, index: any) => {
                socialLinks.push(JSON?.parse(e));
              });
            } else {
              socialLinks.push({
                label: "",
                value: "",
              });
            }
            const profileForEdit = {
              ...formattedProfile,
              socialLinks,
            };

            localStorage.setItem(
              "profileInfo",
              JSON.stringify({
                profileInfo: profileForEdit,
              })
            );
            dispatch(setUser(profileForEdit));
          });
          console.log({ result });
        } catch (error) {}
      },
      providesTags: ["profile"],
    }),

    signOut: build.mutation({
      query: () => ({
        url: "/vendor/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          localStorage.removeItem("auth");
          localStorage.removeItem("profileInfo");
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
    updateProfile: build.mutation({
      query: (data) => ({
        url: `vendor/auth/update-profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    updatePassword: build.mutation({
      query: (data) => ({
        url: `vendor/auth/change-password`,
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
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = authApi;
