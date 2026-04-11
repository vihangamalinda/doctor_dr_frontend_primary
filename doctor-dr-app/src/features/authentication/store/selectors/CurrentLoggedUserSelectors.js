export const selectCurrentLoggedUser = (state) => state.currentLoggedUser;

export const selectCurrentLoggedUserProfileId = (state) =>
  state.currentLoggedUser.userProfileId;

export const selectCurrentLoggedUserProfileAuthorities = (state) =>
  state.currentLoggedUser.authorities;
