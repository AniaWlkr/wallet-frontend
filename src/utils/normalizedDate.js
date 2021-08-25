const normalizedDate = date => {
  const dateString = new Date(date);

  const currentDay = dateString.getDate();
  let day = currentDay;
  if (day < 10) day = `0${currentDay}`;

  const currentMonth = dateString.getMonth() + 1;
  let month = currentMonth;
  if (month < 10) month = `0${currentMonth}`;

  const year = dateString.getFullYear();

  const result = `${day}.${month}.${year}`;

  return result;
};
export { normalizedDate };
