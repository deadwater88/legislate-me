import React, {Component} from 'react';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { authUser } from '../actions/session_actions';

import {
  AppRegistry,
  PanResponder,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';


import FBOAuth from './login/OAuth/oauth';

import LoginForm from './login/LoginForm.js';
import Splash from './login/Splash.js';

import CustomizeInterestList from './CustomizeInterestList/CustomizeInterestList.js';
import CustomizeInterestListContainer from './CustomizeInterestList/CustomizeInterestListContainer.js';

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
          console.log(user);
          authUser(user);
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
    });
  }

  render(){
    const navigate = this.props.navigation.navigate;
    return (
      <Swiper>
        <View>
          <Splash navigation={navigate}/>
        </View>
        <View>
          <Text>Hello, Navigation!</Text>

          <FBOAuth />
          <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.configureConnection}/>

        </View>
        <View>
          <LoginForm/>
        </View>
        <View>
          <CustomizeInterestListContainer/>
        </View>
      </Swiper>
    )
  }
}

// Give the user the option to click between the screens
const LegislateMe = StackNavigator({
  Main: {screen: LoginSwiping},
  Login: {screen: LoginForm}
});

// Create App
class App extends Component {
  render(){
    console.log("in app");
    return (
      <LegislateMe/>
    )
  }
}

// AppRegistry.registerComponent('legislate_me', () => LegislateMe);
module.exports = App;
