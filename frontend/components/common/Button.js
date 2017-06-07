import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    paddingTop: 18,
    paddingBottom: 18
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#2c3e50',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2c3e50',
    marginLeft: 19,
    marginRight: 19,
    height: 70,
    width: '90%'
  }
};

export { Button };
