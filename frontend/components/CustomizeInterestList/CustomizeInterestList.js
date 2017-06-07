import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Button } from 'react-native';

import { SUBJECTS } from '../../util/subject_api_util';
import CustomizeInterestListItem from './CustomizeInterestListItem';
import CustomizeHeader from './CustomizeHeader';

class CustomizeInterestList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.selectedSubjects = [];
    this.saveInterests = this.saveInterests.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(this.zipped(SUBJECTS))
    };
    this.selectSubject = this.selectSubject.bind(this);
  }

  selectSubject(subject){
    this.selectedSubjects.push(subject);
  }

  //the subjects array is a two d array-- each entry
  // is a key of subject string and value of false because this has been hardcoded in the subject api util
  zipped(subjects){
    let zippedArray = [];
    Object.keys(subjects).forEach((key) => {
      const value = subjects[key];
      zippedArray.push([key, value]);
    });

    return zippedArray;
  }

  saveInterests(){
    this.selectedSubjects.forEach(subject => this.props.saveSubject(subject));
  }

  render(){
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderRow={(data) =>
            <CustomizeInterestListItem data={data} selectSubject={this.selectSubject} />
          }
          renderHeader={() => <CustomizeHeader />}
          />
          <Button
            onPress={this.saveInterests}
            title="Continue"
            color="#841584"
            accessibilityLabel="Save your interests"
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
