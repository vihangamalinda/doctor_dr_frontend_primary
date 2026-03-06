import styled from "styled-components";

import LabelTextArea from "../../ui/request-form-ui/LabelTextArea";
import LabelPrimary from "../../ui/request-form-ui/LabelPrimary";
import LabelGroupStyle from "../../ui/request-form-ui/LabelGroupStyle";
import Row from "../../ui/secondary-ui/Row";

const ReportedIssueCardStyle = styled.div`
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

const SubLabel = styled.label`
  font-weight: 300;
`;

function ReportedIssueCard({ reportedIssue }) {
  const { id, title, description, createdDateTime, status } = reportedIssue;
  return (
    <ReportedIssueCardStyle>
      <HeadingGrouping>
        <LabelTitlePrimary> Title: </LabelTitlePrimary>
        <LabelTitleSecondary>{title}</LabelTitleSecondary>
      </HeadingGrouping>
      <LabelGroupStyle>
        <LabelPrimary>Description</LabelPrimary>
        <LabelTextArea> {description}</LabelTextArea>
      </LabelGroupStyle>
      <LabelGroupStyle>
        <Row type="horizontal-start">
          <SubLabel>created at: </SubLabel>
          <SubLabel> {createdDateTime}</SubLabel>
        </Row>
        <Row type="horizontal-start">
          <SubLabel>status: </SubLabel>
          <SubLabel> {status && status.name}</SubLabel>
        </Row>
      </LabelGroupStyle>
    </ReportedIssueCardStyle>
  );
}

export default ReportedIssueCard;
