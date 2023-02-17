import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../Header';
import Body from '../Body';
import getNowDate from '../../../utils/getNowDate';

const Calendar = () => {
  const nowDate = getNowDate();

  const [year, setYear] = useState(nowDate.year);
  const [month, setMonth] = useState(nowDate.month);
  const [date, setDate] = useState(nowDate.date);

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

  return (
    <View style={styles.container}>
      <Header
        year={year}
        month={month}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Calendar;
