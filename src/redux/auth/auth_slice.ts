import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: false,
  accessToken: "",
  user: "",
};
export const userInit = {
  avatar: "",
  userName: "",
  email: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,

  reducers: {
    onSignInSuccess: (state, action) => {
      state.signedIn = true;
      state.accessToken = action.payload.accessToken;
    },
    onSignOutSuccess: (state) => {
      state.signedIn = false;
      state.accessToken = "";
    },
    setToken: (state, action) => (state.accessToken = action.payload),
    setUser: (state, action) => (state.user = action.payload),
  },
});

export const { onSignInSuccess, onSignOutSuccess, setToken, setUser } =
  authSlice.actions;
export default authSlice.reducer;
