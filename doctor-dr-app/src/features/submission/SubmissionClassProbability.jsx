import styled from "styled-components";


const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  padding-left: 1.6rem;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const DISEASE_STAGE_MAP = {
  0: "Healthy",
  1: "Disease-stage 01",
  2: "Disease-stage 02",
  3: "Disease-stage 03",
  4: "Disease-stage 04",
  5: "Disease-stage 05",
}

const ClassNameStyled = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

function SubmissionClassProbability({ classProbability }) {
  return (
    <>
   
      <Table>
        <TableHeader>
          <div>Class Name</div>
          <div>Disease Stage</div>
          <div>Class Probability</div>
        </TableHeader>
        <TableRow>
          <ClassNameStyled>{"class 01"}</ClassNameStyled>
          <div>{DISEASE_STAGE_MAP[0]}</div>
          <div>{classProbability["class_01"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 02"}</ClassNameStyled>
          <div>{DISEASE_STAGE_MAP[1]}</div>
          <div>{classProbability["class_02"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 03"}</ClassNameStyled>
          <div>{DISEASE_STAGE_MAP[2]}</div>
          <div>{classProbability["class_03"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 04"}</ClassNameStyled>
          <div>{DISEASE_STAGE_MAP[3]}</div>
          <div>{classProbability["class_04"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 05"}</ClassNameStyled>
          <div>{DISEASE_STAGE_MAP[4]}</div>
          <div>{classProbability["class_05"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 06"}</ClassNameStyled>
          <div>{DISEASE_STAGE_MAP[5]}</div>
          <div>{classProbability["class_06"]}</div>
        </TableRow>
      </Table>
    </>
  );
}

export default SubmissionClassProbability;
