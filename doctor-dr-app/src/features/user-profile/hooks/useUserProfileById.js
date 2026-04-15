import { getUserProfileById } from "../../../services/apis/apiUserProfile";
import { useQuery } from "@tanstack/react-query";
import {GET_USER_PROFILES_BY_ID} from "./queryKeys.js";

export function useUserProfileById(useProfileId) {
  const {
    data: userProfileDataById,
    isLoading: isUserProfileLoading,
    error,
  } = useQuery({
    queryKey: GET_USER_PROFILES_BY_ID(useProfileId),
    queryFn: () => getUserProfileById(useProfileId),
  });
  return {
    userProfileDataById,
    isUserProfileLoading,
    error,
  };
}
