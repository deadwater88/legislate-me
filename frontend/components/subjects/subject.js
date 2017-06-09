import React from 'react';
import { View, Text, Image } from 'react-native';

import { BillIndexContainer } from '../bill_index/bill_index_container';


class Subject extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount(){
  const bills = this.props.fetchSubject();
  this.setState({bills});
}

  render(){
    const { header, subjectImage } = styles;
    return(
      <View>
        <Text style={ header }> {this.props.subject.name}</Text>
        <Image style={subjectImage} />
        <BillIndexContainer/>
      </View>
    );
  }
}

const styles = {
  header: {

  },
  subjectImage: {

  }
};

export default Subject;
