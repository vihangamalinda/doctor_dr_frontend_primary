import StyledNavLink from "./StyledNavLink.jsx";
import { TO_OPERTATIONAL_STAFF_USER_PROFILES_PAGE } from "./NavigationConstants.js";
import { HiCog8Tooth } from "react-icons/hi2";

function ToOperationalStaffUserProfiles() {
  return (
    <StyledNavLink to={TO_OPERTATIONAL_STAFF_USER_PROFILES_PAGE}>
      <HiCog8Tooth /> <span>Operational Staff</span>
    </StyledNavLink>
  );
}

export default ToOperationalStaffUserProfiles;
