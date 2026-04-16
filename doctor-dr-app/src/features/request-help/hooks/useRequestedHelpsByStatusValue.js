import { useQuery } from "@tanstack/react-query";
import { getRequestedHelpsByStatusValue as getRequestedHelpsByStatusValueApi } from "../../../services/apis/apiRequestHelp.js";
import { REQUESTED_HELPS_BY_STATUS_VALUE_KEY } from "./queryKeys.js";
export function useRequestedHelpsByStatusValue(statusValue) {
  const {
    data: requestedHelpsByStatusValue,
    isLoading: isRequestedHelpsLoading,
    error,
  } = useQuery({
    queryKey: REQUESTED_HELPS_BY_STATUS_VALUE_KEY(statusValue),
    queryFn: () => getRequestedHelpsByStatusValueApi(statusValue),
  });
  return {
    requestedHelpsByStatusValue,
    isRequestedHelpsLoading,
    error,
  };
}
