const MAIN_KEY = ["user-profile"];

const GET_ALL_USER_PROFILES = [...MAIN_KEY, "getAll"];

const GET_USER_PROFILES_BY_ID = (userProfileId) => [
  ...MAIN_KEY,
  "byUserProfileId",
  userProfileId,
];

export { MAIN_KEY, GET_ALL_USER_PROFILES, GET_USER_PROFILES_BY_ID };
