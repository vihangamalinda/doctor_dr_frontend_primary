import CreateIssue from "../features/report-issue/CreateIssue";
// import Heading from "../ui/secondary-ui/Heading";
import { Heading } from "../ui/index.js";

function ReportIssue() {
  return (
    <>
      <Heading as="h1">Report Issue</Heading>
      <CreateIssue />
    </>
  );
}
export default ReportIssue;
