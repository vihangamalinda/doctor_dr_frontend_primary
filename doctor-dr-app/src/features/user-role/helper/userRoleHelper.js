import { useUserRoleByUserRoleValue } from "../hooks/index.js";

const ROLE_CONSTANTS = {
  admin: "ADMIN",
  operationalStaff: "OPERATIONAL_STAFF",
  commonUser: "COMMON_USER",
};

const useAdminRole = () => {
  const { userRoleByUserRoleValue, isUserRoleLoading, error } =
    useUserRoleByUserRoleValue(ROLE_CONSTANTS.admin);
  return {
    userRoleByUserRoleValue,
    isUserRoleLoading,
    error,
  };
};

const useOperationalStaffRole = () => {
  const { userRoleByUserRoleValue, isUserRoleLoading, error } =
    useUserRoleByUserRoleValue(ROLE_CONSTANTS.operationalStaff);
  return {
    userRoleByUserRoleValue,
    isUserRoleLoading,
    error,
  };
};

const useCommonUserRole = () => {
  const { userRoleByUserRoleValue, isUserRoleLoading, error } =
    useUserRoleByUserRoleValue(ROLE_CONSTANTS.commonUser);
  return {
    userRoleByUserRoleValue,
    isUserRoleLoading,
    error,
  };
};

export {
  ROLE_CONSTANTS,
  useAdminRole,
  useOperationalStaffRole,
  useCommonUserRole,
};
