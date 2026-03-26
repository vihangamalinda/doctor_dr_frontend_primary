import { useQuery } from "@tanstack/react-query";
import { getCurrentLoggedUser as getCurrentLoggedUserApi } from "../../../services/apis/apiUserCredentials.js";

export function useCurrentLoggedUserInformation() {
  const {data:currentUser,isLoading: isAuthenticating,error} =useQuery({
    queryKey: ["currentLoggedUser"],
    queryFn: getCurrentLoggedUserApi,
  });

  return {
    currentUser,
    isAuthenticating,
    isAuthenticated: currentUser?.authenticated,
    error,
  };
}
