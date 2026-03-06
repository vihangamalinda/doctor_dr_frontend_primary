import Row from "../../ui/secondary-ui/Row";
import Spinner from "../../ui/secondary-ui/Spinner";
import { useAllUserProfile } from "./hooks/useAllUserProfile";
import UserProfileCard from "./UserProfileCard";

function UserProfileTable() {
  const { allUserProfiles, isAllUserProfileLoading, error } =
    useAllUserProfile();

  if (isAllUserProfileLoading) {
    return <Spinner />;
  }

  return (
    <Row type="vertical">
      {allUserProfiles.map((userProfile) => (
        <UserProfileCard userProfile={userProfile} key={userProfile.id} />
      ))}
    </Row>
  );
}
export default UserProfileTable;
