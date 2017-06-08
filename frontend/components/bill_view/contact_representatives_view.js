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
      <Icon name="phone-square" size={30} color="#009E11" style={phoneCall} />
      <Icon name="envelope" size={30} color="#CF2A28" style={email} />
    </CardSection>
  );
};

export default ContactRepresentativesView;
