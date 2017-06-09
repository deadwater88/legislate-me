import React from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';

import { SUBJECTS, SUBJECT_IMAGES } from './subject_api_util';

class SubjectsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { imageStyle, headerText, labelText } = styles;
    const subjects = Object.keys(SUBJECTS).map((key,idx) => {
      const pic  = {
        uri:  SUBJECT_IMAGES[{key}]
      };
      return(
        <View style={{flexDirection: 'column'}} key={idx}>
          <Image style={imageStyle} source={pic} />
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
  imageStyle: {
    height: 100,
    width: 200
  },
  headerText:{
    paddingTop:20,
    textAlign: 'center',
    fontSize: 20
  },
  labelText:{
    textAlign: 'center'
  }
};

export default SubjectsIndex;
