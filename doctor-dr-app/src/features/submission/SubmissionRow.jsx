import styled from "styled-components";
// import Button from "../../ui/secondary-ui/Button";
import StyledTag from "../../ui/secondary-ui/StyledTag";
import { Button } from "../../ui/index.js";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.3fr 1.5fr 1.7fr 1.7fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const PatientReferenceId = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  text-align: center;
`;

const HasDisease = styled.div`
  font-family: "Sono";
  font-weight: 600;
  text-align: center;
`;

const DiseaseStageName = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const getDiseaseColourLabels = (diseaseLevel) => {
  if (diseaseLevel === 1 || diseaseLevel === 2) {
    return "orange";
  } else if (diseaseLevel > 2) {
    return "red";
  } else {
    return "green";
  }
};
const deleteBtId = (id) => console.log("submission id deleting darft." + id);
const diseaseFormatter = (hasDisease) => (hasDisease ? "Yes" : "No");

const isValidData = (data) => {
  if(!data) return false;

  let isValid = true;

  if (!data.submissionId || !data.patientReferenceId || !data.createdDateTime || !data.hasDisease || !data.diseaseStage) {
    isValid = false;
  }
  return isValid;
}

function SubmissionRow({ submissionData }) {
  const isValid = isValidData(submissionData);
  if (!isValid) {
    return <></>
  }
  
  const {
    submissionId,
    patientReferenceId,
    createdDateTime,
    hasDisease,
    diseaseStage,
  } = submissionData;
  const { name, diseaseLevel } = diseaseStage;
  const isDeleting = false;
  const diseaseContain = diseaseFormatter(hasDisease);
  console.log(patientReferenceId);

  const diseaseColourLabel = getDiseaseColourLabels(diseaseLevel);
  // console.log("diseaseColourLabel", diseaseColourLabel);
  return (
    <TableRow>
      <PatientReferenceId>{patientReferenceId}</PatientReferenceId>
      <div>{createdDateTime}</div>
      <HasDisease>{diseaseContain}</HasDisease>
      <StyledTag colourType={diseaseColourLabel}>
        {name}
      </StyledTag>
      <Button
        variation="danger"
        onClick={() => deleteBtId(submissionId)}
        disabled={isDeleting}
      >
        Delete
      </Button>
    </TableRow>
  );
}
export default SubmissionRow;
