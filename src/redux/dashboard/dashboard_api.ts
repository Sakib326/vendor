import { apiSlice } from "../api_slice";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllWinnerList: build.query({
      query: ({ uuid = "", limit = 5, page = 1 }) => ({
        url: `campaign/winners?uuid=${uuid}&limit=${limit}&page=${page}`,
      }),
    }),
    getCampaignSummery: build.query({
      query: ({ dateRange = "" }) => ({
        url: `campaign/summery?dateRange=${dateRange}`,
      }),
    }),
  }),
});

export const { useGetAllWinnerListQuery, useGetCampaignSummeryQuery } =
  dashboardApi;
