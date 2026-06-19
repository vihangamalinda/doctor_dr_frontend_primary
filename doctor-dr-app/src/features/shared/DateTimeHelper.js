export const createLocalDateTime = () => {
  const now = new Date();

  const localDateTime = now.toISOString().slice(0, 19);
  return localDateTime;
};
