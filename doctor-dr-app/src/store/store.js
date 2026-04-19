import { configureStore } from "@reduxjs/toolkit";
import currentLoggedUserReducer from "../features/authentication/store/useCurrentLoggedUser";
import colourGroupReducer from "../features/color-grouping/store/useColourGroup";

const store = configureStore({
  reducer: {
    currentLoggedUser: currentLoggedUserReducer,
    colourGroup: colourGroupReducer,
  },
});

export default store;
