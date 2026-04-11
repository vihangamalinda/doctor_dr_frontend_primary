import StyledNavLink from "./StyledNavLink.jsx";
import {TO_REGISTERED_USER_PROFILES_PAGE} from "./NavigationConstants.js";
import {
  HiCog8Tooth,
} from "react-icons/hi2";

function ToRegisteredUserProfiles(){
    return (
              <StyledNavLink to={TO_REGISTERED_USER_PROFILES_PAGE}>
                <HiCog8Tooth /> <span>Registered Users</span>
              </StyledNavLink>
    )

}

export default ToRegisteredUserProfiles;