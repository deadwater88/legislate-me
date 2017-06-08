// import BillIndex from '../../bill_index/bill_index';
// import UserProfileNavigator from '../../user_profile/user_profile_navigator';
//
// const Router = StackNavigator({
//   BillIndex: {screen: BillIndex},
//   UserProfile: {screen: UserProfileNavigator}
// });
//
// export default Router;

import { TabNavigator } from 'react-navigation';

import React, { Component } from 'react';
// import { View, Text, TouchableHighlight, StackNavigator } from 'react-native';
import BillIndex from '../../bill_index/bill_index';
import UserProfile from '../../user_profile/user_profile_container';
import CustomizeInterestListContainer from '../../CustomizeInterestList/CustomizeInterestListContainer';
import CustomizeInterestList from '../../CustomizeInterestList/CustomizeInterestList';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export const HomeRouter = TabNavigator({
  CustomizeInterest: {
    screen: CustomizeInterestListContainer,
    navigationOptions: {
      tabBarLabel: 'Feed',
      showIcon: 'true',
      tabBarIcon: <Icon name="home" size={20}/>,
    },
  },
  BillIndex: {
    screen: BillIndex,
    navigationOptions: {
      tabBarLabel: 'Feed',
      showIcon: 'true',
      tabBarIcon: <Icon name="home" size={20}/>,
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      showIcon: 'true',
      tabBarIcon: <Icon name="user-o" size={20}/>,
    },
  }
}, {
  tabBarOptions: {
    tabBarPosition: 'bottom',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: 'black',
    },
  },
}
);
