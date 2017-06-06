import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import { SUBJECTS } from '../../util/subject_api_util';
import CustomizeInterestListItem from './CustomizeInterestListItem';

class CustomizeInterestList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.zipped(SUBJECTS))
    };
  }

  zipped(hash){
    let zippedArray = [];
    Object.keys(hash).forEach((key) => {
      const value = hash[key];
      zippedArray.push({ key: value })
    })

    return zippedArray;
  }

  render(){
    return (
      <ListView
         dataSource={this.state.dataSource}
         renderRow={(data) =>
           <CustomizeInterestListItem data={data} />
         }
       />
    )
  }
}

export default CustomizeInterestList;
