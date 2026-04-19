// import Row from "../../ui/secondary-ui/Row.jsx";
// import Spinner from "../../ui/secondary-ui/Spinner.jsx";
// import { useAllUserProfile } from "./hooks/useAllUserProfile.js";
import UserProfileCard from "./UserProfileCard.jsx";
import { useUserProfilesByUserRoleValue } from "./hooks/useUserProfilesByUserRoleValue.js";
import { ROLE_CONSTANTS } from "../user-role/helper/index.js";
import { Spinner, Row } from "../../ui/index.js";

function CommonUserProfileTable() {
  /**
   * TODO: need to retrive only common users not everyone
   */
  const { userProfilesByUserRoleValue, isUserProfilesLoading } =
    useUserProfilesByUserRoleValue(ROLE_CONSTANTS.commonUser);

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
export default CommonUserProfileTable;
