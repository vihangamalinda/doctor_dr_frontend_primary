import styled from 'styled-components';
import Label from "../../ui/secondary-ui/Label";
import Row from "../../ui/secondary-ui/Row";

const RequestCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width:900px;
  border-radius:20px;
  padding:20px;
  background-color:var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-400);
  color: var(--color-grey-600);
    
   
`
const LabelGroupStyle =styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding:10px 20px;
  border:1px solid var(--color-grey-300);
  border-radius:20px;
  background-color:var(--color-grey-100);
`
const LabelPrimary =styled.label`
  font-weight: 700;
`
const LabelTextArea =styled.label`
  font-weight:100;
  overflow-wrap: break-word;
`
const HeadingGrouping=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  font-weight:700;
  border-bottom: 2px solid var(--color-grey-400);
`
const LabelTitlePrimary =styled.label`
  font-weight:900;
  overflow-wrap: break-word;
`
const LabelTitleSecondary =styled.label`
  font-weight:900;
  overflow-wrap: break-word;
`
const SubLabel =styled.label`
 font-weight:300;
`;

function RequestCard({ request }) {
  const {title, description, feedback, contactInfor } = request;
  const { contactNumber, name } = contactInfor;
  return (

    <RequestCardStyle >
      <HeadingGrouping>
        <LabelTitlePrimary>Title :</LabelTitlePrimary>
        <LabelTitleSecondary>{title}</LabelTitleSecondary>
      </HeadingGrouping>
      <LabelGroupStyle>
        <LabelPrimary>Description</LabelPrimary>
        <LabelTextArea>{description}</LabelTextArea>
      </LabelGroupStyle>
      <LabelGroupStyle>
        <LabelPrimary>Feedback </LabelPrimary>
        <LabelTextArea>{feedback}</LabelTextArea>
      </LabelGroupStyle>
      <LabelGroupStyle>
        <LabelPrimary>Contact Information</LabelPrimary>
        <Row type="horizontal-start">
          <SubLabel>Contact Name :</SubLabel>
          <SubLabel>{name}</SubLabel>
        </Row>
        <Row type="horizontal-start">
          <SubLabel>Contact Number :</SubLabel>
          <SubLabel>{contactNumber}</SubLabel>
        </Row>
      </LabelGroupStyle>
    </RequestCardStyle>
    // </Row>
  );
}
export default RequestCard;