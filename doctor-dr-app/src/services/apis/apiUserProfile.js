import { USER_PROFILE_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllUserProfile = async () => {
  return await getData(USER_PROFILE_API_URLs.USER_PROFILE_PERFORM_GET_ALL);
};

const getUserProfileById = async (id) => {
  return await getData(
    USER_PROFILE_API_URLs.USER_PROFILE_PERFORM_GET_BY_ID(id),
  );
};

const getAllUserProfilesByUserRoleValue = async (userRoleValue) => {
  return await getData(
    USER_PROFILE_API_URLs.USER_PROFILE_PERFORM_GET_ALL_BY_USER_ROLE_VALUE(
      userRoleValue,
    ),
  );
};

const createUserProfile = async (userProfileObj) => {
  const data = {
    obj: userProfileObj,
    url: USER_PROFILE_API_URLs.USER_PROFILE_PERFORM_CREATE,
  };
  return await createData(data);
};

const deleteUserProfileById = async (id) => {
  return await deleteData(
    USER_PROFILE_API_URLs.USER_PROFILE_PERFORM_DELETE_BY_ID(id),
  );
};
const updatePassword = async(dataObj)=>{
  const data ={
    obj:dataObj,
    url:USER_PROFILE_API_URLs.USER_PROFILE_PERFORM_UPDATE_PASSWORD,
  }
  return await createData(data);
}

export {
  getAllUserProfile,
  getUserProfileById,
  createUserProfile,
  deleteUserProfileById,
  getAllUserProfilesByUserRoleValue,
  updatePassword,
};
