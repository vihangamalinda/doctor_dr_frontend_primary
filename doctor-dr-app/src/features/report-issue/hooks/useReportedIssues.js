import { useQuery } from "@tanstack/react-query";
import { getAllReportIssues } from "../../../services/apis/apiReportIssue";

export function useReportedIssues() {
  const {
    data: allReportedIssues,
    isLoading: isAllReportedIssuesLoading,
    error,
  } = useQuery({
    queryKey: ["reported-issues"],
    queryFn: () => getAllReportIssues(),
  });

  return {
    allReportedIssues,
    isAllReportedIssuesLoading,
    error,
  };
}
