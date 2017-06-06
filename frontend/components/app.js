import React from 'react';
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


// const LegislateMe = React.createClass({
//   render: function(){
//     return (
//       <Swiper>
//         <View>
//           <Splash/>
//         </View>
//         <View>
//           <LoginForm/>
//         </View>
//         <View>
//           <CustomizeInterestList/>
//         </View>
//       </Swiper>
//     )
//   }
// });

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <View>
      <Text>Hello, Navigation!</Text>
      <FBOAuth />
      <GoogleSigninButton
      style={{width: 48, height: 48}}
      size={GoogleSigninButton.Size.Icon}
      color={GoogleSigninButton.Color.Dark}
      onPress={console.log("hi")}/>
    </View>
  }
}

const LegislateMe = StackNavigator({
  Splash: { screen: Splash },
});
// Login: {screen: LoginForm }

AppRegistry.registerComponent('legislate_me', () => LegislateMe);
