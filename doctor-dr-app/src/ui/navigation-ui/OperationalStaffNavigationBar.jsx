function OperationalStafffNavigationBar() {
  return (<nav>
      <StyledNavList>
        <li>
          <ToDashboard />
        </li>
        {/* <li>
          <ToDiagnosis />
        </li> */}
        {/* <li>
          <ToSubmissions />
        </li> */}
        {/* <li>

          <ToAddReportedIsusse />
        </li> */}
        {/* <li>
          <ToAddRequestedHelp />
        </li> */}

        <li>
          <ToUserProfile />
        </li>
        <li>
          <ToSettings />
        </li>
        <li>
          <ToReportedIsusses />
        </li>
        <li>
          <ToRegisteredUserProfiles />
        </li>
        {/* <li>
          <ToOperationalStaffUserProfiles />
        </li> */}
        <li>
          <ToAddCommonUserProfile />
        </li>
        {/* <li>
          <ToAddOperationalStaffUserProfile />
        </li> */}
        <li>
          <ToReviewRequestedHelps />
        </li>
      </StyledNavList>
    </nav>);
}
export default OperationalStafffNavigationBar;
