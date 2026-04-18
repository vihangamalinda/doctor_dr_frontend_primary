import { useSelector } from "react-redux";
import { selectCurrentLoggedUserProfileId } from "../authentication/store/selectors/CurrentLoggedUserSelectors";
import { useUserProfileById } from "./hooks/useUserProfileById";
import UserProfileInformation from "./UserProfileInformation";
// import Spinner from "../../ui/secondary-ui/Spinner";
import HospitalInformation from "../hospital/HospitalInformation";
import {Spinner} from "../../ui/index.js";

function DisplayCurrentUserProfileInfromation() {
  const currentLoggedInUserProfileId = useSelector(
    selectCurrentLoggedUserProfileId,
  );
  const { userProfileDataById, isUserProfileLoading } = useUserProfileById(
    currentLoggedInUserProfileId,
  );

  if (isUserProfileLoading) return <Spinner />;

  return (
    <>
      <UserProfileInformation user={userProfileDataById} />
      <p> Hospital information </p>
      <HospitalInformation hospital={userProfileDataById.hospital} />
    </>
  );
}
export default DisplayCurrentUserProfileInfromation;
