// import Row from "../../ui/secondary-ui/Row";
// import Spinner from "../../ui/secondary-ui/Spinner";
import { ROLE_CONSTANTS } from "../user-role/helper";
import { useUserProfilesByUserRoleValue } from "./hooks/useUserProfilesByUserRoleValue";
import UserProfileCard from "./UserProfileCard";
import { Spinner, Row } from "../../ui/index.js";

function OperationalStaffUserProfileTable() {
  /**
   * TODO: need to retrive only Operational Staff users not everyone
   */
  const { userProfilesByUserRoleValue, isUserProfilesLoading } =
    useUserProfilesByUserRoleValue(ROLE_CONSTANTS.operationalStaff);

  if (isUserProfilesLoading) {
    return <Spinner />;
  }

  return (
    <Row type="vertical">
      {userProfilesByUserRoleValue.map((userProfile) => (
        <UserProfileCard userProfile={userProfile} key={userProfile.id} />
      ))}
    </Row>
  );
}

export default OperationalStaffUserProfileTable;
