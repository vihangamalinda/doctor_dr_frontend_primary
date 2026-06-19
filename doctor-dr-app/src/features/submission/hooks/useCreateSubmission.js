import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubmission as createSubmissionApi } from "../../../services/apis/apiSubmission";
import toast from "react-hot-toast";
import { MAIN_KEY_LIST } from "./queryKeys";

export function useCreateSubmission() {
  const queryClient = useQueryClient();
  const { mutateAsync: createSubmission, isLoading: isCreating } = useMutation({
    mutationFn: (data) => {
      return createSubmissionApi(data);
    },
    onSuccess: (data) => {
      toast.success("created Submission");
      queryClient.invalidateQueries({ queryKey: MAIN_KEY_LIST });
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return { createSubmission, isCreating };
}
