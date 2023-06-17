export const getDate = (daysOffSet = 0): Date => {
  const date = new Date();
  date.setDate(date.getDate() - daysOffSet);
  return date;
};
