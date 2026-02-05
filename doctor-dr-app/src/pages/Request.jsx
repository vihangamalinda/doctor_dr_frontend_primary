import CreateRquest from "../features/request-help/CreateRequest";
import RequestTable from "../features/request-help/RequestTable";
import Heading from "../ui/secondary-ui/Heading";
import Row
 from "../ui/secondary-ui/Row";
function Request(){
    return (
        <>
          <Heading as="h1">Request for help</Heading>
          <Row>
            <CreateRquest/>
          </Row>
          <Row>
            <RequestTable/>
          </Row>

        
        </>
      

    )
}
export default Request;