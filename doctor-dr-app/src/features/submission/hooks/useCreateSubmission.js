import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubmission as createSubmissionApi } from "../../../services/apis/apiSubmission";
import toast from "react-hot-toast";

export function useCreateSubmission() {
  const queryClient = useQueryClient();
  const { mutate: createSubmission, isLoading: isCreating } = useMutation({
    mutationFn: createSubmissionApi,
    onSuccess: () => {
      toast.success("created Submission");
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  return { createSubmission, isCreating };
}
