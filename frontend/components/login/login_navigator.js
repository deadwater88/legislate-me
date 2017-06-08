import { StackNavigator } from 'react-navigation';
import SubmitAddress from './submit_address/submit_address_container';
// import BillIndex from '../bill_index/bill_index';
import SubmitAddres from './submit_address/submit_address_container';
import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestListContainer';
import LoginForm from './LoginFormContainer';
import Router from '../common/navbar/router';

const LoginNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  SubmitAddress: {screen: SubmitAddress},
  CustomizeInterestList: { screen: CustomizeInterestList},
  Router: {screen: Home, navigationOptions:{
    left: null
  }}
});

export default LoginNavigator;
