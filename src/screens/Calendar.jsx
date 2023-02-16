import { View, StyleSheet } from 'react-native';
import CalenderSection from '../components/CalendarSection';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <CalenderSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Calendar;
