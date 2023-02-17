import { View, StyleSheet } from 'react-native';
import Calender from '../components/calendar/Calendar';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Calender />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
});

export default Calendar;
