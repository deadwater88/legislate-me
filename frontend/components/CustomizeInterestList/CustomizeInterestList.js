import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';

import { SUBJECTS } from '../../util/subject_api_util';
import CustomizeInterestListItem from './CustomizeInterestListItem';
import CustomizeHeader from './CustomizeHeader';

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

  zipped(subjects){
    let zippedArray = [];
    Object.keys(subjects).forEach((key) => {
      const value = subjects[key];
      zippedArray.push([key, value]);
    });

    return zippedArray;
  }

  //the subjects array is a two d array-- each entry
  // is a key of subject string and value of false because this has been hardcoded in the subject api util


  render(){
    return (
      <View>

        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderRow={(data) =>
            <CustomizeInterestListItem data={data} />
          }
          renderHeader={() => <CustomizeHeader />}
          />
      </View>
    )
  }
}

// add bottom separator
const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default CustomizeInterestList;
