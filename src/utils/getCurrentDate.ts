export const getCurrentDate = () => {
  const currentDate = new Date();

  return currentDate.toISOString().slice(0, 10);
};