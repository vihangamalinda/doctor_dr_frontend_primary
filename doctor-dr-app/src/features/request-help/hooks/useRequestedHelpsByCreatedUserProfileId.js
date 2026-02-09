import { useQuery } from "@tanstack/react-query";
import { getRequestedHelpsByCreatedUserProfileId as getRequestedHelpsByCreatedUserProfileIdApi } from "../../../services/apis/apiRequestHelp.js";

export function useRequestedHelpsByCreatedUserProfileId(createdUserProfileId) {
  const {
    data: requestedHelpsByCreatedProfileId,
    isLoading: isRequestedHelpsLoading,
    error,
  } = useQuery({
    queryKey: ["requested-helps"],
    queryFn: () =>
      getRequestedHelpsByCreatedUserProfileIdApi(createdUserProfileId),
  });
  return {
    requestedHelpsByCreatedProfileId,
    isRequestedHelpsLoading,
    error,
  };
}
