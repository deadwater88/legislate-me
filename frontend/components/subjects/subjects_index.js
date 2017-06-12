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
      <ScrollView style={styles.container}>
        <Text style={headerText}>Discover new bills by subject</Text>
        {subjects}
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0.8
  },
  imageGroup: {
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    opacity: 0.6,
    flex: 1
  },
  headerText:{
    paddingTop:30,
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 30,
    color: 'white',
  },
  labelText:{
    fontSize: 35,
    fontWeight: 'bold',
    bottom: 130,
    alignSelf: 'center',
    left: 30,
    width: '97%',
    color: 'white',
  }
};


export default SubjectsIndex;
