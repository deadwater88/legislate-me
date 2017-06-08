import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from '../common';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactRepresentativesView = ({reps}) => {
  const styles = {
    container: {
                display: 'flex',
                flexDirection: 'row',
              },
    contact: {

    },
    phonecall: {

    },
    email: {

    }
  };
  const { container, contact, phoneCall, email } = styles;

  return(
    <CardSection style={container}>
      <Text style={contact}>Contact your representatives</Text>
      <TouchableOpacity style={phoneCall}> </TouchableOpacity>
      <TouchableOpacity style={email}> </TouchableOpacity>
    </CardSection>
  );
};

export default ContactRepresentativesView;
