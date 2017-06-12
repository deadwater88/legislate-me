import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FBSDK from 'react-native-fbsdk';
import { authUser } from '../../../actions/session_actions';


const LoginButton = FBSDK.LoginButton;
const AccessToken = FBSDK.AccessToken;
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;


class FBOAuth extends Component {
  render() {
    // AccessToken.getCurrentAccessToken().then(data => {
    //   let res = {tokenType: 'facebook', 'id': data.userID};
    //   this.props.authUser(res);
    // });
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
                  res.tokenType = 'facebook';
                  this.props.authUser(res);
                }

              };

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
    onLogoutFinished={() => alert("You have logged out of Facebook")}/>
</View>
    );
  }
}

export default FBOAuth;
