import { useQuery } from "@tanstack/react-query";
import { getAllUserRoles as getAllUserRolesApi } from "../../../services/apis/apiUserRole.js";
import { GET_ALL_USER_ROLES } from "./queryKeys.js";

export function useUserRoles() {
  const {
    data: userRoles,
    isLoading: isUserRolesLoading,
    error,
  } = useQuery({
    queryKey: GET_ALL_USER_ROLES,
    queryFn: () => getAllUserRolesApi(),
  });

  return {
    userRoles,
    isUserRolesLoading,
    error,
  };
}
