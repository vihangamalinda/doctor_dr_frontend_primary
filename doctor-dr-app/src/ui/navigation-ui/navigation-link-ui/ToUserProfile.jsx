import StyledNavLink from "./StyledNavLink.jsx";
import { TO_USER_PROFILE_PAGE } from "./NavigationConstants.js";
import { HiMiniUser } from "react-icons/hi2";

function ToUserProfile() {
  return (
    <StyledNavLink to={TO_USER_PROFILE_PAGE}>
      <HiMiniUser /> <span>User</span>
    </StyledNavLink>
  );
}

export default ToUserProfile;
