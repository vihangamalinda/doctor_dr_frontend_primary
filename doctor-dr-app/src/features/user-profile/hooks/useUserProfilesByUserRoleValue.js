import { useQuery } from "@tanstack/react-query";
import { getAllUserProfilesByUserRoleValue } from "../../../services/apis/apiUserProfile.js";
import { GET_USER_PROFILES_BY_USER_ROLE_VALUE } from "./queryKeys.js";

export function useUserProfilesByUserRoleValue(userRoleValue) {
  const {
    data: userProfilesByUserRoleValue,
    isLoading: isUserProfilesLoading,
    error,
  } = useQuery({
    queryKey: GET_USER_PROFILES_BY_USER_ROLE_VALUE(userRoleValue),
    queryFn: () => getAllUserProfilesByUserRoleValue(userRoleValue),
  });
  return {
    userProfilesByUserRoleValue,
    isUserProfilesLoading,
    error,
  };
}
