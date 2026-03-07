// this page is belongs to Admin of the system
import Heading from '../ui/secondary-ui/Heading';
import Row from '../ui/secondary-ui/Row';
import CreateOperationalStaffUserProfile from "../features/user-profile/creationalForms/CreateOperationalStaffUserProfile";

function AddOperationalStaff(){
    return (
        
        <Row type="vertical">
             <Heading as="h1">Add Operational Staff</Heading>
              <CreateOperationalStaffUserProfile/>
        </Row>
       )

}
export default AddOperationalStaff;