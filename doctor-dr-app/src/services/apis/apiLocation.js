import { LOCATION_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllLocation = async () => {
  return await getData(LOCATION_API_URLs.LOCATION_PERFORM_GET_ALL);
};

const getLocationById = async (id) => {
  return await getData(LOCATION_API_URLs.LOCATION_PERFORM_GET_BY_ID(id));
};

const createLocation = async (locationObj) => {
  const data = {
    obj: locationObj,
    url: LOCATION_API_URLs.LOCATION_PERFORM_CREATE,
  };
  return await createData(data);
};

const deleteLocationById = async (id) => {
  return await deleteData(LOCATION_API_URLs.LOCATION_PERFORM_DELETE_BY_ID(id));
};

export { getAllLocation, getLocationById, createLocation, deleteLocationById };
