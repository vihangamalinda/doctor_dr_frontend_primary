import StyledNavList from "./StyledNavList";
import {
  ToAddCommonUserProfile,
  ToAddOperationalStaffUserProfile,
  ToAddReportedIsusse,
  ToAddRequestedHelp,
  ToDashboard,
  ToDiagnosis,
  ToOperationalStaffUserProfiles,
  ToRegisteredUserProfiles,
  ToReportedIsusses,
  ToSettings,
  ToSubmissions,
  ToUserProfile,
  ToReviewRequestedHelps,
} from "./navigation-link-ui/index.js";

function BasicUserNavigationBar() {
  return (
    <nav>
      <StyledNavList>
        <li>
          <ToDashboard />
        </li>
        <li>
          <ToDiagnosis />
        </li>
        <li>
          <ToSubmissions />
        </li>
        <li>
          <ToAddReportedIsusse />
        </li>
        <li>
          <ToAddRequestedHelp />
        </li>
        <li>
          <ToUserProfile />
        </li>
        <li>
          <ToSettings />
        </li>
        {/* <li>
          <ToReportedIsusses />
        </li> */}
        {/* <li>

          <ToRegisteredUserProfiles />
        </li> */}
        {/* <li>
          <ToOperationalStaffUserProfiles />
        </li> */}
        {/* <li>
          <ToAddCommonUserProfile />
        </li> */}
        {/* <li>
          <ToAddOperationalStaffUserProfile />
        </li> */}
        {/* <li>
          <ToReviewRequestedHelps />
        </li> */}
      </StyledNavList>
    </nav>
  );
}

export default BasicUserNavigationBar;
