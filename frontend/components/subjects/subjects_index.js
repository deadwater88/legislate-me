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
      <ScrollView style={styles.container} contentContainerSTyle={{
      justifyContent: 'flex-start'}}>
      <Text style={headerText}>Discover new bills by subject</Text>
        {subjects}
      </ScrollView>
    );
  }
}
const styles = {
  container: {
    backgroundColor: 'black',
    opacity: 0.8,
  },
  imageGroup: {
    flexDirection: 'row',
    height: 'auto',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  imageStyle: {
    opacity: 0.6,
    flex: 1,
    alignSelf: 'stretch'
  },
  headerText:{
    paddingTop:10,
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 10,

    color: 'white',
    flex: 1
  },
  labelText:{
    position: 'absolute',
    fontSize: 35,
    fontWeight: 'bold',
    bottom: 50,
    alignSelf: 'center',
    left: 30,
    width: '85%',
    color: 'white',

  }
};


export default SubjectsIndex;
