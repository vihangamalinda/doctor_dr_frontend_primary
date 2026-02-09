import {getAllSubmissionsByUserProfileId as getAllSubmissionsByUserProfileIdApi} from "../../../services/apis/apiSubmission.js";
import { useQuery } from '@tanstack/react-query';

export function useSubmissionByUserProfileId(userProfileId){
      const {data:submissionsByUserProfileId,isLoading:isSubmissionsLoading,error} = useQuery({
    queryKey:["submissions"],
    queryFn:()=>getAllSubmissionsByUserProfileIdApi(userProfileId)
  });

  return ({
    submissionsByUserProfileId,
    isSubmissionsLoading,
    error
  })
}