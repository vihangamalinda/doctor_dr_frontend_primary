import styled from "styled-components";
import SubmissionRow from "./SubmissionRow";
import Spinner from "../../ui/secondary-ui/Spinner.jsx";
import { useSubmissionByUserProfileId } from "./hooks/useSubmissionsByUserProfileId.js";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1.3fr 1.5fr 1.7fr 1.7fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const userProfileId = 6;

function SubmissionTable() {
  const { submissionsByUserProfileId, isSubmissionsLoading } =
    useSubmissionByUserProfileId(userProfileId);
  if (isSubmissionsLoading) return <Spinner />;

  return (
    <Table>
      <TableHeader>
        <div>patient Referance Id</div>
        <div>createdDate</div>
        <div>hase Disease</div>
        <div>diseaseStage</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      {submissionsByUserProfileId.map((submission) => (
        <SubmissionRow
          submissionData={submission}
          key={submission.submissionId}
        />
      ))}
    </Table>
  );
}
export default SubmissionTable;
