import styled from "styled-components";
import RequestCard from "./RequestCard";
import Row from "../../ui/secondary-ui/Row";
import Spinner from "../../ui/secondary-ui/Spinner.jsx";
import { useRequestedHelpsByCreatedUserProfileId } from "./hooks/useRequestedHelpsByCreatedUserProfileId.js";
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

const createdUserProfileId = 6;
function RequestTable() {
  const { requestedHelpsByCreatedProfileId, isRequestedHelpsLoading, error } =
    useRequestedHelpsByCreatedUserProfileId(createdUserProfileId);

  if (isRequestedHelpsLoading) {
    return <Spinner />;
  }

  return (
    <Row type="vertical">
      {requestedHelpsByCreatedProfileId.map((request) => (
        <RequestCard request={request} key={request.id} />
      ))}
    </Row>
  );
}
export default RequestTable;
