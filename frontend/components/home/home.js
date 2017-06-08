import React, { Component } from 'react';
// import { View, Text, TouchableHighlight, StackNavigator } from 'react-native';
// import Router from '../common/navbar/navbar_navigator';
// import BillIndex from '../bill_index/bill_index';
// import UserProfile from '../user_profile/user_profile_container';
import { Router } from '../common/navbar/router';
import { View, Text } from 'react-native';

class Home extends Component{
  render(){
    return (
      <View>
        <Text> HOME </Text>
        <Router />
      </View>

    );
  }
};


export default Home;
