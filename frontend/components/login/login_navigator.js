import { StackNavigator } from 'react-navigation';
import SubmitAddress from './submit_address/submit_address_container';
import BillIndex from '../bill_index/bill_index';
import SubmitAddres from './submit_address/submit_address_container';
import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestListContainer';
import LoginForm from './LoginFormContainer';

const LoginNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  SubmitAddress: {screen: SubmitAddress},
  CustomizeInterestList: { screen: CustomizeInterestList},
  BillIndex: {screen: BillIndex}
});

export default LoginNavigator;
