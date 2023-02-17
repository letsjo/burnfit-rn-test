import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { DAY_STRING } from '../../../constants/Calendar';

const Body = ({ dateList }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        {DAY_STRING.map((day) => (
          <View style={styles.dayBox}>
            <Text
              style={{ color: day.color, fontSize: 16 }}
              key={day.id}
            >
              {day.name}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.dayContainer}>
        {Object.keys(dateList).map((state) => {
          const year = dateList[state].year;
          const month = dateList[state].month;
          return dateList[state].days.map((day, index) => (
            <TouchableOpacity style={styles.dayBox}>
              <Text
                style={{
                  color: state === 'current' ? 'black' : 'gray',
                  fontSize: 16,
                }}
                key={index}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ));
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dayContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayBox: {
    width: '14.2%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
});

export default Body;
