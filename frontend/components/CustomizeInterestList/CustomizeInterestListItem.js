import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

class CustomizeInterestListItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View><Text>{this.props.data}</Text></View>
    )
  }
}

export default CustomizeInterestListItem;
