import Row from "../../ui/secondary-ui/Row";
import ReportedIssueCard from "./ReportedIssueCard";
import Spinner from "../../ui/secondary-ui/Spinner.jsx";
import { useReportedIssues } from "./hooks/useReportedIssues.js";

function ReportedIssueTable() {
  const { allReportedIssues, isAllReportedIssuesLoading, error } =
    useReportedIssues();

  if (isAllReportedIssuesLoading) {
    return <Spinner />;
  }

  return (
    <Row type="vertical">
      {allReportedIssues.map((issue) => (
        <ReportedIssueCard reportedIssue={issue} key={issue.id} />
      ))}
    </Row>
  );
}

export default ReportedIssueTable;
