import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPage from '../screens/MyPage';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Library from '../screens/Library';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='HOME'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='HOME' component={Home} />
      <Tab.Screen name='CALENDAR' component={Calendar} />
      <Tab.Screen name='LIBRARY' component={Library} />
      <Tab.Screen name='MY PAGE' component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
