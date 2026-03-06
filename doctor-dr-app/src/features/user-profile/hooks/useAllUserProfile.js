import { getAllUserProfile } from "../../../services/apis/apiUserProfile";
import { useQuery } from "@tanstack/react-query";

export function useAllUserProfile() {
  const {
    data: allUserProfiles,
    isLoading: isAllUserProfileLoading,
    error,
  } = useQuery({
    queryKey: ["all-user-profile"],
    queryFn: () => getAllUserProfile(),
  });
  return {
    allUserProfiles,
    isAllUserProfileLoading,
    error,
  };
}
