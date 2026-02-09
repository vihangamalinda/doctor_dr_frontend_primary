import { getUserProfileById } from "../../../services/apis/apiUserProfile";
import { useQuery } from "@tanstack/react-query";

export function useUserProfileById(useProfileId) {
  const {
    data: userProfileDataById,
    isLoading: isUserProfileLoading,
    error,
  } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => getUserProfileById(useProfileId),
  });
  return {
    userProfileDataById,
    isUserProfileLoading,
    error,
  };
}
