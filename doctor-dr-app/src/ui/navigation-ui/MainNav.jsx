import AdminNavigationBar from "./AdminNavigationBar.jsx";
import { useSelector } from "react-redux";
import { selectCurrentLoggedUserProfileAuthorities } from "../../features/authentication/store/selectors/CurrentLoggedUserSelectors.js";
import { getUserAuthorityMap } from "../../features/authentication/AuthorityHelper.js";
import OperationalStafffNavigationBar from "./OperationalStaffNavigationBar.jsx";
import BasicUserNavigationBar from "./BasicUserNavigationBar.jsx";

function MainNav() {
  const authorities = useSelector(selectCurrentLoggedUserProfileAuthorities);
  console.log("authorities", authorities);

  const authorityMap = getUserAuthorityMap(authorities);
  if (authorityMap?.isAdmin) {
    return <AdminNavigationBar />;
  } else if (authorityMap?.isOperationalStaff) {
    <OperationalStafffNavigationBar />;
  } else {
    <BasicUserNavigationBar />;
  }
}
export default MainNav;
