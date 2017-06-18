import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import React, { Component } from 'react';
import BillIndex from '../../bill_index/bill_index_container';
import UserProfile from '../../user_profile/user_profile_container';
import BillView from '../../bill_view/bill_view_container';
import BillIndexItem from '../../bill_index/bill_index_item';
import UserProfileNavigator from '../../user_profile/user_profile_navigator';
import SubjectsIndex from '../../subjects/subjects_index';
import { fetchBills } from '../../../actions/bill_actions';
// import explore and bookmarked
import { connect } from 'react-redux';
const mapDispatchToProps = (dispatch) => ({
  fetchBills: () => dispatch(fetchBills)
});

import BookmarkedBills from '../../bookmarked_bills/bookmarked_bills_container';

const BillNavigator = StackNavigator({
  BillIndex: {
    screen: BillIndex,
    navigationOptions: {
      tabBarLabel: 'Feed',
      showIcon: 'true',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor}} name="home" size={20}/>
       ),
      left: null
    },
  },
  BillIndexItem: { screen: BillIndexItem },
  BillView: { screen: BillView }
}, {
  headerMode: 'none'
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
  },
});


// Add explore ("globe-o") and bookmarked ("bookmark") options once they're available
export const HomeRouter = TabNavigator({
  BillNavigator: {
    screen: BillNavigator
  },
  Bookmarks: {
    screen: BookmarkedBills,
    navigationOptions: {
      tabBarLabel: 'Bookmarks',
      showIcon: 'true',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor}} name="bookmark" size={20}/>
       )
    },
  },
  Explore: {
    screen: SubjectsIndex,
    navigationOptions: {
      tabBarLabel: 'Explore',
      showIcon: 'true',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor}} name="globe" size={20}/>
       )
     },
  },
  UserProfile: {
    screen: UserProfileNavigator,
    navigationOptions: {
      tabBarLabel: 'Profile',
      showIcon: 'true',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor}} name="user-o" size={20}/>
       )
     },
  }
}, {
  lazy: true,
  tabBarPosition: "top",
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#015249'
    }
  }
});
