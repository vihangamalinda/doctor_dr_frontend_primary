import { getAllHospitalByType } from "../services/apis/apiHospital.js";
import { useQuery } from "@tanstack/react-query";

/**
 * TODO : need to retrive only regular hospital not all
 *
 */
export function useRegularHospital() {
  const {
    data: allRegularHospital,
    isLoading: isAllRegularHospitalLoading,
    error,
  } = useQuery({
    queryKey: ["all-regular-hospital"],
    queryFn: () =>  getAllHospitalByType(false),
  });
  return {
    allRegularHospital,
    isAllRegularHospitalLoading,
    error,
  };
}
