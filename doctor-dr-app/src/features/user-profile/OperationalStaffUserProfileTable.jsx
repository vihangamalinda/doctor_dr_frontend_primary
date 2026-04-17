import Row from "../../ui/secondary-ui/Row";
import { ROLE_CONSTANTS } from "../user-role/helper";
import { useUserProfilesByUserRoleValue } from "./hooks/useUserProfilesByUserRoleValue";


function OperationalStaffUserProfileTable() {
  /**
   * TODO: need to retrive only Operational Staff users not everyone
   */
  const { userProfilesByUserRoleValue,isUserProfilesLoading } = useUserProfilesByUserRoleValue(ROLE_CONSTANTS.operationalStaff);

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