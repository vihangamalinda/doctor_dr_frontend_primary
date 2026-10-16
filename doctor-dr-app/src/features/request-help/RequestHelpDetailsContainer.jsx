import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useRequestedHelpById } from "./hooks/useRequestedHelpById";
// import LabelTextArea from "../../ui/request-form-ui/LabelTextArea";
// import LabelPrimary from "../../ui/request-form-ui/LabelPrimary";
// import LabelGroupStyle from "../../ui/request-form-ui/LabelGroupStyle";
// import Spinner from "../../ui/secondary-ui/Spinner";
import RequestHelpDetailsInformation from "./RequestHelpDetailsInformation";
import AddRequestedAssistance from "./AddRequestedAssistance";
import DisplayFeedback from "./DisplayFeedback";
// import Row from "../../ui/secondary-ui/Row";
// import Button from "../../ui/secondary-ui/Button";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import {
  LabelTextArea,
  LabelPrimary,
  LabelGroupStyle,
  Spinner,
  Row,
  Button,
} from "../../ui/index.js";

const RequestCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  /* width: 900px; */
  border-radius: 20px;
  padding: 20px;
  background-color: var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-400);
  color: var(--color-grey-600);
`;

function RequestHelpDetailsContainer() {
  const { requestedHelpId } = useParams();
  const { requestedHelpById, isRequestedHelpLoading, error } =
    useRequestedHelpById(requestedHelpId);
  const moveBack = useMoveBack();

  if (isRequestedHelpLoading) return <Spinner />;

  const { title, description, contact, status, createdDateTime, feedback } =
    requestedHelpById;
  const { name: statusName, value: statusValue } = status;
  const hasFeedBack = statusValue !== 1;

  // if(true) return <>p</>;

  return (
    <>
      <Row>
        <Button variation="primary" size="large" onClick={() => moveBack()}>
          {" "}
          <HiMiniArrowSmallLeft /> back{" "}
        </Button>
      </Row>
      <RequestCardStyle>
        <RequestHelpDetailsInformation requestedHelp={requestedHelpById} />
        {hasFeedBack && (
          <DisplayFeedback contact={contact} feedback={feedback} />
        )}
      </RequestCardStyle>

      {!hasFeedBack && <AddRequestedAssistance />}
    </>
  );
}

export default RequestHelpDetailsContainer;
