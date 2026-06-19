import StyledNavLink from "./StyledNavLink.jsx";
import { TO_SUBMISSIONS_PAGE } from "./NavigationConstants.js";
import { HiMiniChartBarSquare } from "react-icons/hi2";

function ToSubmissions() {
  return (
    <StyledNavLink to={TO_SUBMISSIONS_PAGE}>
      <HiMiniChartBarSquare /> <span>Submissions</span>
    </StyledNavLink>
  );
}

export default ToSubmissions;
