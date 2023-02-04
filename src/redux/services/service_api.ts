import { apiSlice } from "../api_slice";
import { onGetSingleService } from "./service_slice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation({
      query: (data) => ({
        url: "services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),
    updateService: build.mutation({
      query: ({ data, id }) => ({
        url: `services/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: build.mutation({
      query: ({ id }) => ({
        url: `services/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["service"],
    }),
    getAllService: build.query({
      query: ({ pageSize = 200, currentPage = 1 }) => ({
        url: `services?limit=${pageSize}&page=${
          currentPage === false ? 1 : currentPage
        }`,
      }),
      providesTags: ["service"],
    }),
    getSingleService: build.query({
      query: (id) => ({
        url: `services/${id}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          let formattedService;
          await queryFulfilled.then((res: any) => {
            formattedService = {
              title: res?.data?.title ?? "",
              description: res?.data?.description ?? "",
              image: res?.data?.image ?? "",
              link: res?.data?.link ?? "",
            };
          });

          dispatch(
            onGetSingleService({
              singleServiceData: formattedService,
            })
          );
        } catch (error) {}
      },
      providesTags: ["service"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = productsApi;
