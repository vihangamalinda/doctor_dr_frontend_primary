import UserProfileTable from "../features/user-profile/UserProfileTable";
import Heading from "../ui/secondary-ui/Heading";

function RegisteredUsers() {
  return (
    <>
      <Heading as="h1">Registered Users</Heading>
      <UserProfileTable />
    </>
  );
}

export default RegisteredUsers;
