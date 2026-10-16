import StyledNavLink from "./StyledNavLink.jsx";
import { TO_ADD_OPERATIONAL_STAFF_USER_PROFILE_PAGE } from "./NavigationConstants.js";
import { HiCog8Tooth,HiMiniUserPlus  } from "react-icons/hi2";

function ToAddOperationalStaffUserProfile() {
  return (
    <StyledNavLink to={TO_ADD_OPERATIONAL_STAFF_USER_PROFILE_PAGE}>
      <HiMiniUserPlus  /> <span>Add Operational Staff</span>
    </StyledNavLink>
  );
}

export default ToAddOperationalStaffUserProfile;
