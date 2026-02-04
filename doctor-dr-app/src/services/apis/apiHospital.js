import { HOSPITAL_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllHospital = async () => {
  return await getData(HOSPITAL_API_URLs.HOSPITAL_PERFORM_GET_ALL);
};

const getHospitalById = async (id) => {
  return await getData(HOSPITAL_API_URLs.HOSPITAL_PERFORM_GET_BY_ID(id));
};

const createHospital = async (hospitalObj) => {
  const data = {
    obj: hospitalObj,
    url: HOSPITAL_API_URLs.HOSPITAL_PERFORM_CREATE,
  };
  return await createData(data);
};

const deleteHospitalById = async (id) => {
  return await deleteData(HOSPITAL_API_URLs.HOSPITAL_PERFORM_DELETE_BY_ID(id));
};

export { getAllHospital, getHospitalById, createHospital, deleteHospitalById };
