import React from 'react';
import { Button, Text, TouchableHighlight } from 'react-native';
import {Card, CardSection, Input} from '../../../components/common';
import OAuthButtons from '../OAuth/oauth_buttons';

class SubmitAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = {address: "",
                  cityState: "",
                  zip: ""};
    this.findRepresentative = this.findRepresentative.bind(this);
    this.navigateToCustomizeInterest = this.navigateToCustomizeInterest.bind(this);
    // this.skipEnteringAddress = this.skipEnteringAddress.bind(this);
  }

  findRepresentative(){
    this.props.createAddress(this.state.address).then(this.navigateToCustomizeInterest);
    //need to navigate to bill index from here.
  }

  navigateToCustomizeInterest(){
    // this.props.navigation.navigate maybe?
    this.props.navigate('CustomizeInterestList');
  }

  render(){
    console.log('SUBMIT ADDRESS RENDER FUNC HIT');
    return(
      <Card>
        <Text>RENDER MAN DANG</Text>
        <CardSection>
        <Input
          placeholder="160 Baker St."
          label="Address"
          value={this.state.address}
          onChangeText={(address) => this.setState({address})}
          />
      </CardSection>
      <CardSection>
        <Input
          placeholder="Los Angeles, CA"
          label="City and State"
          value={this.state.cityState}
          onChangeText={(cityState) => this.setState({cityState})}
          />
      </CardSection>
      <CardSection>
        <Input
          placeholder="90001"
          label="Zipcode"
          value={this.state.zip}
          onChangeText={(zip) => this.setState({zip})}
          />
      </CardSection>
      <CardSection>
        <Button onPress={this.findRepresentative}
          title='Find your representative!'>
        </Button>
        </CardSection>
        <Text>Skip for now </Text>

   </Card>
    );
  }
}

export default SubmitAddress;
