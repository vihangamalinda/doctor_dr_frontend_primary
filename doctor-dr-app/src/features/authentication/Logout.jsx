import {Row, Heading} from "../../ui/index.js";
import {LogoutMiniButton} from "./index.js";

function Logout() {
    return (
        <Row type="horizontal-space-around" >
        <Row type="horizontal-center">
            <Heading as="h3">Colour Selections</Heading>
        </Row>
        <Row type="horizontal-end">
            <LogoutMiniButton /> 
        </Row>   
        </Row>
    )
}

export default Logout;