import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from '../common';

const ContactRepresentativesView = ({reps}) => {
  const styles = {
    container: {
                display: 'flex',
                flexDirection: 'row',
              },
    contact: {

    },
    call: {

    },
    email: {

    }
  };
  const { container, contact, call, email } = styles;

  return(
    <CardSection style={container}>
      <Text style={contact}>Contact your representatives</Text>
      <TouchableOpacitystyle={phone}> </TouchableOpacity>
      <TouchableOpacitystyle={email}> </TouchableOpacity>
    </CardSection>
  );
};

export default ContactRepresentativesView;
