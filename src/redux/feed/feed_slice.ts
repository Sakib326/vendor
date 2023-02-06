import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleFeedData: {},
};

const feedSlice = createSlice({
  name: "feed",
  initialState,

  reducers: {
    onGetSingleFeed: (state, action) => {
      state.singleFeedData = action.payload.singleFeedData;
    },
  },
});

export const { onGetSingleFeed } = feedSlice.actions;
export default feedSlice.reducer;
