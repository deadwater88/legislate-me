import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestListContainerrr';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';
import UserSettings from './UserSettingsContainer';

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile },
  CustomizeInterests: {screen: CustomizeInterestList },
  UserSettings: {screen: UserSettings }
});

export default UserProfileNavigator;
