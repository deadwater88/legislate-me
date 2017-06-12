import React from 'react';
import {  View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';
import { SUBJECTS, SUBJECT_IMAGES } from '../../util/subject_api_util';

class SubjectsIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderBills = this.renderBills.bind(this);
  }

  renderBills(subjectName){
    this.props.navigation.navigate('BillIndex', {subjectName});
  }

  render(){
    const { imageStyle, headerText, labelText, imageGroup } = styles;
    const subjects = Object.keys(SUBJECT_IMAGES).map((subjectName,idx) => {
      const image = SUBJECT_IMAGES[subjectName];
      return(
          <View style={imageGroup} key={idx}>
            <TouchableHighlight onPress={() => this.renderBills(subjectName)}>
              <Image
                style={imageStyle}
                source={image} />
            </TouchableHighlight>
            <Text style={labelText}>{subjectName}</Text>
          </View>

      );
    });
    return(
      <ScrollView>
        <Text style={headerText}>Discover new bills by subject</Text>
        {subjects}
      </ScrollView>
    );
  }
}

const styles = {
  imageGroup: {
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    opacity: 0.8
  },
  headerText:{
    paddingTop:30,
    textAlign: 'center',
    fontSize: 25,
    paddingBottom: 30,
    color: 'black',
    backgroundColor: '#ecf0f1'
  },
  labelText:{
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '97%',
    margin: 6,
    padding: 5,
    backgroundColor: '#34495e',
    color: '#ecf0f1',
  }
};


export default SubjectsIndex;
