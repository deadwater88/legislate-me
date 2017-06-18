import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import merge from 'lodash/merge';

const Button = ({ onPress, children, buttonStyle, textStyle}) => {
  console.log(merge);
  buttonStyle = merge(defaultStyles.buttonStyle, buttonStyle);
  textStyle = merge(defaultStyles.textStyle, textStyle);
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const defaultStyles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    paddingTop: 18,
    paddingBottom: 18
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2c3e50',
    marginLeft: 19,
    marginRight: 19,
    height: 90,
    width: '90%'
  }
};

export { Button };
