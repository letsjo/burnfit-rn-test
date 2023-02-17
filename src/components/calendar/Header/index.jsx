import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import getMonthToString from '../../../utils/getMonthToString';
import Icon from '../../public/Icon';

const Header = ({ year, month }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name='chevron-back-sharp' color='#3CC6F4' />
      </TouchableOpacity>
      <View style={styles.context}>
        <Text>{getMonthToString(month)} </Text>
        <Text>{year}</Text>
      </View>
      <TouchableOpacity>
        <Icon name='chevron-forward-sharp' color='#3CC6F4' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
