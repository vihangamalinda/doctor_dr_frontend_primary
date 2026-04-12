import styled from "styled-components";
import SubmissionRow from "./SubmissionRow";
import Spinner from "../../ui/secondary-ui/Spinner.jsx";
import { useSubmissionByUserProfileId } from "./hooks/useSubmissionsByUserProfileId.js";
import { useSearchParams } from "react-router-dom";
import {
  DISEASE_STAGE_FILTER,
  getFilteredSubmission,
} from "./filters/SubmissionsByDiseaseStageFilter.js";
import {
  getSortedSubmissions,
  SORT_BY_FILTER,
} from "./filters/SubmissionsSortByFilter.js";
import { useSelector } from "react-redux";
import { selectCurrentLoggedUserProfileId } from "../authentication/store/selectors/CurrentLoggedUserSelectors.js";

const isEmptyArray=(arr)=> Array.isArray(arr) && arr.length === 0;

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
  text-align: center;
`;
const EmptytMessage = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  column-gap: 2.4rem;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;


const getSubmission = (submissions, filteredValue, sortByValue) => {
  const filteredSubmission = getFilteredSubmission(submissions, filteredValue);
  const sortedSubmissions = getSortedSubmissions(
    filteredSubmission,
    sortByValue,
  );
  return sortedSubmissions;
};

function SubmissionTable() {
  const currentLoggedUserProfileId = useSelector(
    selectCurrentLoggedUserProfileId,
  );
  const { submissionsByUserProfileId, isSubmissionsLoading } =
    useSubmissionByUserProfileId(currentLoggedUserProfileId);
  const [searchParams] = useSearchParams();

  if (isSubmissionsLoading) return <Spinner />;

  const diseaseStageFilteredValue = searchParams.get(DISEASE_STAGE_FILTER);
  const sortByFilteredValue = searchParams.get(SORT_BY_FILTER);

  const submissions = getSubmission(
    submissionsByUserProfileId,
    diseaseStageFilteredValue,
    sortByFilteredValue,
  );

  return (
    <Table>
      <TableHeader>
        <div>patient Referance Id</div>
        <div>created date</div>
        <div>hase Disease</div>
        <div>diseaseStage</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      {!isEmptyArray(submissions) && submissions.map((submission) => (
        <SubmissionRow
          submissionData={submission}
          key={submission.submissionId}
        />
      ))}
      {isEmptyArray(submissions) && <EmptytMessage> No submissions has been performed.</EmptytMessage>}
    </Table>
  );
}
export default SubmissionTable;
