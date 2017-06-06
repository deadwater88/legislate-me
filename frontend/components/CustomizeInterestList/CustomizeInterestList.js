import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import { SUBJECTS } from '../../util/subject_api_util';
// import CustomizeInterestListItem from './CustomizeInterestListItem';
class CustomizeInterestList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([

      ])
    }
  }

  componentDidMount(){
    // this.props.fetchSubjects();
  }

  render(){
    return (
      <View>
        <ListView
          dataSource={this.state.subjects}
          renderRow{(rowData) => <Text>{rowData}</Text>}
          />
      </View>
    )
  }
}

export default CustomizeInterestList;
