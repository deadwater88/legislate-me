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
    color: '#015249',
    fontSize: 25,
    fontWeight: '900',
    paddingTop: 18,
    paddingBottom: 18
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderColor: '#015249',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginLeft: 35,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 35,
    height: 90
  }
});

export { Button };
