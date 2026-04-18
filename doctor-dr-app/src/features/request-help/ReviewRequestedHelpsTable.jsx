import styled from "styled-components";
import { useRequestedHelpsByStatusValue } from "./hooks/useRequestedHelpsByStatusValue";
import statusValueIdentifierMap from "./StatusValueIdentifier";
import ReviewRequestedHelpsRow from "./ReviewRequestedHelpsRow";
// import Spinner from "../../ui/secondary-ui/Spinner";
import {Spinner} from "../../ui/index.js";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 3fr 1fr 0.5fr;
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

function ReviewRequestedHelpsTable() {
  const { requestedHelpsByStatusValue, isRequestedHelpsLoading, error } =
    useRequestedHelpsByStatusValue(statusValueIdentifierMap["withoutFeedback"]);

  if (isRequestedHelpsLoading) return <Spinner />;
  return (
    <Table>
      <TableHeader>
        <div> Title</div>
        <div> Requested date</div>
        <div>options</div>
      </TableHeader>
      {requestedHelpsByStatusValue.map((data) => (
        <ReviewRequestedHelpsRow requestedAssistance={data} />
      ))}
    </Table>
  );
}

export default ReviewRequestedHelpsTable;
