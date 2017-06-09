import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import React, { Component } from 'react';
import BillIndex from '../../bill_index/bill_index';
import UserProfile from '../../user_profile/user_profile_container';
import BillView from '../../bill_view/bill_view_container';
import BillIndexItem from '../../bill_index/bill_index_item';
import UserProfileNavigator from '../../user_profile/user_profile_navigator';
import Subject from '../../subjects/subject_container';
// import explore and bookmarked

const BillNavigator = StackNavigator({
  BillIndex: {
    screen: BillIndex,
    navigationOptions: {
      tabBarLabel: 'Feed',
      showIcon: 'true',
      tabBarIcon: <Icon name="home" size={20} />,
    },
  },
  BillIndexItem: { screen: BillIndexItem },
  BillView: { screen: BillView }
}, {
  headerMode: 'none'
}, {
  header: null
});


// Add explore ("globe-o") and bookmarked ("bookmark") options once they're available
export const HomeRouter = TabNavigator({
  BillNavigator: {
    screen: BillNavigator
  },
  UserProfile: {
    screen: UserProfileNavigator,
    navigationOptions: {
      tabBarLabel: 'Profile',
      showIcon: 'true',
      tabBarIcon: <Icon name="user-o" size={20}/>,
    },
  },
  Explore: {
    screen: Subject,
    navigationOptions: {
      tabBarLabel: 'Explore',
      showIcon: 'true',
      tabBarIcon: <Icon name="globe-o" size={20}/>,
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
