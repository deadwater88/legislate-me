import React from 'react';
import {Text, View, Image, TouchableHighlight, ScrollView, Linking } from 'react-native';
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
      this.setState({blurb: this.props.bill.blurb,
        link: this.props.bill.summary_url,
        linkTitle: 'Read More'
        });
    } else{
      this.setState({blurb: '', link: '', linkTitle: ''});
    }
    this.setState({reveal_blurb: newState});
  }

  render(){
    const {container,billTitle, billImage, blurb,
      billState, billChamber, billSponsors, blurbHeader,
      blurbText, representative } = styles;

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
    const linkTitle = this.state.linkTitle;
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

            <View style={representative}>
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
                  <Text style={{fontSize:20, fontWeight: 'bold', color: 'black'}}>Bill Details</Text>
                  <Icon.Button name="arrow-circle-down"
                    size={30}
                    color="black"
                    backgroundColor='white'
                    marginBottom={10}
                    padding={0}
                    onPress={this.toggleBlurb}
                    />
                </View>
                <Text style={blurbText}>
                  {billBlurb}
                  <Text onPress={() => {
                    Linking.openURL(summary_url)
                  }}>
                  {linkTitle}
                  </Text>
                </Text>
              </View>
            </TouchableHighlight>

            <View style={billSponsors}>
              <Text style={{fontSize: 16, color: 'black', marginBottom: 10}}>Bill Sponsors</Text>
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
    flex: 1,
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
  },
  representative: {
    flexDirection: 'column',
    paddingBottom: 30,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
};
export default BillView;
