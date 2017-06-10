import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import React, { Component } from 'react';
import BillIndex from '../../bill_index/bill_index_container';
import UserProfile from '../../user_profile/user_profile_container';
import BillView from '../../bill_view/bill_view_container';
import BillIndexItem from '../../bill_index/bill_index_item';
import UserProfileNavigator from '../../user_profile/user_profile_navigator';
import SubjectsIndex from '../../subjects/subjects_index';
// import explore and bookmarked

import BookmarkedBills from '../../bookmarked_bills/bookmarked_bills';

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
  Bookmarks: {
    screen: BookmarkedBills
  },
  BillNavigator: {
    screen: BillNavigator
  },
  Explore: {
    screen: SubjectsIndex,
    navigationOptions: {
      tabBarLabel: 'Explore',
      showIcon: 'true',
      tabBarIcon: <Icon name="globe" size={20}/>,
    },
  },
  UserProfile: {
    screen: UserProfileNavigator,
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
