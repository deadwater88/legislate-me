import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FBSDK from 'react-native-fbsdk';
const LoginButton = FBSDK.LoginButton;
const AccessToken = FBSDK.AccessToken;
class FBOAuth extends Component {
  render() {
    return (
      <View>
  <LoginButton style={this.props.style}
    publishPermissions={["publish_actions"]}
    onLoginFinished={
      (error, result) => {
        if (error) {
          alert("login has error: " + result.error);
        } else if (result.isCancelled) {
          alert("login is cancelled.");
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data);
              alert(data.accessToken.toString())
            }
          )
        }
      }
    }
    onLogoutFinished={() => alert("logout.")}/>
</View>
    );
  }
}

export default FBOAuth;
