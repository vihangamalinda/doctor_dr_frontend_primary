const getUserAuthorityMap = (authroity) => {
  const isAdmin = authroity?.includes("ADMIN");
  const isOperationalStaff = authroity?.includes("OPERATIONAL_STAFF");
  const isBasicUser = authroity?.includes("BASIC_USER");
  return {
    isAdmin,
    isOperationalStaff,
    isBasicUser,
  };
};

export { getUserAuthorityMap };
