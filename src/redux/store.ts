import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api_slice";
import authSliceReducer from "./auth/auth_slice";
import productSliceReducer from "./product/product_slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    product: productSliceReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
