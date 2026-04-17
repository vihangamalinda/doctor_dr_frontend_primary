import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserProfileById as deleteUserProfileByIdApi } from "../../../services/apis/apiUserProfile.js";
import toast from "react-hot-toast";
import { MAIN_KEY } from "./queryKeys.js";


export function useDeleteUserProfileById() {
  const queryClient = useQueryClient();
  const { mutate: deleteUserProfileById, isLoading: isdeleting } = useMutation({
    mutationFn: deleteUserProfileByIdApi,
    onSuccess: () => {
      toast.success("User profile deleted successfully");
      queryClient.invalidateQueries({ queryKey: MAIN_KEY });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    deleteUserProfileById,
    isdeleting,
  };
}