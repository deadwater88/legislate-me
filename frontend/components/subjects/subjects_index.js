import React from 'react';
import { View, Text, TouchableHighlight, ListView, Image } from 'react-native';
import { SUBJECTS, SUBJECT_IMAGES } from '../../util/subject_api_util';

class SubjectsIndex extends React.Component {
  render(){
    const { imageStyle, headerText, labelText, imageGroup } = styles;
    const subjects = Object.keys(SUBJECTS).map((key,idx) => {
      const pic  = {
        uri:  SUBJECT_IMAGES[{key}]
      };
      // <Image style={imageStyle} source={pic} />
      // <View style={imageGroup} key={idx}>
      //   <Text style={labelText}>{key}</Text>
      // </View>
      return(
        <Text>{key}</Text>
      );
    });
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const listViewDataSource = ds.cloneWithRows(subjects);
    // <Text style={headerText}>Discover new bills by subject</Text>
    console.log(listViewDataSource);
    return(
      <View>
        <ListView
          dataSource={listViewDataSource}
          renderRow={(rowData) => <View>{rowData}</View>}
          />
      </View>
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
    paddingBottom: 20
  },
  labelText:{
    fontSize: 16,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
};

export default SubjectsIndex;
