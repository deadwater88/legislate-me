import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle} = styles;
 return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  columns: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 40
  },
  repsView: {
    paddingBottom: 40
  },
  address: {
    paddingBottom: 40
  },
  signout: {
    paddingBottom: 10
  },
  imageStyle: {
    height: 150,
    width: '100%',
    borderRadius: 5,
    paddingBottom: 5
  }
};

export { Input };
