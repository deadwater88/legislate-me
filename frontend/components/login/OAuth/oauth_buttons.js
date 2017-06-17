import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../../common';
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
    // authUser = this.props.authUser;
    // this.configureConnection = this.configureConnection.bind(this);
  }

  configureConnection(){
   GoogleSignin.configure({
     forceConsentPrompt: true
   })
   .then(() => {
    //  debugger;
     GoogleSignin.signIn()
       .then((user) => {
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
        <FBOAuth/>
      <Button
          style={{width: 300, height: 100, backgroundColor:'black'}}
          onPress={this.configureConnection}
          title="Continue with Google"
          color="#00008B"
        />
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
  },
  googleStyle: {
    height: 40,
    width: 300,
    backgroundColor: 'gray',
    color: 'yellow'
  }
};

export default connect(null, mapDispatchToProps)(OAuthButtons);
