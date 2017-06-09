import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestList';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';
import UserSettings from './UserSettingsContainer';

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile,
    navigationOptions: {
      title: "You",
    }
  },
  CustomizeInterests: {screen: CustomizeInterestList },
  UserSettings: {screen: UserSettings }
});

export default UserProfileNavigator;
