import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

import ContactRepresentativesView  from './contactRepresentativesView';
import LegislatorBillView from './legislatorBillView';

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
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Golden_Gate_bridge_pillar.jpg/400px-Golden_Gate_bridge_pillar.jpg'
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
        <CardSection>
          <ContactRepresentativesView
            reps={this.props.contactRepresentatives} />
        </CardSection>
        <CardSection>
          <Text style={blurb}>blurby</Text>
        </CardSection>
        <CardSection>
          <LegislatorBillView
            legislators={this.props.bill.sponsors} />
        </CardSection>
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
