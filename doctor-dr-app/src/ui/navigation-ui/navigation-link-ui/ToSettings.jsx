import StyledNavLink from "./StyledNavLink.jsx";
import { TO_SETTINGS_PAGE } from "./NavigationConstants.js";
import { HiCog8Tooth } from "react-icons/hi2";

function ToSettings() {
  return (
    <StyledNavLink to={TO_SETTINGS_PAGE}>
      <HiCog8Tooth /> <span>Settings</span>
    </StyledNavLink>
  );
}

export default ToSettings;
