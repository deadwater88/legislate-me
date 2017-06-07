import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StackNavigator } from 'react-native';
import NavbarNavigator from '../common/navbar/navbar_navigator';

class Home = TabNavigator({
  Home: {
    screen: Bill,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


export default Home;
