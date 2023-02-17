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
            <Text style={{ color: day.color }} key={day.id}>
              {day.name}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.dateContainer}>
        {Object.keys(dateList).map((state) => {
          const year = dateList[state].year;
          const month = dateList[state].month;
          const color = state === 'current' ? '#222' : '#c8cccf';
          return dateList[state].days.map((date) => {
            const fontWeight =
              nowDate.date === date &&
              nowDate.month === month &&
              nowDate.year === year
                ? '900'
                : 'normal';
            const selected =
              selectDate.date === date &&
              selectDate.month === month &&
              selectDate.year === year
                ? true
                : false;
            return (
              <TouchableOpacity
                onPress={() => onPressDate({ year, month, date })}
                style={styles.dateBox}
                key={`${year}${month}${date}`}
              >
                <View style={{ ...(selected && styles.selected) }}>
                  <Text
                    style={{
                      color,
                      fontWeight,
                    }}
                  >
                    {date}
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
    marginVertical: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateBox: {
    width: '14.2%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  selected: {
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
