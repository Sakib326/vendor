import { apiSlice } from "../api_slice";
import { onGetSingleProduct } from "./product_slice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: (data) => ({
        url: "categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
    getCategory: build.query({
      query: () => "/categories?limit=200&page=1",
      providesTags: ["category"],
    }),
    addProduct: build.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: build.mutation({
      query: ({ data, id }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: build.query({
      query: ({ pageSize = 8, currentPage = 1, categorySlug = "" }) => ({
        url: `products?limit=${pageSize}&page=${
          currentPage === false ? 1 : currentPage
        }&categorySlug=${categorySlug}`,
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          let formattedProduct;
          await queryFulfilled.then((res: any) => {
            formattedProduct = {
              name: res?.data?.name,
              description: res?.data?.description,
              price: res?.data?.price,
              discountPrice: res?.data?.discountPrice,
              categoryIds: res?.data?.categories?.[0]?.id ?? 1,
              categories: res?.data?.categories?.[0]?.title ?? "",
              image: res?.data?.image,
              productLink: res?.data?.productLink,
            };
          });

          dispatch(
            onGetSingleProduct({
              singleProductData: formattedProduct,
            })
          );
        } catch (error) {}
      },
      providesTags: ["product"],
    }),
    getSingleCategory: build.query({
      query: (id) => ({
        url: `categories/${id}`,
      }),

      providesTags: ["category"],
    }),
    getAllCategory: build.query({
      query: () => ({
        url: `categories?limit=200&page=1`,
      }),

      providesTags: ["category"],
    }),
    deleteCategory: build.mutation({
      query: ({ id }) => ({
        url: `categories/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: build.mutation({
      query: ({ data, id }) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useAddProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useUpdateCategoryMutation,
} = productsApi;
