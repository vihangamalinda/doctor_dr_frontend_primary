import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubmission as createSubmissionApi } from "../../../services/apis/apiSubmission";
import toast from "react-hot-toast";

export function useCreateSubmission() {
  const queryClient = useQueryClient();
  const { mutateAsync: createSubmission, isLoading: isCreating } = useMutation({
    mutationFn: (data)=> {
      return createSubmissionApi(data)
    },
    onSuccess: (data) => {
      toast.success("created Submission");
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
    onError: (err) => {
      toast.error(err);
    },
  });


  return { createSubmission, isCreating };
}
