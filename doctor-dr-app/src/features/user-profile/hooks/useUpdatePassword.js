import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { MAIN_KEY } from "./queryKeys.js";
import { updatePassword as updatePasswordApi } from "../../../services/apis/apiUserProfile.js";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success("Password updated successfully");
      queryClient.invalidateQueries({
        queryKey: MAIN_KEY,
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    updatePassword,
    isUpdating,
  };
}
