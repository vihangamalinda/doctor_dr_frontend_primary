import {getAllHospital} from "../services/apis/apiHospital.js"
import { useQuery } from "@tanstack/react-query";

/**
 * TODO : need to retrive only internal system hospital not all
 * 
 */
export function useInternalSystemHospital() {
  const {
    data: allInternalSystemHospital,
    isLoading: isAllInternalSystemHospitalLoading,
    error,
  } = useQuery({
    queryKey: ["all-internal-system-hospital"],
    queryFn: () => getAllHospital(),
  });
  return {
    allInternalSystemHospital,
    isAllInternalSystemHospitalLoading,
    error,
  };
}