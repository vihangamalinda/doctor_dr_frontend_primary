import StyledNavLink from "./StyledNavLink.jsx";
import { TO_ADD_COMMON_USER_PROFILE_PAGE } from "./NavigationConstants.js";
import { HiCog8Tooth ,HiMiniUserPlus } from "react-icons/hi2";

function ToAddCommonUserProfile() {
  return (
    <StyledNavLink to={TO_ADD_COMMON_USER_PROFILE_PAGE}>
      <HiMiniUserPlus /> <span>Add user profiles</span>
    </StyledNavLink>
  );
}

export default ToAddCommonUserProfile;
