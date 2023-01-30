import { apiSlice } from "../api_slice";

export const campaignApi = apiSlice.injectEndpoints({
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
    deleteCampaign: build.mutation({
      query: ({ id }) => ({
        url: `campaign/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["campaign"],
    }),
    getSingleCampaign: build.query({
      query: (id) => ({
        url: `campaign/get-one/${id}`,
      }),
    }),
    updateCampaign: build.mutation({
      query: ({ data, id }) => ({
        url: `campaign/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddCampaignMutation,
  useGetAllCampaignQuery,
  useDeleteCampaignMutation,
  useGetSingleCampaignQuery,
  useUpdateCampaignMutation,
} = campaignApi;
