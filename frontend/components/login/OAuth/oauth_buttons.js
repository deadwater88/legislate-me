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
        onPress={console.log("hi")}/>
      </View>
    )
  }
};

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 40,
    width: 300,
  }
};

export default OAuthButtons;
