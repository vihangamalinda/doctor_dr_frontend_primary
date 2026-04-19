import { useNavigate } from "react-router-dom";
import {Row,Button} from "../../ui/index.js";
import { useSelector } from "react-redux";
import {selectCurrentLoggedUserProfileId} from "../authentication/store/selectors/CurrentLoggedUserSelectors.js";

function UpdatePasswordButton() {
      const navigate = useNavigate();
      const userProfileId = useSelector(selectCurrentLoggedUserProfileId);
      const openUpdatePasswordForm =()=>{
        const url = `/user/update-password/${userProfileId}`;
        navigate(url);
      }
    return (
        <Row type="horizontal-center">
            <Button size="large" variation="primary" onClick={openUpdatePasswordForm}>
                Update Password
            </Button>
        </Row>
    );
}

export default UpdatePasswordButton;