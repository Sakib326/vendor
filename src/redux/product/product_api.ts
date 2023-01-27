import { apiSlice } from "../api_slice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: (data) => ({
        url: "categories",
        method: "POST",
        body: data,
      }),
    }),
    getCategory: build.query({
      query: () => ({
        url: "categories",
      }),
    }),
  }),
});

export const { useAddCategoryMutation } = productsApi;
