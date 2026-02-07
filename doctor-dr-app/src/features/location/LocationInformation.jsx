import Label from "../../ui/secondary-ui/Label";
import Row from "../../ui/secondary-ui/Row";

const getAddress = (location)=>{
    const {locationIndex,road,city,country} =location;
    return `${locationIndex}/${road}/${city}/${country}`;
}
function LocationInformation({location}){

    return (
        <Row type="vertical">
            <Row type="horizontal-start">
                <Label>Address : </Label>
                 <Label>{getAddress(location)}</Label>
            </Row>
            <Row type="horizontal-start">
                <Label>Postal Code : </Label>
                 <Label>{location.postalCode}</Label>
            </Row>
        </Row>
    )
}
export default LocationInformation;