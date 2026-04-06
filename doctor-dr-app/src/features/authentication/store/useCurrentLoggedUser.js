import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  authorities: [],
  accountNonExpired: false,
  authenticated: false,
  userProfileId: null,
};

const currentLoggedUserSlice = createSlice({
  name: "currentLoggedUser",
  initialState,
  reducers: {
    updateCurrentLoggedUser: (state, action) => {
      state.userName = action.payload.userName;
      state.authorities = action.payload.authorities;
      state.accountNonExpired = action.payload.accountNonExpired;
      state.authenticated = action.payload.authenticated;
      state.userProfileId = action.payload.userProfileId;
    },
  },
});

export const { updateCurrentLoggedUser } = currentLoggedUserSlice.actions;

export default currentLoggedUserSlice.reducer;
