import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../../common';
import FBOAuth from './oauth_container';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { connect } from 'react-redux';
import { signup, authUser } from '../../../actions/session_actions';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <FBOAuth style={buttonStyle}
        />
        <GoogleSigninButton
        style={buttonStyle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.configureConnection}/>
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
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    width: 300
  }
};

export default connect(null, mapDispatchToProps)(OAuthButtons);
