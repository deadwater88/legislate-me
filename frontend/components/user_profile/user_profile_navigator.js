import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestList';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';

const UserProfileNavigator = StackNavigator({
  Settings: { screen: Settings },
  CustomizeInterests: {screen: CustomizeInterestList },
  UserProfile: { screen: UserProfile,
    navigationOptions: {
      title: "You"
    }
   }
});

export default UserProfileNavigator;
