const MAIN_KEY = ["user-profile"];

const GET_ALL_USER_PROFILES = [...MAIN_KEY, "getAll"];

const GET_USER_PROFILES_BY_ID = (userProfileId) => [
  ...MAIN_KEY,
  "byUserProfileId",
  userProfileId,
];

const GET_USER_PROFILES_BY_USER_ROLE_VALUE = (userRoleValue) => [
  ...MAIN_KEY,
  "getAllbyUserRoleValue",
  userRoleValue,
];

export {
  MAIN_KEY,
  GET_ALL_USER_PROFILES,
  GET_USER_PROFILES_BY_ID,
  GET_USER_PROFILES_BY_USER_ROLE_VALUE,
};
