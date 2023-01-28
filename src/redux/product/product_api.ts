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
    }),
    updateProduct: build.mutation({
      query: ({ data, id }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: build.query({
      query: () => ({
        url: "products?limit=200&page=1",
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
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoryQuery,
  useAddProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
