import styled from "styled-components";
import DisplayFeedback from "./DisplayFeedback";
import RequestedHelpInformation from "./RequestedHelpInformation";


const RequestCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 900px;
  border-radius: 20px;
  padding: 20px;
  background-color: var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-400);
  color: var(--color-grey-600);
`;

const HeadingGrouping = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  font-weight: 700;
  border-bottom: 2px solid var(--color-grey-400);
`;
const LabelTitlePrimary = styled.label`
  font-weight: 900;
  overflow-wrap: break-word;
`;
const LabelTitleSecondary = styled.label`
  font-weight: 900;
  overflow-wrap: break-word;
`;

const FEEDBACK_HAS_PROVIDED_STATUS_VALUE=1;

function RequestCard({ request }) {
  const { title, description, feedback, contact, status } = request;

  const hasGivenFeedBack = status.value !== FEEDBACK_HAS_PROVIDED_STATUS_VALUE;

  return (
    <RequestCardStyle>
      <RequestedHelpInformation 
      title={title} 
      description={description} 
      status={status} 
      />
      {hasGivenFeedBack && (
        <DisplayFeedback feedback={feedback} contact={contact} />
      )}
    </RequestCardStyle>
  );
}
export default RequestCard;
