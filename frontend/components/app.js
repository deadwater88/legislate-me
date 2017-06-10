import React, {Component} from 'react';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { authUser } from '../actions/session_actions';

import {
  AppRegistry,
  PanResponder,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Splash from './login/Splash.js';
import LoginNavigator from './login/login_navigator';
import {HomeRouter} from './common/navbar/router';

import SubjectsIndex from './subjects/subjects_index';
// Give the user the option to swipe between screens
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

    return (
      <Swiper>
        <View>
          <Splash navigation={this.props.navigation} />
        </View>
        <View>
          <LoginNavigator />
        </View>
      </Swiper>
    )
  }
}

// Give the user the option to click between the screens
const LoginSignUpNavigator = StackNavigator({
  Main: {screen: LoginSwiping},
  Login: {screen: LoginNavigator}
}, {
  headerMode: 'none'
}, {
  header: null
});


// Create App
class App extends Component {
  constructor(props){
    super(props);
    console.log("in app");
  }

  render(){
    if (this.props.currentUser){
      return (
        <HomeRouter/>
      );
    } else {
      return (
        <LoginSignUpNavigator/>
      );
    }
  }
}

export default App;
