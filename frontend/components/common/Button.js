import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const styles = StyleSheet.create({
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
    backgroundColor: '#2c3e50',
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
});

export { Button };
