import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Library from '../screens/Library';
import MyPage from '../screens/MyPage';

export const BottomTabData = [
  {
    id: 1,
    name: 'HOME',
    component: Home,
    activeIcon: 'home-sharp',
    inActiveIcon: 'home-outline',
  },
  {
    id: 2,
    name: 'CALENDAR',
    component: Calendar,
    activeIcon: 'calendar',
    inActiveIcon: 'calendar-outline',
  },
  {
    id: 3,
    name: 'LIBRARY',
    component: Library,
    activeIcon: 'barbell-sharp',
    inActiveIcon: 'barbell-sharp',
  },
  {
    id: 4,
    name: 'MY PAGE',
    component: MyPage,
    activeIcon: 'person-sharp',
    inActiveIcon: 'person-outline',
  },
];