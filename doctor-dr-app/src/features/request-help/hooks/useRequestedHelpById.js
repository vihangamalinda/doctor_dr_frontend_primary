import { useQuery } from "@tanstack/react-query";
import { getRequestHelpById as getRequestHelpByIdApi } from "../../../services/apis/apiRequestHelp.js";
import { REQUESTED_HELP_BY_ID } from "./queryKeys.js";

export function useRequestedHelpById(requestedHelpId) {
  const {
    data: requestedHelpById,
    isLoading: isRequestedHelpLoading,
    error,
  } = useQuery({
    queryKey: REQUESTED_HELP_BY_ID(requestedHelpId),
    queryFn: () => getRequestHelpByIdApi(requestedHelpId),
  });
  return {
    requestedHelpById,
    isRequestedHelpLoading,
    error,
  };
}
