import { REPORT_ISSUE_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllReportIssues = async () => {
  return await getData(REPORT_ISSUE_API_URLs.REPORT_ISSUE_PERFORM_GET_ALL);
};

const getReportIssueById = async (id) => {
  return await getData(
    REPORT_ISSUE_API_URLs.REPORT_ISSUE_PERFORM_GET_BY_ID(id),
  );
};

const createReportIssue = async (reportIssueObj) => {
  const data = {
    obj: reportIssueObj,
    url: REPORT_ISSUE_API_URLs.REPORT_ISSUE_PERFORM_CREATE,
  };
  return await createData(data);
};

const deleteReportIssue = async (id) => {
  return await deleteData(
    REPORT_ISSUE_API_URLs.REPORT_ISSUE_PERFORM_DELETE_BY_ID(id),
  );
};

const getReportIssuesByUserProfileId = async (id) => {
  return await getData(
    REPORT_ISSUE_API_URLs.REPORT_ISSUE_PERFORM_USER_PROFILE_BY_ID(id),
  );
};

export {
  getAllReportIssues,
  getReportIssueById,
  createReportIssue,
  deleteReportIssue,
  getReportIssuesByUserProfileId,
};
