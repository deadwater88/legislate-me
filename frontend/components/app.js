import React from 'react';
import {
  AppRegistry,
  PanResponder,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './login/LoginForm.js';
import Splash from './login/Splash.js';
import Swiper from 'react-native-swiper';

import CustomizeInterestList from './CustomizeInterestList/CustomizeInterestList.js';


// Initialize three cards that the user can swipe between:
// Splash Page, OAuth login, Normal Login
const LegislateMe = React.createClass({
  render: function(){
    return (
      <Swiper>
        <View>
          <Splash/>
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
});
// const LegislateMe = StackNavigator({
//   Splash: { screen: Splash },
//   Login: {screen: LoginForm }
// });

AppRegistry.registerComponent('legislate_me', () => LegislateMe);
