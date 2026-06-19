export const selectCurrentColourGroup = (state) =>
  state.colourGroup.currentColourGroup;

export const selectAllThemesValues = (state) => {
  const groups = state.colourGroup.colourGroups;
  // console.log("groups",groups);
  const valuearray = [
    groups.lightTheme.value,
    groups.darkTheme.value,
    groups.colourBlindFriendlyTheme.value,
  ];

  return valuearray;
};

export const selectLightTheme = (state) =>
  state.colourGroup.colourGroups.lightTheme;
export const selectDarkTheme = (state) =>
  state.colourGroup.colourGroups.darkTheme;
export const selectColourBlindFriendlyTheme = (state) =>
  state.colourGroup.colourGroups.colourBlindFriendlyTheme;
