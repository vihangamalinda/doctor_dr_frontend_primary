import { USER_ROLES_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllUserRoles = async () => {
  return await getData(USER_ROLES_API_URLs.USER_ROLES_PERFORM_GET_ALL);
};

const getUserRoleByUserRoleValue = async (userRoleValue) => {
  return await getData(
    USER_ROLES_API_URLs.USER_ROLES_PERFORM_GET_BY_USER_ROLE_VALUE(
      userRoleValue,
    ),
  );
};

export { getAllUserRoles, getUserRoleByUserRoleValue };
