import OperationalStaffUserProfileTable from "../features/user-profile/OperationalStaffUserProfileTable";
import Heading from "../ui/secondary-ui/Heading";

function OperationalStaff() {
  return (
    <>
      <Heading as="h1">Operational Staff</Heading>
      <OperationalStaffUserProfileTable />
    </>
  );
}
export default OperationalStaff;
