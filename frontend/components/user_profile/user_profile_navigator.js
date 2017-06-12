import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestListContainer';
import Settings from './settings';
import UserProfile from './user_profile_container';
import { StackNavigator } from 'react-navigation';
import UserSettings from './UserSettingsContainer';
import SubjectsIndex  from '../subjects/subjects_index';
import BillIndex  from '../bill_index/bill_index_container';
import BillIndexItem  from '../bill_index/bill_index_item';

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile },
  CustomizeInterests: {screen: CustomizeInterestList },
  UserSettings: {screen: UserSettings },
  SubjectsIndex: { screen: SubjectsIndex },
  BillIndex: { screen: BillIndex },
  BillIndexItem: { screen: BillIndexItem }
},{
  headerMode: 'none'
});

export default UserProfileNavigator;
