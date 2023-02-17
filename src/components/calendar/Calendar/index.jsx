import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../Header';
import Body from '../Body';
import getNowDate from '../../../utils/getNowDate';
import getCalendarDate from '../../../utils/getCalendarDate';

const Calendar = () => {
  const nowDate = getNowDate();

  const [year, setYear] = useState(nowDate.year);
  const [month, setMonth] = useState(nowDate.month);
  const [date, setDate] = useState(nowDate.date);
  const [dateList, setDateList] = useState(
    getCalendarDate({ year, month }),
  );

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const onPressDate = (selectDate) => {
    if (year !== selectDate.year) setYear(selectDate.year);
    if (month !== selectDate.month) setMonth(selectDate.month);
    setDate(selectDate.date);
  };

  useEffect(() => {
    setDateList(getCalendarDate({ year, month }));
  }, [year, month]);

  return (
    <View style={styles.container}>
      <Header
        year={year}
        month={month}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <Body
        date={date}
        dateList={dateList}
        onPressDate={onPressDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Calendar;
