import styled from "styled-components";
// import CustomFormRow from "../../ui/secondary-ui/CustomFormRow.jsx";
import SubmissionClassProbability from "./SubmissionClassProbability.jsx";
// import Button from "../../ui/secondary-ui/Button";
import SubmissionComparisionViewer from "./SubmissionComparisionViewer.jsx";
import SubmissionReportDownload from "./SubmissionReportDownload.jsx";
// import Row from "../../ui/secondary-ui/Row.jsx";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { CustomFormRow, Button, Row } from "../../ui/index.js";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  padding-left: 1.6rem;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

function SubmissionPredictionResult({ prediction, resetSubmissionResult }) {
  const {
    active,
    createdDateTime,
    diseaseStage,
    hasDisease,
    modelPredictionDetails,
    patientReferenceId,
    status,
    submissionId,
    userProfile,
  } = prediction;

  const { id, name: diseaseStageName, diseaseLevel } = diseaseStage;

  const {
    classProbability,
    message,
    overlayImage,
    originalInputImage,
    predictionIndex,
  } = modelPredictionDetails;
  const { id: userProfileId } = userProfile;
  const { id: statusId, name: StatusDefinition } = status;
  return (
    <>
      <Row type="horizontal">
        <Button
          variation="primary"
          size="large"
          onClick={() => resetSubmissionResult()}
        >
          <HiMiniArrowUturnLeft /> Perform another submission
        </Button>

        <SubmissionReportDownload prediction={prediction} />
      </Row>
      <Table>
        <CustomFormRow label="Patient Reference Id" error={null}>
          <p>{patientReferenceId}</p>
        </CustomFormRow>
        <CustomFormRow label="Is the submission currently active" error={null}>
          <p>{active ? "Yes" : "No"}</p>
        </CustomFormRow>
        <CustomFormRow label="createdDateTime" error={null}>
          <p>{createdDateTime}</p>
        </CustomFormRow>
        <CustomFormRow label="diseaseStageName" error={null}>
          <p>{diseaseStageName}</p>
        </CustomFormRow>
        <CustomFormRow label="diseaseLevel" error={null}>
          <p>{diseaseLevel}</p>
        </CustomFormRow>
        <CustomFormRow label="hasDisease" error={null}>
          <p>{hasDisease ? "Yes" : "No"}</p>
        </CustomFormRow>
        <CustomFormRow label="Submission status" error={null}>
          <p>{StatusDefinition}</p>
        </CustomFormRow>

        <SubmissionClassProbability classProbability={classProbability} />

        {/* <img src={`data:image/png;base64,${overlayImage}`} alt="model prediction overlay" /> */}

        <SubmissionComparisionViewer
          originalImage={originalInputImage}
          overlayImage={overlayImage}
        />
      </Table>
    </>
  );
}
export default SubmissionPredictionResult;
