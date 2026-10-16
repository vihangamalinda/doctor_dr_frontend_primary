const MAIN_KEY_LIST = ["requested-helps"];

const REQUESTED_HELPS_BY_STATUS_VALUE_KEY = (statusValue) => [
  ...MAIN_KEY_LIST,
  "byStatusValue",
  statusValue,
];

const REQUESTED_HELPS_BY_CREATED_USER_PROFILE_ID = (userProfileId) => [
  ...MAIN_KEY_LIST,
  "byCreatedUserProfileId",
  userProfileId,
];

const REQUESTED_HELP_BY_ID = (requestedHelpId) => [
  ...MAIN_KEY_LIST,
  "byId",
  requestedHelpId,
];

export {
  MAIN_KEY_LIST,
  REQUESTED_HELPS_BY_CREATED_USER_PROFILE_ID,
  REQUESTED_HELPS_BY_STATUS_VALUE_KEY,
  REQUESTED_HELP_BY_ID,
};
