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
import { Icon } from 'react-native-elements';

export const Router = TabNavigator({
  CustomizeInterest: {
    screen: CustomizeInterestListContainer,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    }
  },
  UserProfile: {
    screen: UserProfile,
  },
  BillIndex: {
    screen: BillIndex,
  },
});
