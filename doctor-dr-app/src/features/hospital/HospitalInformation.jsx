// import Label from "../../ui/secondary-ui/Label";
// import Row from "../../ui/secondary-ui/Row";
import LocationInformation from "../location/LocationInformation";
import {Label,Row} from "../../ui/index.js";

function HospitalInformation({ hospital }) {
  const { id, name, emergencyNumber, location } = hospital;
  // const {address,postalCode} =location;

  return (
    <Row type="vertical">
      <Row type="vertical">
        <Row type="horizontal-start">
          <Label>Name : </Label>
          <Label>{name}</Label>
        </Row>
        <Row type="horizontal-start">
          <Label>Emergency Number : </Label>
          <Label>{emergencyNumber}</Label>
        </Row>
        <LocationInformation location={location} />
      </Row>
    </Row>
  );
}
export default HospitalInformation;
