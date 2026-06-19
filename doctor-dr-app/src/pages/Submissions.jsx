import SubmissionTable from "../features/submission/SubmissionTable";
// import Heading from "../ui/secondary-ui/Heading";
// import Row from "../ui/secondary-ui/Row";
import SubmissionTableOperator from "../features/submission/SubmissionTableOperator.jsx";
import { Heading, Row } from "../ui/index.js";

function Submissions() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Submissions by user</Heading>
      </Row>
      <Row type="horizontal">
        <SubmissionTableOperator />
      </Row>
      <Row>
        <SubmissionTable />
      </Row>
    </>
  );
}
export default Submissions;
