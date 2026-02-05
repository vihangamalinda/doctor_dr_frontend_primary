import styled from 'styled-components';

const TableRow = styled.div`
  display: grid;
  grid-template-columns:  2fr 1.3fr 1.5fr 1.7fr 1.7fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const PatientReferenceId = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const HasDisease = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const DiseaseStageName = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;
const deleteBtId = (id)=> console.log("submission id deleting darft."+id);
const diseaseFormatter =(hasDisease) => hasDisease?"Yes":"No";

function SubmissionRow({submissionData}){
    const {submissionId,patientReferenceId,createdDate,hasDisease,diseaseStage} = submissionData;
    const {name} =diseaseStage;
    const isDeleting =false;
    const diseaseContain =diseaseFormatter(hasDisease);
    console.log(patientReferenceId)
    return (
      <TableRow>
        <PatientReferenceId>{patientReferenceId}</PatientReferenceId>
        <div>{createdDate}</div>
        <HasDisease>{diseaseContain}</HasDisease>
        <DiseaseStageName>{name}</DiseaseStageName>
        <button onClick={() => deleteBtId(submissionId)} disabled={isDeleting}>
          Delete
        </button>
      </TableRow>
    );
}
export default SubmissionRow;