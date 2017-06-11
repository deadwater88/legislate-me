import React from 'react';
import {  View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';
import { SUBJECTS, SUBJECT_IMAGES } from '../../util/subject_api_util';

class SubjectsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { imageStyle, headerText, labelText, imageGroup } = styles;
    const subjects = Object.keys(SUBJECT_IMAGES).map((key,idx) => {
      const image = SUBJECT_IMAGES[key];
      return(
          <View style={imageGroup} key={idx}>
            <Image style={imageStyle}
              source={image} />

            <Text style={labelText}>{key}</Text>

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
    height: 200,
    width: 400
  },
  headerText:{
    paddingTop:20,
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20,
    color: 'white',
    backgroundColor: '#2980B9'
  },
  labelText:{
    fontSize: 18,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: 'black',
    padding: 3
  }
};


export default SubjectsIndex;
