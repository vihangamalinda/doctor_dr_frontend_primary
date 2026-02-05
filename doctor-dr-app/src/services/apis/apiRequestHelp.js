import { REQUEST_HELP_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllRequestHelp = async () => {
  return await getData(REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_GET_ALL);
};

const getRequestHelpById = async (id) => {
  return await getData(
    REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_GET_BY_ID(id),
  );
};

const createRequestHelp = async (requestHelpObj) => {
  const data = {
    obj: requestHelpObj,
    url: REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_CREATE,
  };
  return await createData(data);
};
const deleteRequestHelpById = async (id) => {
  return await deleteData(
    REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_DELETE_BY_ID(id),
  );
};
const getRequestHelpByUserProfileId = async (id) => {
  return await getData(
    REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_USER_PROFILE_BY_ID(id),
  );
};

export {
  getAllRequestHelp,
  getRequestHelpById,
  createRequestHelp,
  deleteRequestHelpById,
  getRequestHelpByUserProfileId,
};
