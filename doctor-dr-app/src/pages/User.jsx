// import Heading from "../ui/secondary-ui/Heading";
import DisplayCurrentUserProfileInformation from "../features/user-profile/DisplayCurrentUserProfileInformation.jsx";
import { Heading } from "../ui/index.js";
import { UpdatePasswordButton } from "../features/authentication/index.js";

function User() {
  return (
    <>
      <Heading as="h1"> User details</Heading>
      <DisplayCurrentUserProfileInformation />
      <UpdatePasswordButton />
    </>
  );
}

export default User;
