import Header from '../Header';
import Body from '../Body';
import { StyleSheet, View } from 'react-native';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Header />
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
