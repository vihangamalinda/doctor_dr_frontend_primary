import styled from "styled-components";


const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1.7fr;
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
  grid-template-columns: 2fr 1.7fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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
          <div>Class Probability</div>
        </TableHeader>
        <TableRow>
          <ClassNameStyled>{"class 01"}</ClassNameStyled>
          <div>{classProbability["class_01"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 02"}</ClassNameStyled>
          <div>{classProbability["class_02"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 03"}</ClassNameStyled>
          <div>{classProbability["class_03"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 04"}</ClassNameStyled>
          <div>{classProbability["class_04"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 05"}</ClassNameStyled>
          <div>{classProbability["class_05"]}</div>
        </TableRow>
        <TableRow>
          <ClassNameStyled>{"class 06"}</ClassNameStyled>
          <div>{classProbability["class_06"]}</div>
        </TableRow>
      </Table>
    </>
  );
}

export default SubmissionClassProbability;
