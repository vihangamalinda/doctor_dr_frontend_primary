import StyledNavLink from "./StyledNavLink.jsx";
import { TO_ADD_COMMON_USER_PROFILE_PAGE } from "./NavigationConstants.js";
import { HiCog8Tooth } from "react-icons/hi2";

function ToAddCommonUserProfile() {
  return (
    <StyledNavLink to={TO_ADD_COMMON_USER_PROFILE_PAGE}>
      <HiCog8Tooth /> <span>Add user profiles</span>
    </StyledNavLink>
  );
}

export default ToAddCommonUserProfile;
