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
  const [selectDate, setSelectDate] = useState({ ...nowDate });
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

  const onPressDate = (pressDate) => {
    setSelectDate({ ...pressDate });
    setYear(pressDate.year);
    setMonth(pressDate.month);
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
        selectDate={selectDate}
        nowDate={nowDate}
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
