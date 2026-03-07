// This page is belong to Operational Staff
import Heading from "../ui/secondary-ui/Heading";
import Row from "../ui/secondary-ui/Row";
import CreateCommonUserProfile from "../features/user-profile/creationalForms/CreateCommonUserProfile";

function AddCommonUserProfile() {
  return (
    <Row type="vertical">
      <Heading as="h1">Add a User profile</Heading>
      <CreateCommonUserProfile />
    </Row>
  );
}
export default AddCommonUserProfile;
