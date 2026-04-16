import { getAllSubmissionsByUserProfileId as getAllSubmissionsByUserProfileIdApi } from "../../../services/apis/apiSubmission.js";
import { useQuery } from "@tanstack/react-query";
import { SUBMISSION_BY_USER_PROFILE_ID } from "./queryKeys.js";

export function useSubmissionByUserProfileId(userProfileId) {
  const {
    data: submissionsByUserProfileId,
    isLoading: isSubmissionsLoading,
    error,
  } = useQuery({
    queryKey: SUBMISSION_BY_USER_PROFILE_ID(userProfileId),
    queryFn: () => getAllSubmissionsByUserProfileIdApi(userProfileId),
  });

  return {
    submissionsByUserProfileId,
    isSubmissionsLoading,
    error,
  };
}
