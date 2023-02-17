const getCalendarDate = ({ year, month }) => {
  const previousMonthLast = new Date(year, month - 1, 0);
  const previousLastDate = previousMonthLast.getDate();
  const previousLastDay = previousMonthLast.getDay();
  const currentMonthLast = new Date(year, month, 0);
  const currentLastDate = currentMonthLast.getDate();
  const currentLastDay = currentMonthLast.getDay();

  const previousDays = Array.from(
    { length: previousLastDay + 1 },
    (v, i) => previousLastDate - previousLastDay + i,
  );
  const currentDays = Array.from(
    { length: currentLastDate },
    (v, i) => i + 1,
  );
  const nextDays = Array.from(
    { length: 6 - currentLastDay },
    (v, i) => i + 1,
  );

  return {
    previous: {
      year: month === 1 ? year - 1 : year,
      month: month === 1 ? 12 : month - 1,
      days: previousLastDay !== 6 ? previousDays : [],
    },
    current: {
      year: year,
      month: month,
      days: currentDays,
    },
    next: {
      year: month === 12 ? year + 1 : year,
      month: month === 12 ? 1 : month + 1,
      days: nextDays,
    },
  };
};

export default getCalendarDate;
