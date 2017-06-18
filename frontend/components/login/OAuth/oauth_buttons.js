import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../../common';
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
        <FBOAuth/>
        <TouchableOpacity
          onPress={this.configureConnection}>
            <View
              style={
                {
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"center",
                  marginLeft: -25,
                  padding: 2,
                  paddingLeft: 17,
                  borderColor: "blue",
                  borderWidth: 1,
                  backgroundColor:"#4285F4",
                  marginTop: 10,
                }}>
              <Icon.Button
                  name="google"
                  onPress={this.configureConnection}
                  color="white"
                  backgroundColor="#4285F4"
                  padding={0}
                  marginRight= {10}
                  marginLeft={15}
                />
              <Text
                style={{color: "white",
                  marginRight: 10,
                  marginLeft: -5,
                  fontWeight: "500"
                  }}>
                  Continue with Google
                </Text>
              <View style={{backgroundColor: "white"}}>
              </View>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',

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
