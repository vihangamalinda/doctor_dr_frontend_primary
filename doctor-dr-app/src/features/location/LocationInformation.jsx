import Label from "../../ui/secondary-ui/Label";
import Row from "../../ui/secondary-ui/Row";

function LocationInformation({location}){
        const {address,postalCode} =location;

    return (
        <Row type="vertical">
            <Row type="horizontal-start">
                <Label>Address : </Label>
                 <Label>{address}</Label>
            </Row>
            <Row type="horizontal-start">
                <Label>Postal Code : </Label>
                 <Label>{postalCode}</Label>
            </Row>
        </Row>
    )
}
export default LocationInformation;