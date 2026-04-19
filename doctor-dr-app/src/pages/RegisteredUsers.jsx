import CommonUserProfileTable from "../features/user-profile/CommonUserProfileTable.jsx";
// import Heading from "../ui/secondary-ui/Heading";
import { Heading } from "../ui/index.js";

function RegisteredUsers() {
  return (
    <>
      <Heading as="h1">Registered Users</Heading>
      <CommonUserProfileTable />
    </>
  );
}

export default RegisteredUsers;
