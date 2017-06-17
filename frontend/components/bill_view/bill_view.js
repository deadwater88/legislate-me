import React from 'react';
import {Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ContactRepresentativesView  from './contact_representatives_view';
import SponsorBillView from './sponsor_bill_view';
import RepresentativesView from '../user_profile/RepresentativesView';


import { Card, CardSection } from '../common';
//Pass Bill Info in with props as bill
class BillView extends React.Component {
  constructor(props){
    super(props);
    // debugger; //check why this.props.representatives is null
    this.state = {
      reveal_blurb: false,
      blurb: ''
    };
    this.toggleBlurb = this.toggleBlurb.bind(this);
  }

  componentDidMount(){
    this.props.fetchBillInfo(this.props.billId);
  }

  toggleBlurb(){
    const newState = !this.state.reveal_blurb;
    if(newState === true){
      this.setState({blurb: this.props.bill.blurb});
    } else{
      this.setState({blurb: ''});
    }
    this.setState({reveal_blurb: newState});
  }

  render(){
    const {container,billTitle, billImage, blurb, billState, billChamber, billSponsors, blurbHeader, blurbText } = styles;

    const {
      bill_id,
      chamber,
      first,
      img_id,
      last,
      os_id,
      sponsor,
      state,
      subject,
      summary_url,
      title
    } = this.props.bill;


    const billBlurb = this.state.blurb;
    if (!state){
      return (<Text></Text>)
    } else {
      const capitalizedChamber = chamber[0].toUpperCase().concat(chamber.slice(1,chamber.length));
      return(
        <ScrollView >
          <View style={container}>
            <View>
              <Text style={billTitle}>{title}</Text>
              <Text style={billState}>State: {state.toUpperCase()}</Text>
              <Text style={billChamber}>Chamber: {capitalizedChamber}</Text>
            </View>
              <Image style={billImage} source={img_id} />

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 15, color: 'black'}}>Contact your representatives:</Text>

                <RepresentativesView
                  representatives={this.props.representatives}
                  bill={this.props.bill}
                  userName={this.props.userName}
                  />

            </View>
            <TouchableHighlight onPress={this.toggleBlurb}>
              <View style={blurb}>
                <View style={blurbHeader}>
                  <Text style={{fontSize: 16}}>Bill Details</Text>
                  <Icon.Button name="arrow-circle-down"
                    size={20}
                    color="black"
                    backgroundColor='#ecf0f1'
                    margin={0}
                    padding={0}
                    onPress={this.toggleBlurb}
                    />
                </View>
                <Text style={blurbText}>{billBlurb}</Text>
              </View>
            </TouchableHighlight>

            <View style={billSponsors}>
              <Text style={{fontSize: 16}}>Bill Sponsors</Text>
              <SponsorBillView
                sponsor={sponsor}/>
            </View>

          </View>
        </ScrollView>
      )
    }
  }
}



const styles = {
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  billTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 20,
    color: 'black',
    backgroundColor: 'white'
  },
  billImage: {
    width: '100%',
    marginTop: 15,
    marginBottom: 20
  },
  blurbHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  blurb: {
    backgroundColor: 'white'
  },
  blurbText: {
    marginTop: 8,
    backgroundColor: '#ecf0f1'
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
    padding: 5,
    marginTop: 10,
    marginBottom: 10
  }
};
export default BillView;
