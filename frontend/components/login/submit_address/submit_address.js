import React from 'react';
import { TextInput, Button, Text, TouchableHighlight } from 'react-native';
import {Card, CardSection} from '../../../components/common';
import OAuthButtons from '../OAuth/oauth_buttons';

class SubmitAddress extends React.Component {
  constructor(){
    super();
    this.state = {address: ""};
    this.findRepresentative = this.findRepresentative.bind(this);
  }

  findRepresentative(){

  }
  render(){
    return(
      <Card>
        <CardSection>
        <TextInput
          placeholder="Enter your street address"
          value={this.state.address}
          onChangeText={address => this.setState({address})}
          />
      </CardSection>
      <CardSection>
        <Button onPress={this.findRepresentative}
          title='Find your representative!'>
        </Button>
        </CardSection>
        <Text>Skip for now</Text>
   </Card>
    );
  }
}

export default SubmitAddress;
