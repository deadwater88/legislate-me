import { StackNavigator } from 'react-navigation';
import SubmitAddress from './submit_address/submit_address_container';
import BillIndex from '../bill_index/bill_index';
import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestListContainer';
import LoginForm from './LoginFormContainer';
import {HomeRouter} from '../common/navbar/router';
import Splash from './Splash';
const LoginNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  SubmitAddress: {screen: SubmitAddress},
  CustomizeInterestList: { screen: CustomizeInterestList},
  Home: {screen: HomeRouter, navigationOptions:{
     left: null
   }}
 }, {
   headerMode: 'none'
 }, {
   header: null
 });


export default LoginNavigator;
