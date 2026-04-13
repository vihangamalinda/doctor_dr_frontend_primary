import { useQuery } from "@tanstack/react-query";
import { getRequestedHelpsByStatusValue as getRequestedHelpsByStatusValueApi } from "../../../services/apis/apiRequestHelp.js";

export function useRequestedHelpsByStatusValue(statusValue) {
  const {
    data: requestedHelpsByStatusValue,
    isLoading: isRequestedHelpsLoading,
    error,
  } = useQuery({
    queryKey: ["requested-helps","byStatusValue",statusValue],
    queryFn: () =>
      getRequestedHelpsByStatusValueApi(statusValue),
  });
  return {
    requestedHelpsByStatusValue,
    isRequestedHelpsLoading,
    error,
  };
}