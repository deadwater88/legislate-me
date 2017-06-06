import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import { SUBJECTS } from '../../util/subject_api_util';
// import CustomizeInterestListItem from './CustomizeInterestListItem';

class CustomizeInterestList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(Object.keys(SUBJECTS))
    };
  }

  // componentDidMount(){
  //   // this.props.fetchSubjects();
  // }

  render(){
    return (
      <ListView
         dataSource={this.state.dataSource}
         renderRow={(data) =>
           <View><Text>{data}</Text></View>
         }
       />
    )
  }
}
// <CustomizeInterestListItem {...data}/>


export default CustomizeInterestList;
