import StyledNavLink from "./StyledNavLink.jsx";
import {TO_DASHBOARD_PAGE} from "./NavigationConstants.js";
import {
  HiMiniHome,
} from "react-icons/hi2";

function ToDashboard(){
    return (
              <StyledNavLink to={TO_DASHBOARD_PAGE}>
                <HiMiniHome /> <span>Home</span>
              </StyledNavLink>
    )

}

export default ToDashboard;