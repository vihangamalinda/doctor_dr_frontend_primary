import ReportedIssueTable from "../features/report-issue/ReportedIssueTable";
// import Heading from "../ui/secondary-ui/Heading";
import { Heading } from "../ui/index.js";

function PreviewReportedIssues() {
  return (
    <>
      <Heading as="h1">Reported Issues</Heading>
      <ReportedIssueTable />
    </>
  );
}
export default PreviewReportedIssues;
