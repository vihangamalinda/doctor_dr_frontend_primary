const MAIN_KEY = "requested-helps";

const REQUESTED_HELPS_BY_STATUS_VALUE_KEY = (statusValue) => [
  MAIN_KEY,
  "byStatusValue",
  statusValue,
];

const REQUESTED_HELPS_BY_CREATED_USER_PROFILE_ID = (userProfileId) => [
  MAIN_KEY,
  "byCreatedUserProfileId",
  userProfileId,
];

export {
  MAIN_KEY,
  REQUESTED_HELPS_BY_CREATED_USER_PROFILE_ID,
  REQUESTED_HELPS_BY_STATUS_VALUE_KEY,
};
