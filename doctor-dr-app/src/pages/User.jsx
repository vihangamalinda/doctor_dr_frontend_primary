import UserProfileInformation from "../features/user-profile/UserProfileInformation";
import HospitalInformation from "../features/hospital/HospitalInformation";
import Heading from "../ui/secondary-ui/Heading";

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

function User(){
    return (
      <>
        <Heading as="h1"> User details</Heading>
        <UserProfileInformation user={user} />
        <p> Hospital information </p>
        <HospitalInformation hospital={hospital}/>
      </>
    );
}

export default User;
