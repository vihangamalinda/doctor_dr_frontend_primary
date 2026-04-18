import styled from "styled-components";
// import LabelTextArea from "../../ui/request-form-ui/LabelTextArea";
// import LabelPrimary from "../../ui/request-form-ui/LabelPrimary";
// import LabelGroupStyle from "../../ui/request-form-ui/LabelGroupStyle";
import {
  LabelTextArea,
  LabelPrimary,
  LabelGroupStyle,
} from "../../ui/index.js";

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

function RequestedHelpInformation({ title, description, status }) {
  const { name: statusName, value: statusValue } = status;
  return (
    <>
      <HeadingGrouping>
        <LabelTitlePrimary>Title :</LabelTitlePrimary>
        <LabelTitleSecondary>{title}</LabelTitleSecondary>
      </HeadingGrouping>
      <LabelGroupStyle>
        <LabelPrimary>Description</LabelPrimary>
        <LabelTextArea>{description}</LabelTextArea>
      </LabelGroupStyle>
      <LabelGroupStyle>
        <LabelPrimary>Status</LabelPrimary>
        <LabelTextArea>{statusName}</LabelTextArea>
      </LabelGroupStyle>
    </>
  );
}

export default RequestedHelpInformation;
