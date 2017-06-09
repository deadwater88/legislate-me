import React from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';

import { SUBJECTS, SUBJECT_IMAGES } from '../util/subject_api_util';

class SubjectsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { imageStyle } = styles;
    const subjects = Object.keys(SUBJECTS).map(key => {
      return(
        <View style={{flexDirection: 'column'}}>
          <Image style={imageStyle} source={SUBJECT_IMAGES[`${key}`]} />
          <Text>key</Text>
        </View>
      );
    });
    return(
      <ScrollView>
        <Text style={{}}>Discover new bills by subject</Text>
        {subjects}
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle: {
    height: 100,
    width: 200
  }
};

export default SubjectsIndex;
