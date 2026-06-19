import { useMutation } from "@tanstack/react-query";
import { destoyJwtTokenByUserLogout } from "../../../services/apis/apiUserCredentials.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: () => {
      return destoyJwtTokenByUserLogout();
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Logout failed. Please try again.");
    },
  });
  return { logout, isLoggingOut };
}
