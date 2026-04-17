import { useMutation, useQueryClient } from "@tanstack/react-query";
import {createUserProfile as createUserProfileApi } from "../../../services/apis/apiUserProfile.js";
import toast from "react-hot-toast";
import {MAIN_KEY} from "./queryKeys.js";

export function useCreateUserProfile() {
  const queryClient = useQueryClient();
  const { mutate: createUserProfile, isLoading: isCreating } = useMutation({
    mutationFn: createUserProfileApi,
    onSuccess: () => {
      toast.success("User profile created successfully");
      queryClient.invalidateQueries({ queryKey: [MAIN_KEY] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    createUserProfile,
    isCreating,
  };
}
