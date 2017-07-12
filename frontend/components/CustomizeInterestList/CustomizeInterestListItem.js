import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import CheckBox from 'react-native-check-box';

class CustomizeInterestListItem extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render(){
    return (
      <View>
        <CheckBox
          style={{flex: 1, padding: 20, backgroundColor: 'white'}}
          onClick={()=>this.onClick()}
          isChecked={this.props.data[1]}
          leftText={this.props.data[0]}
          />
      </View>
    );
  }

  onClick(){
    this.props.selectSubject(this.props.data[0]);
  }
}

export default CustomizeInterestListItem;
