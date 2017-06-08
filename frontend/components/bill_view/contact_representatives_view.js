import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';

import { CardSection } from '../common';

class ContactRepresentativesView extends React.Component {
   constructor(props){
     super(props);
     this.onEmail = this.onEmail.bind(this);
     this.onCall = this.onCall.bind(this);
   }

   onEmail(){
     Communications.phonecall('valid_number', true);
     console.log("You've emailed your representatives!");
   }

   onCall(){
     Communications.email(['emailAddress1', 'emailAddress2'],
     null,null,
     `My Support for ${this.props.bill.title}` ,
     `I think you should support ${this.props.bill.title} `);
     console.log("You've called your representatives!");
   }

   render(){

     const { container, contact, phoneCall, email } = styles;

     return(
       <View style={container}>
         <Text style={contact}>Contact your representatives</Text>
         <Icon name="phone-square"
            size={30}
            color="#009E11"
            onPress={this.onCall}
            style={phoneCall} />
         <Icon name="envelope"
            size={30}
            color="#CF2A28"
            onPress={this.onEmail}
            style={email} />
        </View>
     );
   }
}
const styles = {
  container: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            },
  contact: {

  },
  phonecall: {

  },
  email: {

  }
};

export default ContactRepresentativesView;
