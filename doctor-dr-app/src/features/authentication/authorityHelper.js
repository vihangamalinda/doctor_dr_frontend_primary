const getUserAuthorityMap = (authroity) => {
  const isAdmin = authroity?.includes("ADMIN");
  const isOperationalStaff = authroity?.includes("OPERATIONAL_STAFF");
  const isBasicUser = authroity?.includes("COMMON_USER");
  return {
    isAdmin,
    isOperationalStaff,
    isBasicUser,
  };
};

const readableNameForAuthority = (authority) => {
  switch (authority) {
    case "ADMIN":
      return "Administrator";
    case "OPERATIONAL_STAFF":
      return "Operational Staff";
    case "COMMON_USER":
      return "Common User";
    default:
      return "";
  }
};

export { getUserAuthorityMap, readableNameForAuthority };
