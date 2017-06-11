import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestListContainer';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';
import UserSettings from './UserSettingsContainer';
import SubjectsIndex  from '../subjects/subjects_index';
import BillIndex  from '../bill_index/bill_index_container';

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile },
  CustomizeInterests: {screen: CustomizeInterestList },
  UserSettings: {screen: UserSettings },
  SubjectsIndex: { screen: SubjectsIndex },
  BillIndex: { screen: BillIndex }
});

export default UserProfileNavigator;
