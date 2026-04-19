import { useLogout } from "./hooks/useLogout.js";
import {Button} from "../../ui/index.js";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import styled from "styled-components";

const StyledSpaned = styled.span`
  /* display: flex; */
  align-items: center;
  padding: 0.8rem;
`

const handleLogout = (logoutFn) => {
 logoutFn();
}

function LogoutMiniButton() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <Button
      variation="danger"
      size="large"
      disabled={isLoggingOut}
      onClick={() => handleLogout(logout)}
    >
      <HiArrowRightStartOnRectangle />
      <StyledSpaned>Logout</StyledSpaned>
    </Button>
  );
}

export default LogoutMiniButton;
