import React from 'react';
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
    </View>
  }
}

const LegislateMe = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('legislate_me', () => LegislateMe);
