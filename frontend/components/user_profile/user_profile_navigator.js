import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestList';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile,
    navigationOptions: {
      title: "You",
    }
  },
  CustomizeInterests: {screen: CustomizeInterestList }
});

export default UserProfileNavigator;