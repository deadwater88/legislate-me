import React from 'react';
import { Button, Text, TouchableHighlight } from 'react-native';
import {Card, CardSection, Input} from '../../../components/common';
import OAuthButtons from '../OAuth/oauth_buttons';

class SubmitAddress extends React.Component {
  constructor(){
    super();
    this.state = {address: ""};
    this.findRepresentative = this.findRepresentative.bind(this);
    this.navigateToCustomizeInterest.bind(this);
  }

  findRepresentative(){
    this.props.createAddress(this.state.address).then(this.navigateToCustomizeInterest);
    //need to navigate to bill index from here.
  }

  navigateToCustomizeInterest(){
    this.props.navigate('CustomizeInterestList');
  }

  render(){
    return(
      <Card>
        <CardSection>
        <Input
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
