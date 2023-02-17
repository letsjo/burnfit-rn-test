import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { DAY_STRING } from '../../../constants/Calendar';

const Body = ({ selectDate, nowDate, dateList, onPressDate }) => {
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
          let key = 0;
          const year = dateList[state].year;
          const month = dateList[state].month;
          const color = state === 'current' ? 'black' : 'gray';
          return dateList[state].days.map((day) => {
            const fontWeight =
              nowDate.date === day &&
              nowDate.month === month &&
              nowDate.year === year
                ? '900'
                : 'normal';
            const seleced =
              selectDate.day === day &&
              selectDate.month === month &&
              selectDate.year === year
                ? true
                : false;
            return (
              <TouchableOpacity
                onPress={() => onPressDate({ year, month, day })}
                style={styles.dayBox}
                key={key++}
              >
                <View style={{ ...(seleced && styles.seleced) }}>
                  <Text
                    style={{
                      color,
                      fontWeight,
                      fontSize: 16,
                    }}
                  >
                    {day}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          });
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
  seleced: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#3CC6F4',
    borderRadius: 20,
  },
});

export default Body;
