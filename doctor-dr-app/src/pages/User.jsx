import UserProfileInformation from "../features/user-profile/UserProfileInformation";
import HospitalInformation from "../features/hospital/HospitalInformation";
import Heading from "../ui/secondary-ui/Heading";
import { useQuery } from "@tanstack/react-query";
import {getUserProfileById} from "../services/apis/apiUserProfile.js"
import Spinner from "../ui/secondary-ui/Spinner.jsx";
import { useUserProfileById } from "../features/user-profile/hooks/useUserProfileById.js";

const user ={
    id:2,
    firstName: "Vihanga",
    lastName:"Fernando",
    createdDateTime:"2026-01-13",
    modifiedDateTime:"2026-01-26",
    location:{
    id:13,
    address:" 125/A Nugegoda Colombo 04",
    postalCode:"1130"
  }
}
const hospital ={
  id:4,
  name:"National hospital",
  emergencyNumber:"074 7890 234",
  location:{
    id:8,
    address:" 76-879 Maharagama Colombo 07",
    postalCode:"1067"
  }
}
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
