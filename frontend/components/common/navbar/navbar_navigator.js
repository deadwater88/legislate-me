import { StackNavigator } from 'react-navigation';
import BillIndex from '../bill_index/bill_index';
import UserProfileNavigator from '../user_profile/user_profile_navigator';

const NavbarNavigator = StackNavigator({
  BillIndex: {screen: BillIndex, navigationOptions:{
    left: null
  }},
  UserProfile: {screen: UserProfileNavigator},
  CustomizeInterestList: { screen: CustomizeInterestList}
});

export default NavbarNavigator;
