import React, {Component} from 'react';


import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { authUser } from '../actions/session_actions';

import {
  AppRegistry,
  PanResponder,
  View,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import UserProfileNavigator from './user_profile/user_profile_navigator';

import FBOAuth from './login/OAuth/oauth';

import LoginFormContainer from './login/LoginFormContainer.js';
import Splash from './login/Splash.js';

import CustomizeInterestList from './CustomizeInterestList/CustomizeInterestList.js';
import CustomizeInterestListContainer from './CustomizeInterestList/CustomizeInterestListContainer.js';

import SubmitAddress from './login/submit_address/submit_address_container';
import LoginNavigator from './login/login_navigator';

import call from 'react-native-phone-call';
import Communications from 'react-native-communications';


// Initialize three cards that the user can swipe between:
// Splash Page, OAuth login, Normal Login
class LoginSwiping extends Component{
  constructor(props){
    super(props);
    this.configureConnection = this.configureConnection.bind(this);
  }

  configureConnection(){
    GoogleSignin.configure()
    .then(() => {
      GoogleSignin.signIn()
        .then((user) => {
          authUser(user);
        })
        .catch((err) => {
        })
        .done();
    });
  }

  render(){
    const navigate = this.props.navigation.navigate;
    // <Swiper>
    //   <View>
    //     <Splash navigation={this.props.navigation} />
    //   </View>
    //   <View>
    //     <LoginNavigator />
    //   </View>
    // </Swiper>
    return (<Button title="Make a call" onPress={() => Communications.phonecall('0123456789', true)}
    />);
  }
}

// Give the user the option to click between the screens
const LegislateMe = StackNavigator({
  Main: {screen: LoginSwiping},
  Login: {screen: LoginNavigator }
});

// Create App
class App extends Component {
  render(){
    return (
      <LegislateMe/>
    );
  }
}


module.exports = App;
