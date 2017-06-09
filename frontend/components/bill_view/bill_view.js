import React from 'react';
import {Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <View>
          <Text style={billTitle}>{this.props.bill.title}</Text>
          <Text style={billState}>{this.props.bill.state}</Text>
          <Text style={billChamber}>{this.props.bill.chamber}</Text>
        </View>
        <CardSection>
            <Image style={billImage} source={pic} />
        </CardSection>

        <ContactRepresentativesView
          reps={this.props.contactRepresentatives} />

        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={blurb}>Bill Details</Text>
            <Icon.Button name="arrow-circle-down"
               size={20}
               color="#CF2A28"
               backgroundColor='white'
               margin={0}
               padding={0}
               />
        </View>

        <SponsorBillView
          sponsors={this.props.bill.sponsors} />

      </Card>
    );
  }
}
const styles = {

  billTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  billImage: {
    flex: 2,
    width: 100,
    height: 100
  },
  blurb: {

  },
  billState: {
    fontSize: 12,
    color: 'grey'
  },
  billChamber: {
    fontSize: 12,
    color: 'grey'
  }
};

export default BillView;
