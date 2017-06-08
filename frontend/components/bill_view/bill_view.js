import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

import contactRepresentativesView  from './contactRepresentativesView';
import legislatorBillView from './legislatorBillView';

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
    const {billTitle, billImage, blurb  } = styles;

    return(
      <Card>
        <CardSection>
          <Text style={billTitle}>{this.props.bill.title}</Text>
        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
        </CardSection>
      </Card>
    );
  }
}

export default BillView;
