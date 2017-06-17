import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import FBSDK from 'react-native-fbsdk';
import { authUser, logout } from '../../../actions/session_actions';

const LoginButton = FBSDK.LoginButton;
const AccessToken = FBSDK.AccessToken;
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class FBOAuth extends Component {
  render() {
    return (
      <View >
        <TouchableOpacity style={styles.button}>

          <LoginButton
            style={styles.fbButton}
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
            onLogoutFinished={() => {
              this.props.logout();
            }
          }
          />
      </TouchableOpacity>
    </View>
  );
}
}
const styles = {
  fbButton: {
    alignSelf: 'center',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#2c3e50',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 50,
    width: 295,
    zIndex: 2
  },
  button: {
    width: 400,
    backgroundColor: 'black',
    zIndex: 0
  }
};
export default FBOAuth;
