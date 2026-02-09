import UserProfileInformation from "../features/user-profile/UserProfileInformation";
import HospitalInformation from "../features/hospital/HospitalInformation";
import Heading from "../ui/secondary-ui/Heading";
import Spinner from "../ui/secondary-ui/Spinner.jsx";
import { useUserProfileById } from "../features/user-profile/hooks/useUserProfileById.js";

const userProfileId =6;

function User(){
  const {userProfileDataById,isUserProfileLoading} = useUserProfileById(userProfileId)
 
  if (isUserProfileLoading) return <Spinner />;

  return (
    <>
      <Heading as="h1"> User details</Heading>
      <UserProfileInformation user={userProfileDataById} />
      <p> Hospital information </p>
      <HospitalInformation hospital={userProfileDataById.hospital} />
    </>
  );
}

export default User;
