import React, {Component} from 'react';
import Communications from 'react-native-communications';


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


// import RNCommunications from './communications';

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
<<<<<<< HEAD
    return (
      <Swiper>
        <View>
          <RNCommunications/>
        </View>
        <View>
          <Splash navigation={this.props.navigation} />
        </View>
        <View>
          <LoginNavigator />
        </View>
      </Swiper>
    );
=======
    // <Swiper>
    //   <View>
    //     <Splash navigation={this.props.navigation} />
    //   </View>
    //   <View>
    //     <LoginNavigator />
    //   </View>
    // </Swiper>
    return (<Button title="Send email" onPress ={ () => Communications.email(['emailAddress'], null, null, null, 'my body text')}
    />);
>>>>>>> fd16c71cbd71afc0ae54839bc4b28bb1398120fe
  }
}

// Give the user the option to click between the screens
const LegislateMe = StackNavigator({
  Main: {screen: LoginSwiping},
  Login: {screen: LoginNavigator}
});

// Create App
// class App extends Component {
//   render(){
//     return (
//       <LegislateMe/>
//     );
//   }
// }
class App extends Component {
  render(){
    return (
      <TouchableOpacity onPress={() => Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')}>
        <View>
          <Text>Send an email</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


module.exports = App;
