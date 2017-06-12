import React from 'react';
import { Button, Text, TouchableHighlight } from 'react-native';
import {Card, CardSection, Input} from '../../../components/common';
import OAuthButtons from '../OAuth/oauth_buttons';

class SubmitAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = {address: "",
                  city: "",
                  state: "",
                  zip: ""};
    this.findRepresentative = this.findRepresentative.bind(this);
    this.navigateToCustomizeInterest = this.navigateToCustomizeInterest.bind(this);
    // this.skipEnteringAddress = this.skipEnteringAddress.bind(this);
  }

  findRepresentative(){

    this.props.createAddress(this.state.address
    + " " + this.state.city + " " + this.state.state + " " +
     this.state.zip).then(this.navigateToCustomizeInterest);
    //need to navigate to bill index from here.
  }

  navigateToCustomizeInterest(){
    // this.props.navigation.navigate maybe?

    this.props.navigation.navigate('CustomizeInterestList', {fromSubmitAddress: true});
  }

  render(){

    return(
      <Card>

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
          placeholder="Los Angeles"
          label="City"
          value={this.state.city}
          onChangeText={(city) => this.setState({city})}
          />
      </CardSection>
      <CardSection>
        <Input
          placeholder="CA"
          label="State"
          value={this.state.state}
          onChangeText={(state) => this.setState({state})}
          />
      </CardSection>
      <CardSection>
        <Input
          placeholder="90001"
          label="Zip code"
          value={this.state.zip}
          onChangeText={(zip) => this.setState({zip})}
          />
      </CardSection>
      <CardSection>
        <Button onPress={this.findRepresentative}
          title='Find your representative!'>
        </Button>
        </CardSection>

        <Text>We will not save your address. It is only used to find your representatives.</Text>

   </Card>
    );
  }
}

export default SubmitAddress;
