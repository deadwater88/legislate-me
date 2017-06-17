import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Button } from 'react-native';

import { SUBJECTS } from '../../util/subject_api_util';
import CustomizeInterestListItem from './CustomizeInterestListItem';
import CustomizeHeader from './CustomizeHeader';
import { finishSetup } from '../../util/user_api_util';
//import BillNavigator here instead
class CustomizeInterestList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.saveInterests = this.saveInterests.bind(this);
    let subjects = this.props.subjects;
    this.state = {
      dataSource: ds.cloneWithRows(this.zipped(this.props.subjects)),
      subjects
    };
    this.selectSubject = this.selectSubject.bind(this);
  }

  selectSubject(subject){
    this.state.subjects[subject] = !this.state.subjects[subject];
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
    this.props.saveSubjects(this.state.subjects);
    finishSetup();
    if (this.props.navigation.state && this.props.navigation.state.params.fromSubmitAddress){

    } else{
      setTimeout(this.props.navigation.goBack, 100);
    }
  }

  render(){
    return (
      <View>
        <Button
          onPress={this.saveInterests}
          title="Continue"
          color="#015249"
          accessibilityLabel="Save your interests"
        />
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderRow={(data) =>
            <CustomizeInterestListItem data={data} selectSubject={this.selectSubject} />
          }
          renderHeader={() => <CustomizeHeader />}
          />
      </View>
    );
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
