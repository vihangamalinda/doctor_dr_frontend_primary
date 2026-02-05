import { STATUS_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllStatus = async () => {
  return await getData(STATUS_API_URLs.STATUS_PERFORM_GET_ALL);
};

const getStatusById = async (id) => {
  return await getData(STATUS_API_URLs.STATUS_PERFORM_GET_BY_ID(id));
};

const createStatus = async (statusObj) => {
  const data = {
    obj: statusObj,
    url: STATUS_API_URLs.STATUS_PERFORM_CREATE,
  };
  return await createData(data);
};

const deleteStatusById = async (id) => {
  return await deleteData(STATUS_API_URLs.STATUS_PERFORM_DELETE_BY_ID(id));
};

export { getAllStatus, getStatusById, createStatus, deleteStatusById };
