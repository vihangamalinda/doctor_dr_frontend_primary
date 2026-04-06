import styled from "styled-components";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  padding-left: 1.6rem;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

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

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 2fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function SubmissionComparisionViewer({originalImage, overlayImage  }) {

    return (
        <Table>
            <TableHeader>
                <div>Original Input</div>
                <div>Model Prediction Overlay</div>
            </TableHeader>
            <TableRow>
                <img src={`data:image/png;base64,${originalImage}`} alt="original input" />
                <img src={`data:image/png;base64,${overlayImage}`} alt="model prediction overlay" />
            </TableRow>
        </Table>

    )

}

export default SubmissionComparisionViewer;