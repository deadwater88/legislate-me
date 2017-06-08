import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../../common';
import FBOAuth from './oauth';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { authUser } from '../../../actions/session_actions';

class OAuthButtons extends Component {
  constructor(props){
    super(props);
    this.configureConnection = this.configureConnection.bind(this);
  }

  configureConnection(){

   GoogleSignin.configure({
     forceConsentPrompt: true
   })
   .then(() => {
     GoogleSignin.signIn()
       .then((user) => {
         console.log('USER SIGNED IN SUCCESSFULLY');
         console.log(user);
         authUser(user);
       })
        .catch((err) => {
         console.log('Something went wrong :(', err);
        })
       .done();
   });
  }

  render(){
    const { containerStyle, buttonStyle} = styles;
    return(
      <View style={containerStyle}>
        <FBOAuth style={{
          height: 40,
          width: 292
        }}
        />
        <GoogleSigninButton
        style={buttonStyle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.configureConnection.bind(this)}/>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 40,
    width: 300,
  }
};

export default OAuthButtons;
