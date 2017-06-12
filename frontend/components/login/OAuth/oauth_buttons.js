import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../../common';
import FBOAuth from './oauth_container';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { connect } from 'react-redux';
import { signup, authUser } from '../../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  authUser: user => dispatch(authUser(user))
});


class OAuthButtons extends Component {
  constructor(props){
    super(props);
    this.configureConnection = this.configureConnection.bind(this);
    this.state = {flag: false};
  }

  configureConnection(){
    // this.state.flag = true;
    if (this.state.flag) {
      return "";
    }
    this.state.flag = true;
     GoogleSignin.configure({
       forceConsentPrompt: true
     })
     .then(() => {
       GoogleSignin.signIn()
         .then((user) => {
          //  this.state.flag = false;
           let userNameSplit = user.name.split(" ");
           user.first_name = userNameSplit[0];
           user.last_name = userNameSplit[userNameSplit.length-1];
           user.tokenType = 'google';
           this.props.authUser(user);
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
        onPress={()=> this.configureConnection() }/>
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

export default connect(null, mapDispatchToProps)(OAuthButtons);
