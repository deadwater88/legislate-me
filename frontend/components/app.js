import React, {Component} from 'react';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
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


// Initialize three cards that the user can swipe between:
// Splash Page, OAuth login, Normal Login
class LoginSwiping extends Component{
  constructor(props){
    super(props);
    console.log(props);
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
          onPress={console.log("hi")}/>
        </View>
        <View>
          <LoginForm/>
        </View>
        <View>
          <CustomizeInterestList/>
        </View>
      </Swiper>
    )
  }
}

const LegislateMe = StackNavigator({
  Main: {screen: LoginSwiping},
  Login: {screen: LoginForm}
});

AppRegistry.registerComponent('legislate_me', () => LegislateMe);
