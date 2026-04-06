import { configureStore } from "@reduxjs/toolkit";
import currentLoggedUserReducer from "../features/authentication/store/useCurrentLoggedUser";

const store = configureStore({
  reducer: {
    currentLoggedUser: currentLoggedUserReducer,
  },
});

export default store;
