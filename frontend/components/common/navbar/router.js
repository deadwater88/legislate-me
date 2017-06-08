import { TabNavigator } from 'react-navigation';

import React, { Component } from 'react';
import BillIndex from '../../bill_index/bill_index';
import UserProfile from '../../user_profile/user_profile_container';
import Icon from 'react-native-vector-icons/FontAwesome';
// import explore and bookmarked


// Add explore ("globe-o") and bookmarked ("bookmark") options once they're available
export const HomeRouter = TabNavigator({
  BillIndex: {
    screen: BillIndex,
    navigationOptions: {
      tabBarLabel: 'Feed',
      showIcon: 'true',
      tabBarIcon: <Icon name="home" size={20} />,
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
  tabBarPosition: "bottom",
  tabBarOptions: {
    showIcon: true,
    showLabel: false
  },
}
);
