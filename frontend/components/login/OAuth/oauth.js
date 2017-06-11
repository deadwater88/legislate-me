import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FBSDK from 'react-native-fbsdk';
const LoginButton = FBSDK.LoginButton;
const AccessToken = FBSDK.AccessToken;
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;
import { authUser } from '../../../actions/session_actions';


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
              let accessToken = data.accessToken;
              const responseInfoCallback = (err, res) => {
                if (error) {
                  alert('Error fetching data: ' + err.toString());
                } else {
                  console.log("WE MADE IT", res);
                  // debugger;
                  this.props.authUser(res);
                }
              }

              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name'
                    }
                  }
                },
                responseInfoCallback
              );

              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start();
            }
          );
        }
      }
    }
    onLogoutFinished={() => alert("logout.")}/>
</View>
    );
  }
}

export default FBOAuth;
