import { useQuery } from "@tanstack/react-query";
import { getCurrentLoggedUser as getCurrentLoggedUserApi } from "../../../services/apis/apiUserCredentials.js";
import { useDispatch } from "react-redux";
import { updateCurrentLoggedUser } from "../store/useCurrentLoggedUser.js";
import { MAIN_KEYS } from "./queryKeys.js";
export function useCurrentLoggedUserInformation() {
  const {
    data: currentUser,
    isLoading: isAuthenticating,
    error,
  } = useQuery({
    queryKey: MAIN_KEYS,
    queryFn: getCurrentLoggedUserApi,
  });
  const dispatch = useDispatch();

  if (!isAuthenticating && !error && currentUser) {
    dispatch(updateCurrentLoggedUser(currentUser));
  }

  return {
    currentUser,
    isAuthenticating,
    isAuthenticated: currentUser?.authenticated,
    error,
  };
}
