import { MONTH_STRING } from '../constants/Calendar';

const getMonthToString = (month) => {
  return MONTH_STRING[month - 1];
};

export default getMonthToString;
