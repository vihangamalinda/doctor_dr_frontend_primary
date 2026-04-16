import { getAllUserProfile } from "../../../services/apis/apiUserProfile";
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_USER_PROFILES } from "./queryKeys.js";

export function useAllUserProfile() {
  const {
    data: allUserProfiles,
    isLoading: isAllUserProfileLoading,
    error,
  } = useQuery({
    queryKey: GET_ALL_USER_PROFILES,
    queryFn: () => getAllUserProfile(),
  });
  return {
    allUserProfiles,
    isAllUserProfileLoading,
    error,
  };
}
