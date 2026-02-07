import LabelGroupStyle from "../../ui/request-form-ui/LabelGroupStyle";
import LabelTextArea from "../../ui/request-form-ui/LabelTextArea";
import LabelPrimary from "../../ui/request-form-ui/LabelPrimary";
import styled from "styled-components";
import Row from "../../ui/secondary-ui/Row";

const SubLabel = styled.label`
  font-weight: 300;
`;

function DisplayFeedback({ feedback, contactName, contactNumber }) {
  return (
    <>
      <LabelGroupStyle>
        <LabelPrimary>Feedback </LabelPrimary>
        <LabelTextArea>{feedback}</LabelTextArea>
      </LabelGroupStyle>
      <LabelGroupStyle>
        <LabelPrimary>Contact Information</LabelPrimary>
        <Row type="horizontal-start">
          <SubLabel>Contact Name :</SubLabel>
          <SubLabel>{contactName}</SubLabel>
        </Row>
        <Row type="horizontal-start">
          <SubLabel>Contact Number :</SubLabel>
          <SubLabel>{contactNumber}</SubLabel>
        </Row>
      </LabelGroupStyle>
    </>
  );
}
export default DisplayFeedback;
