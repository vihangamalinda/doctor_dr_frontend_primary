import StyledNavLink from "./StyledNavLink.jsx";
import {TO_REPORT_ISSUE_PAGE} from "./NavigationConstants.js";
import {
  HiBugAnt,
} from "react-icons/hi2";

function ToAddReportedIsusse(){
    return (
              <StyledNavLink to={TO_REPORT_ISSUE_PAGE}>
                <HiBugAnt /> <span>Report issue</span>
              </StyledNavLink>
    )

}

export default ToAddReportedIsusse;