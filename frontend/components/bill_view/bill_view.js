import React from 'react';
import {Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ContactRepresentativesView  from './contact_representatives_view';
import SponsorBillView from './sponsor_bill_view';
import RepresentativesView from '../user_profile/RepresentativesView';


import { Card, CardSection } from '../common';
//Pass Bill Info in with props as bill
class BillView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  reveal_blurb: false,
                  blurb: ''
                };
    this.toggleBlurb = this.toggleBlurb.bind(this);
  }

  toggleBlurb(){
    const newState = !this.state.reveal_blurb;
    if(newState === true){
    this.setState({blurb: this.props.blurb});
  } else{
    this.setState({blurb: ''});
  }
  this.setState({reveal_blurb: newState});
  }

  render(){
    const {billTitle, billImage, blurb, billState, billChamber, billSponsors, blurbHeader, blurbText } = styles;
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

        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize:16, paddingBottom: 3}}>Contact your representatives:</Text>
          <RepresentativesView reps={this.props.representatives} />
        </View>

          <TouchableHighlight onPress={this.toggleBlurb}>
          <View style={blurb}>
            <View style={blurbHeader}>
              <Text style={{fontSize: 16}}>Bill Details</Text>
              <Icon.Button name="arrow-circle-down"
                 size={20}
                 color="grey"
                 backgroundColor='white'
                 margin={0}
                 padding={0}
                 onPress={this.toggleBlurb}
                 />
            </View>
             <Text style={blurbText}>{this.state.blurb}</Text>
          </View>
        </TouchableHighlight>

        <View style={billSponsors}>
          <Text style={{fontSize: 16}}>Bill Sponsors</Text>
          <SponsorBillView
            sponsors={this.props.bill.sponsors} />
        </View>
      </Card>
    );
  }
}
const styles = {

    billTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10,
      paddingTop: 10
    },
    billImage: {
      flex: 1,
      width: 100,
      height: 200
    },
    blurbHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    blurb: {
      borderBottomWidth: 1,
      borderColor: '#ddd',
      padding: 5
    },
    blurbText: {

    },
    billState: {
      fontSize: 12,
      color: 'grey'
    },
    billChamber: {
      fontSize: 12,
      color: 'grey'
    },
    billSponsors: {
      padding: 5
    }
};
export default BillView;
