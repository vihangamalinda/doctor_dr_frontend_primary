// import StyledNavLink from "./StyledNavLink";
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

function AdminNavigationBar() {
  return (
    <nav>
      <StyledNavList>
        <li>
          {/* <StyledNavLink to="/dashboard">
            <HiMiniHome /> <span>Home</span>
          </StyledNavLink> */}
          <ToDashboard />
        </li>
        <li>
          {/* <StyledNavLink to="/diagnosis">
            <HiMiniEye /> <span>Diagnosis</span>
          </StyledNavLink> */}
          <ToDiagnosis />
        </li>
        <li>
          {/* <StyledNavLink to="/submissions">
            <HiMiniChartBarSquare /> <span>Submissions</span>
          </StyledNavLink> */}
          <ToSubmissions />
        </li>
        <li>
          {/* <StyledNavLink to="/report-issue">
            <HiBugAnt /> <span>Report issue</span>
          </StyledNavLink> */}
          <ToAddReportedIsusse />
        </li>
        <li>
          {/* <StyledNavLink to="/request-helper">
            <HiMiniChatBubbleBottomCenterText /> <span>Helper</span>
          </StyledNavLink> */}
          <ToAddRequestedHelp />
        </li>

        <li>
          {/* <StyledNavLink to="/user">
            <HiMiniUser /> <span>User</span>
          </StyledNavLink> */}
          <ToUserProfile />
        </li>
        <li>
          {/* <StyledNavLink to="/settings">
            <HiCog8Tooth /> <span>Settings</span>
          </StyledNavLink> */}
          <ToSettings />
        </li>
        <li>
          {/* <StyledNavLink to="/preview-reported-issues">
            <HiCog8Tooth /> <span>Reported Issues</span>
          </StyledNavLink> */}
          <ToReportedIsusses />
        </li>
        <li>
          {/* <StyledNavLink to="/registered-user-profiles">
            <HiCog8Tooth /> <span>Registered Users</span>
          </StyledNavLink> */}
          <ToRegisteredUserProfiles />
        </li>
        <li>
          {/* <StyledNavLink to="/operational-staff-user-profiles">
            <HiCog8Tooth /> <span>Operational Staff</span>
          </StyledNavLink> */}
          <ToOperationalStaffUserProfiles />
        </li>
        <li>
          {/* <StyledNavLink to="/add-common-user-profile">
            <HiCog8Tooth /> <span>Add user profiles</span>
          </StyledNavLink> */}
          <ToAddCommonUserProfile />
        </li>
        <li>
          {/* <StyledNavLink to="/add-operational-staff-user-profile">
            <HiCog8Tooth /> <span>Add Operational Staff</span>
          </StyledNavLink> */}
          <ToAddOperationalStaffUserProfile />
        </li>
        <li>
          <ToReviewRequestedHelps />
        </li>
      </StyledNavList>
    </nav>
  );
}
export default AdminNavigationBar;
