import { useMutation } from "@tanstack/react-query";
// import { createJwtTokenByUserLogin } from "../../../services/apis/apiUserCredentials.js";
import { createJwtTokenByUserLogin } from "../../../services/apis/apiUserCredentials.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isAuthenticating } = useMutation({
    mutationFn: (data) => {
      return createJwtTokenByUserLogin(data);
    },
    onSuccess: (authenticatedUserInformation) => {
      console.log(
        "Authenticated user information:",
        authenticatedUserInformation,
      );
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Login failed. Please check your credentials and try again.");
    },
  });
  return { login, isAuthenticating };
}
