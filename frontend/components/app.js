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
import UserProfileNavigator from './user_profile/user_profile_navigator';

import CustomizeInterestList from './CustomizeInterestList/CustomizeInterestList';
import CustomizeInterestListContainer from './CustomizeInterestList/CustomizeInterestListContainer.js';

// Initialize three cards that the user can swipe between:
// Splash Page, OAuth login, Normal Login
class LoginSwiping extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const navigate = this.props.navigation.navigate;

    return (
      // <Swiper>
      //   <View>
      //     <Splash navigation={navigate}/>
      //   </View>
        <UserProfileNavigator />
      //   <View>
      //     <Text>Hello, Navigation!</Text>
      //     <FBOAuth />
      //     <GoogleSigninButton
      //     style={{width: 48, height: 48}}
      //     size={GoogleSigninButton.Size.Icon}
      //     color={GoogleSigninButton.Color.Dark}
      //     onPress={console.log("hi")}/>
      //   </View>
      //   <View>
      //     <LoginForm/>
      //   </View>
      //   <View>
      //     <CustomizeInterestList/>
      //   </View>
      // </Swiper>
    );

  }
}

// Give the user the option to click between the screens
const LegislateMe = StackNavigator({
  Main: {screen: LoginSwiping},
  Login: {screen: LoginForm},
});

// Create App
class App extends Component {
  render(){
    console.log("in app");
    return (
      <LegislateMe/>
    );
  }
}

// AppRegistry.registerComponent('legislate_me', () => LegislateMe);
module.exports = App;
