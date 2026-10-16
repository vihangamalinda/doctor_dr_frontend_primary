// import Label from "../../ui/secondary-ui/Label";
// import Row from "../../ui/secondary-ui/Row";
import LocationInformation from "../location/LocationInformation";
import { Label, Row } from "../../ui/index.js";

function UserProfileInformation({ user }) {
  const { firstName, lastName, createdDateTime, modifiedDateTime, location } =
    user;
  return (
    <Row type="vertical">
      <Row type="horizontal">
        <Row type="horizontal-center">
          <Label>First name :</Label>
          <Label>{firstName}</Label>
        </Row>
        <Row type="horizontal-start">
          <Label>Last name :</Label>
          <Label>{lastName}</Label>
        </Row>
      </Row>
      <Row type="horizontal">
        <Row type="horizontal-center">
          <Label>Created Date Time :</Label>
          <Label>{createdDateTime}</Label>
        </Row>
        <Row type="horizontal-center">
          <Label>Modified Date Time :</Label>
          <Label>{modifiedDateTime}</Label>
        </Row>
      </Row>
      <LocationInformation location={location} />
    </Row>
  );
}
export default UserProfileInformation;
