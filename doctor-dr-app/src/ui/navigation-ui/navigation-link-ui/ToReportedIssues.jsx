import StyledNavLink from "./StyledNavLink.jsx";
import { TO_PREVIEW_REPORTED_ISSUES_PAGE } from "./NavigationConstants.js";
import { HiCog8Tooth } from "react-icons/hi2";

function ToReportedIsusses() {
  return (
    <StyledNavLink to={TO_PREVIEW_REPORTED_ISSUES_PAGE}>
      <HiCog8Tooth /> <span>Reported Issues</span>
    </StyledNavLink>
  );
}

export default ToReportedIsusses;
