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

// const getRequestHelpByUserProfileId = async (id) => {
//   return await getData(
//     REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_USER_PROFILE_BY_ID(id),
//   );

// };

const getRequestedHelpsByCreatedUserProfileId = async (id) => {
  return await getData(
    REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_CREATED_BY_USER_PROFILE_ID(id),
  );
};

const getRequestedHelpsByStatusValue = async (statusValue) => {
  return await getData(
    REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_GET_BY_STATUS_VALUE(statusValue),
  );
};

const addFeedbackByRequestedHelpId = async ({ id, feedbackInfor }) => {
  console.log(id, feedbackInfor);
  debugger;
  const data = {
    url: REQUEST_HELP_API_URLs.REQUEST_HELP_PERFORM_ADD_FEEDBACK(id),
    obj: feedbackInfor,
  };
  return await updateData(data);
};

export {
  getAllRequestHelp,
  getRequestHelpById,
  createRequestHelp,
  deleteRequestHelpById,
  getRequestedHelpsByCreatedUserProfileId,
  getRequestedHelpsByStatusValue,
  addFeedbackByRequestedHelpId,
};
