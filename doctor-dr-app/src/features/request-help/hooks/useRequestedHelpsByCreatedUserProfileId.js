import { useQuery } from "@tanstack/react-query";
import { getRequestedHelpsByCreatedUserProfileId as getRequestedHelpsByCreatedUserProfileIdApi } from "../../../services/apis/apiRequestHelp.js";
import {REQUESTED_HELPS_BY_CREATED_USER_PROFILE_ID} from "./queryKeys.js";
export function useRequestedHelpsByCreatedUserProfileId(createdUserProfileId) {
  const {
    data: requestedHelpsByCreatedProfileId,
    isLoading: isRequestedHelpsLoading,
    error,
  } = useQuery({
    queryKey: REQUESTED_HELPS_BY_CREATED_USER_PROFILE_ID(createdUserProfileId),
    queryFn: () =>
      getRequestedHelpsByCreatedUserProfileIdApi(createdUserProfileId),
  });
  return {
    requestedHelpsByCreatedProfileId,
    isRequestedHelpsLoading,
    error,
  };
}
