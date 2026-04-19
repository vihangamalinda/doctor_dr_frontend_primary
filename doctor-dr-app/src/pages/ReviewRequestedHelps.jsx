/*
    this page is belong to Operational-staff
*/
import ReviewRequestedHelpsTable from "../features/request-help/ReviewRequestedHelpsTable";
// import Heading from "../ui/secondary-ui/Heading";
import { Heading } from "../ui/index.js";

function ReviewRequestedHelps() {
  return (
    <>
      <Heading as="h1">Review Requested Helps</Heading>
      <ReviewRequestedHelpsTable />
    </>
  );
}
export default ReviewRequestedHelps;
