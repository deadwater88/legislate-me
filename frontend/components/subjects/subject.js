import React from 'react';
import { View, Text, Image } from 'react-native';


class Subject extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount(){
  this.props.fetchSubject();
}

  render(){
    return(
      <View>
        <Text></Text>
      </View>
    );
  }
}

const styles = {
  header: {

  }
};

export default Subject;
