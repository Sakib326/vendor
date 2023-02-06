import { apiSlice } from "../api_slice";
import { onGetSingleFeed } from "./feed_slice";

export const feedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addFeed: build.mutation({
      query: (data) => ({
        url: "feeds",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["feed"],
    }),

    getSingleFeed: build.query({
      query: (id) => ({
        url: `feeds/${id}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          let formattedFeed;
          await queryFulfilled.then((res: any) => {
            formattedFeed = {
              id: res?.data?.id ?? "",
              title: res?.data?.title ?? "",
              description: res?.data?.description ?? "",
              shortDescription: res?.data?.shortDescription ?? "",
              status: res?.data?.status,
              image: res?.data?.image ?? "",
            };
          });

          dispatch(
            onGetSingleFeed({
              singleFeedData: formattedFeed,
            })
          );
        } catch (error) {}
      },
      providesTags: ["feed"],
    }),
    getAllFeed: build.query({
      query: () => ({
        url: `feeds`,
      }),

      providesTags: ["feed"],
    }),
    deleteFeed: build.mutation({
      query: ({ id }) => ({
        url: `feeds/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["feed"],
    }),
    updateFeed: build.mutation({
      query: ({ data, id }) => ({
        url: `feeds/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["feed"],
    }),
  }),
});

export const {
  useAddFeedMutation,
  useDeleteFeedMutation,
  useGetAllFeedQuery,
  useGetSingleFeedQuery,
  useUpdateFeedMutation,
} = feedApi;
