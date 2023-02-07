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
    getAllFeedComment: build.query({
      query: ({ feedId, limit = 10, page = 1 }) => ({
        url: `feed-comments?feedId=${feedId}&limit=${limit}&page=${page}`,
      }),

      providesTags: ["feedComment"],
    }),
    replyFeedComment: build.mutation({
      query: (data) => ({
        url: `feed-comments`,
        method: "post",
        body: data,
      }),
      invalidatesTags: ["feedComment"],
    }),
    getAllFeed: build.query({
      query: () => ({
        url: `feeds`,
      }),

      providesTags: ["feed"],
    }),
    getAllFeedReact: build.query({
      query: ({ id }) => ({
        url: `feed-reacts?feedId=${id}`,
      }),

      providesTags: ["feedComment"],
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
  useGetAllFeedCommentQuery,
  useReplyFeedCommentMutation,
  useGetAllFeedReactQuery,
} = feedApi;
