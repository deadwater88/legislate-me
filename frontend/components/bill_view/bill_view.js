import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

import ContactRepresentativesView  from './contact_representatives_view';
import SponsorBillView from './sponsor_bill_view';

import { Card, CardSection } from '../common';
//Pass Bill Info in with props as bill
class BillView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  reveal_blurb: false
                };
    this.toggleBlurb = this.toggleBlurb.bind(this);
  }

  toggleBlurb(){
    const newState = !this.state.reveal_blurb;
    this.setState({reveal_blurb: newState});
  }

  render(){
    const {billTitle, billImage, blurb, billState, billChamber } = styles;
    const pic  = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/US_Capitol_west_side.JPG'
    };
    return(
      <Card>
        <CardSection>
          <Text style={billTitle}>{this.props.bill.title}</Text>
          <Text style={billState}>{this.props.bill.state}</Text>
          <Text style={billChamber}>{this.props.bill.chamber}</Text>
        </CardSection>
        <CardSection>
            <Image style={billImage} source={pic} />
        </CardSection>

        <ContactRepresentativesView
          reps={this.props.contactRepresentatives} />

        <CardSection>
          <Text style={blurb}>blurby</Text>
        </CardSection>

        <SponsorBillView
          sponsors={this.props.bill.sponsors} />

      </Card>
    );
  }
}
const styles = {

    billTitle: {

    },
    billImage: {

    },
    blurb: {

    },
    billState: {

    },
    billChamber: {

    }
};

export default BillView;
