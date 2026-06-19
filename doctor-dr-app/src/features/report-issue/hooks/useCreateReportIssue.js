import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReportIssue as createReportIssueApi } from "../../../services/apis/apiReportIssue.js";
import toast from "react-hot-toast";
import { MAIN_KEY_LIST } from "./queryKeys.js";

export function useCreateReportIssue() {
  const quertClient = useQueryClient();

  const { mutate: createReportIssue, isLoading: isCreating } = useMutation({
    mutationFn: createReportIssueApi,
    onSuccess: () => {
      toast.success("Create an issue");
      quertClient.invalidateQueries({ queryKey: MAIN_KEY_LIST });
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return {
    createReportIssue,
    isCreating,
  };
}
