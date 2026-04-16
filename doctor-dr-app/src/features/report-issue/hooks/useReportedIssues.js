import { useQuery } from "@tanstack/react-query";
import { getAllReportIssues } from "../../../services/apis/apiReportIssue";
import { GET_ALL_REPORTED_ISSUES } from "./queryKeys";

export function useReportedIssues() {
  const {
    data: allReportedIssues,
    isLoading: isAllReportedIssuesLoading,
    error,
  } = useQuery({
    queryKey: GET_ALL_REPORTED_ISSUES,
    queryFn: () => getAllReportIssues(),
  });

  return {
    allReportedIssues,
    isAllReportedIssuesLoading,
    error,
  };
}
