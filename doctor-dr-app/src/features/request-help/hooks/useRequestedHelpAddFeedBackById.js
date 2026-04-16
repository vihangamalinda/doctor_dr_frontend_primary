import { useMutation, useQueryClient } from "@tanstack/react-query";
import {addFeedbackByRequestedHelpId as addFeedbackByRequestedHelpIdApi } from "../../../services/apis/apiRequestHelp.js";
import toast from "react-hot-toast";
import { MAIN_KEY_LIST } from "./queryKeys.js";

export function useRequestedHelpAddFeedBackById() {
  const queryClient = useQueryClient();
    const { mutate: addRequestedHelp, isLoading: isAddingFeedback } = useMutation({
      mutationFn: addFeedbackByRequestedHelpIdApi,
      onSuccess: () => {
        toast.success("Successfully added feedback.");
        queryClient.invalidateQueries({ queryKey: MAIN_KEY_LIST});
      },
      onError: (error) => {
        toast.error(error);
      },
    });
  
    return {
      addRequestedHelp,
      isAddingFeedback,
    };
}