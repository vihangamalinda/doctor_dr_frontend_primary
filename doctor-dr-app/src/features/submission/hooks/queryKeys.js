const MAIN_KEY_LIST = ["submissions"];

const SUBMISSION_BY_USER_PROFILE_ID = (userProfileId) => [
  ...MAIN_KEY_LIST,
  "byUserProfileID",
  userProfileId,
];

export { MAIN_KEY_LIST, SUBMISSION_BY_USER_PROFILE_ID };
