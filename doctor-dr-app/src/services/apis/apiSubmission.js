import { SUBMISSION_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData,createMultiPartFormData } from "../apiHelper.js";

const getAllSubmissions = async () => {
  return await getData(SUBMISSION_API_URLs.SUBMISSION_PERFORM_GET_ALL);
};

const getSubmissionById = async (id) => {
  return await getData(SUBMISSION_API_URLs.SUBMISSION_PERFORM_GET_BY_ID(id));
};

const createSubmission = async (submissionObj) => {
  const data = {
    obj: submissionObj,
    url: SUBMISSION_API_URLs.SUBMISSION_PERFORM_CREATE,
  };
  return await createMultiPartFormData(data);
};

const deleteSubmissionById = async (id) => {
  return await deleteData(
    SUBMISSION_API_URLs.SUBMISSION_PERFORM_DELETE_BY_ID(id),
  );
};

const getAllSubmissionsByUserProfileId = async (id) => {
  return await getData(
    SUBMISSION_API_URLs.SUBMISSION_PERFORM_GET_ALL_BY_USER_PROFILE_ID(id),
  );
};

const getAllSubmissionsByDiseaseStageId = async (id) => {
  return await getData(
    SUBMISSION_API_URLs.SUBMISSION_PERFORM_GET_ALL_BY_DISEASE_STAGE_ID(id),
  );
};

export {
  getAllSubmissions,
  getSubmissionById,
  createSubmission,
  deleteSubmissionById,
  getAllSubmissionsByUserProfileId,
  getAllSubmissionsByDiseaseStageId,
};
