import OperationalStaffProfileTable from "../features/user-profile/OperationalStaffProfileTable";
import Heading from "../ui/secondary-ui/Heading";

function OperationalStaff() {
  return (
    <>
      <Heading as="h1">Registered Users</Heading>
      <OperationalStaffProfileTable />
    </>
  );
}
export default OperationalStaff;
