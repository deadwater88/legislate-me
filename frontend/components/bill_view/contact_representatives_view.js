import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from '../common';
import Icon from 'react-native-vector-icons/FontAwesome';

class ContactRepresentativesView extends React.Component {
   constructor(props){
     super(props);
     this.onEmail = this.onEmail.bind(this);
     this.onCall = this.onCall.bind(this);
   }

   onEmail(){
     console.log("You've emailed your representatives!");
   }

   onCall(){
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
