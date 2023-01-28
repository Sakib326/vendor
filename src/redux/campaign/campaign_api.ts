import { apiSlice } from "../api_slice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addCampaign: build.mutation({
      query: (data) => ({
        url: "campaign",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["campaign"],
    }),
    getAllCampaign: build.query({
      query: () => "/campaign/get-all",
      providesTags: ["campaign"],
    }),
  }),
});

export const { useAddCampaignMutation, useGetAllCampaignQuery } = productsApi;
