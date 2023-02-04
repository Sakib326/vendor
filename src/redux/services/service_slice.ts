import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleServiceData: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,

  reducers: {
    onGetSingleService: (state, action) => {
      state.singleServiceData = action.payload.singleServiceData;
    },
  },
});

export const { onGetSingleService } = serviceSlice.actions;
export default serviceSlice.reducer;
