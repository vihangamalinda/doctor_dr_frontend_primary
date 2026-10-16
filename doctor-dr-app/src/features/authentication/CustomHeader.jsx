
import LogoutMiniButton from "./LogoutMiniButton.jsx";
import {Row} from "../../ui/index.js";
import { useSelector } from "react-redux";
import { selectCurrentLoggedUserProfileAuthorities } from "./store/selectors/CurrentLoggedUserSelectors.js";
import { readableNameForAuthority } from "./AuthorityHelper.js";


function CustomHeader() {
   const authorities = useSelector(selectCurrentLoggedUserProfileAuthorities); 
   const readerableAuthority = readableNameForAuthority(authorities[0]);
  return (
    <Row type="horizontal-space-around">
        <Row>{readerableAuthority}</Row>
      <LogoutMiniButton />
    </Row>
  );
}

export default CustomHeader;