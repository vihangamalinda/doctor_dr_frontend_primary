import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const COLOUR_GOURP_CONSTANTS = {
  lightTheme: { name: "LIGHT_THEME", value: "light-theme" },
  darkTheme: { name: "DARK_THEME", value: "dark-theme" },
  colourBlindFriendlyTheme: {
    name: "COLOUR_BLIND_FRIENDLY_THEME",
    value: "colour-blind-friendly-theme",
  },
};

const initialState = {
  colourGroups: COLOUR_GOURP_CONSTANTS,
  currentColourGroup: COLOUR_GOURP_CONSTANTS.lightTheme,
};

const colourGroupSlice = createSlice({
  name: "colourGroup",
  initialState,
  reducers: {
    updateCurrentColourGroup: (state, action) => {
      console.log("updateCurrentColourGroup action.payload", action.payload);
      state.currentColourGroup = action.payload;
    },
  },
});

export const { updateCurrentColourGroup } = colourGroupSlice.actions;

export default colourGroupSlice.reducer;
