import { useQuery } from "@tanstack/react-query";
import { getUserRoleByUserRoleValue as getUserRoleByUserRoleValueApi } from "../../../services/apis/apiUserRole.js";
import { GET_ALL_USER_ROLES } from "./queryKeys.js";

export function useUserRoleByUserRoleValue(userRoleValue) {
  const {
    data: userRoleByUserRoleValue,
    isLoading: isUserRoleLoading,
    error,
  } = useQuery({
    queryKey: GET_ALL_USER_ROLES,
    queryFn: () => getUserRoleByUserRoleValueApi(userRoleValue),
  });

  return {
    userRoleByUserRoleValue,
    isUserRoleLoading,
    error,
  };
}
