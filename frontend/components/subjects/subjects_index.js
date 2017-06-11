import React from 'react';
import { View, Text, TouchableHighlight, ListView, Image } from 'react-native';
import { SUBJECTS, SUBJECT_IMAGES } from '../../util/subject_api_util';

class SubjectsIndex extends React.Component {
  contructor(){
    this.renderBillsBySubect = this.renderBillsBySubect.bind(this);
  }
  renderBillsBySubect(e){
    console.log(e);
    debugger
  }

  render(){
    const { imageStyle, headerText, labelText, imageGroup } = styles;
    const subjects = Object.keys(SUBJECTS).map((key,idx) => {
      const pic  = SUBJECT_IMAGES[key];
      // console.log(pic);
      // <Image style={imageStyle} source={pic} />
      // <View style={imageGroup} key={idx}>
      //   <Text style={labelText}>{key}</Text>
      // </View>
      return(
        <View>
            <Image
              source={{uri: pic}}
              style={{width: 50, height: 50}}
               />
            <Text>{key}</Text>
        </View>
      );
    });
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const listViewDataSource = ds.cloneWithRows(subjects);
    // console.log(listViewDataSource);
    return(
      <View>
        <Text style={headerText}>Discover new bills by subject</Text>
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
