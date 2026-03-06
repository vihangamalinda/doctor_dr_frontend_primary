import styled from "styled-components";
import LabelGroupStyle from "../../ui/request-form-ui/LabelGroupStyle";
import Row from "../../ui/secondary-ui/Row";
import LabelPrimary from "../../ui/request-form-ui/LabelPrimary";
import Button from "../../ui/secondary-ui/Button";

const UserProfileCardStyle = styled.div`
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
const SubLabel = styled.label`
  font-weight: 300;
`;

function UserProfileCard({ userProfile }) {
  const { firstName, lastName, createdDateTime, modifiedDateTime, hospital } =
    userProfile;
  const { name: hospitalName, emergencyNumber } = hospital;
  return (
    <UserProfileCardStyle>
      <HeadingGrouping>
        <LabelTitlePrimary>
          {firstName} {lastName}
        </LabelTitlePrimary>
      </HeadingGrouping>
      <LabelGroupStyle>
        <Row type="horizontal-start">
          <SubLabel>Created at: </SubLabel>
          <SubLabel> {createdDateTime}</SubLabel>
        </Row>
        <Row type="horizontal-start">
          <SubLabel>Modified at: </SubLabel>
          <SubLabel> {modifiedDateTime}</SubLabel>
        </Row>
      </LabelGroupStyle>
      <LabelGroupStyle>
        <LabelPrimary>Hospital Information</LabelPrimary>
        <Row type="horizontal-start">
          <SubLabel>Hospital : </SubLabel>
          <SubLabel> {hospitalName}</SubLabel>
        </Row>
        <Row type="horizontal-start">
          <SubLabel>Hospital : </SubLabel>
          <SubLabel> {emergencyNumber}</SubLabel>
        </Row>
      </LabelGroupStyle>
      <Row type="horizontal-end">
        <Button size="medium" variation="danger">
          Delete
        </Button>
      </Row>
    </UserProfileCardStyle>
  );
}
export default UserProfileCard;
