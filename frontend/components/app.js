import React from 'react';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {
  AppRegistry,
  Text,
  View

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FBOAuth from './OAuth/oauth';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <View>
      <Text>Hello, Navigation!</Text>
      <FBOAuth />
      <GoogleSigninButton
      style={{width: 48, height: 48}}
      size={GoogleSigninButton.Size.Icon}
      color={GoogleSigninButton.Color.Dark}
      onPress={console.log("hi")}/>
    </View>
  }
}

const LegislateMe = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('legislate_me', () => LegislateMe);
