import { createLocalDateTime } from "../../shared/DateTimeHelper.js";

export const createData = (data, userRoleId) => {
  const currentDateTime = createLocalDateTime();

  const location = {
    locationIndex: data.locationIndex,
    road: data.road,
    city: data.city,
    country: data.country,
    postalCode: data.postalCode,
    isActive: true,
  };

  const hospital = {
    id: Number(data.hospitalId),
  };

  const userInternalSystemInformation = {
    userName: data.username,
    userRoleId: userRoleId,
  };

  return {
    firstName: data.firstName,
    lastName: data.lastName,
    createdDateTime: currentDateTime,
    email: data.email,
    modifiedDateTime: currentDateTime,
    location: location,
    hospital: hospital,
    userInternalSystemInformation: userInternalSystemInformation,
  };
};
