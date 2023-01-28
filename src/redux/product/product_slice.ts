import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleProductData: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    onGetSingleProduct: (state, action) => {
      state.singleProductData = action.payload.singleProductData;
    },
  },
});

export const { onGetSingleProduct } = productSlice.actions;
export default productSlice.reducer;
