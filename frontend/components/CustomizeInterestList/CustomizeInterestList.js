import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';

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
      zippedArray.push([key, value])
    })

    return zippedArray;
  }

  render(){
    return (
      <ListView
         dataSource={this.state.dataSource}
         renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
         renderRow={(data) =>
           <CustomizeInterestListItem data={data} />
         }
       />
    )
  }
}

// add bottom separator
const styles = StyleSheet.create({
  /*
   * Removed for brevity
   */
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default CustomizeInterestList;
