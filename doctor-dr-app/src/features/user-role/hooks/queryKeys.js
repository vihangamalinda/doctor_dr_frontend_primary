const MAIN_KEY_LIST = ["user-role"];

const GET_ALL_USER_ROLES =[...MAIN_KEY_LIST,"getAll"];

const GET_BY_USER_ROLE_VALUE = (userRoleValue) => [
  ...MAIN_KEY_LIST,
  "byUserRoleValue",
  userRoleValue,
];

export {
    MAIN_KEY_LIST,
    GET_ALL_USER_ROLES,
    GET_BY_USER_ROLE_VALUE,
}