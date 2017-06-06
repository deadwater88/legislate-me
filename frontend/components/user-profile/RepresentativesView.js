import React from 'react';
import { ListView, View } from 'react-native';
import { parseRepresentatives } from '../../reducers/selectors';

class RepresentativesView extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(parseRepresentatives(this.props.reps))
    };
  }

  render(){
    return(
      <View style={{flex: 1, paddingTop: 22}}>
        ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
      </View>
    );
  }
}

export default RepresentativesView;