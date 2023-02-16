import { Ionicons } from '@expo/vector-icons';

const GetIcon = ({ name, size = 24, color = 'black' }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default GetIcon;
