import CustomizeInterestListContainer from '../CustomizeInterestList/CustomizeInterestListContainer';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';
import UserSettings from './UserSettings';

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile,
    navigationOptions: {
      title: "You",
    }
  },
  CustomizeInterests: {screen: CustomizeInterestListContainer },
  UserSettings: {screen: UserSettings }
});

export default UserProfileNavigator;
