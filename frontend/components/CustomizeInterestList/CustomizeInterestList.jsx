import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
// import CustomizeInterestListItem from './CustomizeInterestListItem';
class CustomizeInterestList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSubjects();
  }

  render(){
    // CustomizeInterestListItems = map each subject to a CustomizeInterestListItem

    return (
      <View>
        // <ul>
            // CustomizeInterestListItems
        // </ul>
      </View>
    )
  }
}

export default CustomizeInterestList;
