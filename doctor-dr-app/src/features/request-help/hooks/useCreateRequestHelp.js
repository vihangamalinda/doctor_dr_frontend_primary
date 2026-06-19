import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRequestHelp as createRequestHelpApi } from "../../../services/apis/apiRequestHelp";
import toast from "react-hot-toast";

export function useCreateRequestHelp() {
  const queryClient = useQueryClient();
  const { mutate: createRequestHelp, isLoading: isCreating } = useMutation({
    mutationFn: createRequestHelpApi,
    onSuccess: () => {
      toast.success("created the request");
      queryClient.invalidateQueries({ queryKey: ["requested-helps"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    createRequestHelp,
    isCreating,
  };
}
