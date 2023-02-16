import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabData } from '../data/BottomTabData';
import GetIcon from '../utils/GetIcon';
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
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {BottomTabData &&
        BottomTabData.map((menu) => {
          return (
            <Tab.Screen
              key={menu.id}
              name={menu.name}
              component={menu.component}
              options={{
                tabBarShowLabel: menu.name,
                tabBarIcon: (props) =>
                  GetIcon({
                    ...props,
                    name: props.focused ? menu.activeIcon : menu.inActiveIcon,
                  }),
              }}
            />
          );
        })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
