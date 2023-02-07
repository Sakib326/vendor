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
      query: () => "/campaign/get-all?limit=2000&page=1",
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
      providesTags: ["campaign"],
    }),
    updateCampaign: build.mutation({
      query: ({ data, id }) => ({
        url: `campaign/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["campaign"],
    }),
    getAllTakerList: build.query({
      query: ({ uuid, pageSize, currentPage }: any) =>
        `/campaign/participate/${uuid}?limit=${pageSize}&page=${currentPage}`,
    }),
    getPublishedCampaign: build.query({
      query: ({ pageSize = 8, currentPage }) =>
        `/campaign/get-all?status=Published&limit=${pageSize ?? 8}&page=${
          currentPage === false ? 1 : currentPage
        }`,
    }),
    getPendingCampaign: build.query({
      query: ({ pageSize = 8, currentPage = 1 }) =>
        `/campaign/get-all?status=Pending&limit=${pageSize ?? 8}&page=${
          currentPage === false ? 1 : currentPage
        }`,
    }),
    getCompletedCampaign: build.query({
      query: ({ pageSize = 8, currentPage = 1 }) =>
        `/campaign/get-all?status=Completed&limit=${pageSize ?? 8}&page=${
          currentPage === false ? 1 : currentPage
        }`,
    }),
  }),
});

export const {
  useAddCampaignMutation,
  useGetAllCampaignQuery,
  useDeleteCampaignMutation,
  useGetSingleCampaignQuery,
  useUpdateCampaignMutation,
  useGetAllTakerListQuery,
  useGetCompletedCampaignQuery,
  useGetPendingCampaignQuery,
  useGetPublishedCampaignQuery,
} = campaignApi;
