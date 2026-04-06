import styled from "styled-components";
import { useCurrentLoggedUserInformation } from "../features/authentication/hooks/useCurrentLoggedUserInformation.js";
import Spinner from "./secondary-ui/Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Authenticated user
  const { currentUser, isAuthenticating, isAuthenticated, error } =
    useCurrentLoggedUserInformation();

  console.log(isAuthenticated, isAuthenticating);
  // if the user is not authenticated, navigate to login page
  useEffect(() => {
    if (!isAuthenticated && !isAuthenticating) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated, isAuthenticating]);

  // and spiner while authenticating
  if (isAuthenticating) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // if authenticated, return the children routes

  if (isAuthenticated) return children;
}
export default ProtectedRoute;
