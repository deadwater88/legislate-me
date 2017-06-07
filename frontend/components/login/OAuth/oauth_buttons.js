import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../../common';
import FBOAuth from './oauth';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class OAuthButtons extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <FBOAuth
        />
        <GoogleSigninButton
        style={{width: 305, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={console.log("hi")}/>
      </View>
    )
  }
};

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
};

export default OAuthButtons;
